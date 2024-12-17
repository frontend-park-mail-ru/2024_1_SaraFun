import { Router } from '../../../app/Router';
import { getParams } from '../../../app/getParams';
import { ChatPreview } from '../../../entities/ChatPreview/ChatPreview';
import { Chat } from '../../../entities/Chat/Chat';
import { getChatPreviews } from '../api/getChatPreviews';
import { postMessage } from '../api/postMessage';
import { getFilteredChatPreviews } from '../api/getFilteredChatPreviews';
import { getChat } from '../api/getChat';
import { WsMessage } from '../../../entities/WsMessage/WsMessage';
import template from './chats.pug';
import templateChat from '../../../widgets/Chat/Chat.pug';
import templateChatsPreviews from '../../../widgets/ChatPreviews/ChatPreviews.pug';
import templatePlaceholder from '../../../shared/components/ChatPlaceholder/ChatPlaceholder.pug';
import templateMessage from '../../../shared/components/Message/AddMessage.pug';
import { notificationManager } from '../../../widgets/Notification/notification';

export class ChatsPage {
	private parent: Router;
	private previews: ChatPreview[] = [];
	private debounceTimeout: number | undefined;
	private socket: WebSocket | undefined;
	private pingInterval: number | undefined;
	private params: { [key: string]: string };

	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent: Router) {
		this.parent = parent;
		this.params = getParams();
		this.parent.root.innerHTML = '';
		//this.initWebSocket();
		this.render();
		window.addEventListener('resize', this.handleResize);
	}

	private handleResize(): void {
        const width = window.innerWidth;
		const chatContainer = document.querySelector('.chat') as HTMLElement;
		const chatPreviewsContainer = document.querySelector('.chats-list') as HTMLElement;
		if (chatContainer && chatPreviewsContainer) {
			if (width < 800) {
				if (chatContainer.classList.contains('chat--active')) {
					chatPreviewsContainer.style.display = 'none';
				} else {
					chatContainer.style.display = 'none';
				}
			} else {
				chatContainer.style.display = 'flex';
				chatPreviewsContainer.style.display = 'flex';
			}
		}
    }

	handleMessage(data: WsMessage) {
		if (data.type === "message") {
			this.handleNewMessage(data, new Date().toISOString(), false);
		} else {
			notificationManager.addNotification(`У вас новый мэтч с пользователем ${data.username}`, 'info');
		}
	}

    async render(): Promise<void> {
		const chatIdParam = this.params['param'];

        if (chatIdParam && !Number.isInteger(Number(chatIdParam))) {
            this.parent.navigateTo('/chats');
            return;
        }

		this.previews = await getChatPreviews();

		if (chatIdParam) {
			const chatId = Number(chatIdParam);
			const preview = this.previews.find(preview => preview.id === chatId);

			if (!preview) {
				this.parent.navigateTo('/chats');
				return;
			}
		}

		if (this.previews) {
			this.previews = this.sortPreviewsByTime(this.previews);
		}

		this.parent.root.innerHTML = template({ previews: this.previews });
		if (this.previews && this.previews.length > 0) {
			this.addChatSelectionListeners();
			this.addSearchListener();
		}

		const width = window.innerWidth;

		if (chatIdParam) {
			const chatId = Number(chatIdParam);
			this.loadChat(chatId);
			if (width <= 800) {
				const chatList = document.querySelector('.chats-list') as HTMLElement;
				if (chatList) {
					chatList.style.display = 'none';
				}
			}
		} else {
			if (width <= 800) {
				const chat = document.querySelector('.chat') as HTMLElement;
				if (chat) {
					chat.style.display = 'none';
				}
			}
		}
    }

	sortPreviewsByTime(previews: ChatPreview[]): ChatPreview[] {
        return previews.sort((a, b) => {
            const timeA = new Date(a.time).getTime();
            const timeB = new Date(b.time).getTime();
            return timeB - timeA;
        });
    }

	addChatSelectionListeners(): void {
		const chatPreviews = document.querySelectorAll('.chats-list__chat');
		chatPreviews.forEach((preview) => {
			preview.addEventListener('click', () => {
				const index = parseInt(preview.getAttribute('data-id') as string);
				this.loadChat(index);
				history.pushState({}, '', `/chats/${index}`);
				const width = window.innerWidth;
				if (width <= 800) {
					const chat = document.querySelector('.chat') as HTMLElement;
					if (chat) {
						chat.style.display = 'flex';
					}
					const chatList = document.querySelector('.chats-list') as HTMLElement;
					if (chatList) {
						chatList.style.display = 'none';
					}
				}
			});
		});
	}

	async loadChat(index: number): Promise<void> {
		const chatData: Chat = await getChat(index);
		this.renderChat(chatData);
	}

	addSearchListener(): void {
		const searchInput = document.querySelector('.search-container__search') as HTMLInputElement;
		const searchButton = document.querySelector('.search-container__search-button') as HTMLButtonElement;
		if (searchInput) {
			searchInput.addEventListener('input', () => {
				clearTimeout(this.debounceTimeout);
				this.debounceTimeout = window.setTimeout(() => {
					const searchTerm = searchInput.value;
					if (searchTerm !== "") {
						this.performSearch(searchTerm);
					} else {
						this.updateChatList(this.previews);
					}
				}, 400);
			});
		}
		if (searchButton) {
			searchButton.addEventListener('click', () => {
				searchInput.value = '';
				this.updateChatList(this.previews);
			});
		}
	}

	async performSearch(searchTerm: string): Promise<void> {
		const filteredPreviews = await getFilteredChatPreviews(searchTerm); 
		this.updateChatList(filteredPreviews);
	}

	updateChatList(filteredPreviews: ChatPreview[]): void {
		const chatListContainer = document.querySelector('.chats-list__content');
		if (chatListContainer) {
			if (filteredPreviews) {
				filteredPreviews = this.sortPreviewsByTime(filteredPreviews);
			}
			chatListContainer.innerHTML = templateChatsPreviews({ previews: filteredPreviews });
			this.addChatSelectionListeners();
			
		}
	}

	renderChat(chatData: any): void {
		const chatContainer = document.querySelector('.chat');
		chatContainer.classList.add('chat--active');
		if (chatContainer) {
		  	chatContainer.innerHTML = templateChat({ chatData });

			const chatMessagesContainer = document.querySelector('.chat__messages');
			if (chatMessagesContainer) {
				chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
			}
			
			const closeButton = chatContainer.querySelector('.chat__header__close-button') as HTMLButtonElement;
			if (closeButton) {
				closeButton.addEventListener('click', () => {
					chatContainer.innerHTML = templatePlaceholder(); 
					history.pushState({}, '', `/chats`);
					const width = window.innerWidth;
					if (width <= 800) {
						const chat = document.querySelector('.chat') as HTMLElement;
						if (chat) {
							chat.style.display = 'none';
						}
						const chatList = document.querySelector('.chats-list') as HTMLElement;
						if (chatList) {
							chatList.style.display = 'flex';
						}
					}
					chatContainer.classList.remove('chat--active');
				});
			}

			const sendButton = chatContainer.querySelector('.chat__input__button') as HTMLButtonElement;
      		const messageInput = chatContainer.querySelector('.chat__input__field') as HTMLInputElement;
      		if (sendButton && messageInput) {
				const sendMessage = async () => {
					const messageText = messageInput.value.trim();
					if (messageText) {
						const message =  {
							body: messageText,
							self: true,
							time: new Date().toISOString(),
						}
						await postMessage(chatData.profile.id, messageText);
						this.addMessageToChat(message); 
						messageInput.value = ''; 
					}
				};

				sendButton.addEventListener('click', sendMessage);
        		messageInput.addEventListener('keydown', (event) => {
          			if (event.key === 'Enter') {
            			event.preventDefault();
            			sendMessage();
          			}
        		});
      		}
		}
	}

	handleNewMessage(message: { author_id: number, message: string }, time: string, self: boolean): void {
		const chatPreview = this.previews.find(preview => preview.id === message.author_id);

        if (chatPreview) {
            chatPreview.last_message = message.message;

            chatPreview.time = time;
			chatPreview.self = self;
            this.updateChatList(this.previews);

			const chatMessagesContainer = document.querySelector('.chat__messages');
			if (chatMessagesContainer) {
				const noMessagesElement = chatMessagesContainer.querySelector('.chat__no-messages');
				if (noMessagesElement) {
					noMessagesElement.remove(); 
				}
				const chatId = chatMessagesContainer.getAttribute('data-id');
				if (chatId && parseInt(chatId) === message.author_id) {
					const lastMessageDateElement = chatMessagesContainer.querySelector('.chat__messages__date:last-of-type');
					let lastDate = null;
					if (lastMessageDateElement) {
						lastDate = new Date(lastMessageDateElement.textContent.trim());
					}

					const messageDate = new Date(time);
					const formattedDate = messageDate.toLocaleDateString();

					if (!lastDate || lastDate.toLocaleDateString() !== formattedDate) {
						const dateHtml = `<div class="chat__messages__date">${formattedDate}</div>`;
						chatMessagesContainer.insertAdjacentHTML('beforeend', dateHtml);
					}
					const messageHtml = templateMessage({ message: { body: message.message, time, self } });
					chatMessagesContainer.insertAdjacentHTML('beforeend', messageHtml);
					chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
				}
			}
        }
    }

	addMessageToChat(message: any): void {
		const chatMessagesContainer = document.querySelector('.chat__messages');
		if (chatMessagesContainer) {
			const noMessagesElement = chatMessagesContainer.querySelector('.chat__no-messages');
      		if (noMessagesElement) {
        		noMessagesElement.remove(); 
      		}
			const lastMessageDateElement = chatMessagesContainer.querySelector('.chat__messages__date:last-of-type');
			let lastDate = null;
			if (lastMessageDateElement) {
				lastDate = new Date(lastMessageDateElement.textContent.trim());
			}

		  	const messageHtml = templateMessage({ message });
		  	chatMessagesContainer.insertAdjacentHTML('beforeend', messageHtml);
		  	chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

			const chatId = chatMessagesContainer.getAttribute('data-id');
			if (chatId) {
				this.previews.find(preview => preview.id === parseInt(chatId)).last_message = message.body;
				this.previews.find(preview => preview.id === parseInt(chatId)).time= message.time;
				this.updateChatList(this.previews);
			}
		}
	}
}