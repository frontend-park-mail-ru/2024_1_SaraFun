import { Router } from '../../../app/Router';
import { ChatPreview } from '../../../entities/ChatPreview/ChatPreview';
import { Chat } from '../../../entities/Chat/Chat';
import { getChatPreviews } from '../api/getChatPreviews';
import { postMessage } from '../api/postMessage';
import { getFilteredChatPreviews } from '../api/getFilteredChatPreviews';
import { getChat } from '../api/getChat';
import { createWebSocket } from '../api/ws';
import template from './chats.pug';
import templateChat from '../../../widgets/Chat/Chat.pug';
import templateChatsPreviews from '../../../widgets/ChatPreviews/ChatPreviews.pug';
import templatePlaceholder from '../../../shared/components/ChatPlaceholder/ChatPlaceholder.pug';
import templateMessage from '../../../shared/components/Message/AddMessage.pug';

export class ChatsPage {
	private parent: Router;
	private previews: ChatPreview[] = [];
	private debounceTimeout: number | undefined;
	private socket: WebSocket | undefined;
	private pingInterval: number | undefined;

	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.initWebSocket();
		this.render();
	}

	startPing(): void {
        this.pingInterval = window.setInterval(() => {
            if (this.socket && this.socket.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify({ type: 'ping' }));
                console.log('Ping sent');
            }
        }, 29000);
    }

	initWebSocket(): void {
		this.socket = createWebSocket();

		this.socket.addEventListener('open', () => {
			console.log('WebSocket connection established');
			this.startPing();
		});
	
		this.socket.addEventListener('message', (event) => {
			const message = JSON.parse(event.data);
			console.log('New message received:', message);
			this.handleNewMessage(message);
		});
	
		this.socket.addEventListener('close', () => {
			console.log('WebSocket connection closed');
		});
	
		this.socket.addEventListener('error', (error) => {
			console.error('WebSocket error:', error);
		});
    }

	handleNewMessage(message: { user_id: number, message: string }): void {
		const chatPreview = this.previews.find(preview => preview.id === message.user_id);
		console.log('chatPreview:', chatPreview);
        if (chatPreview) {
            chatPreview.last_message = message.message;
			console.log('last_message:', chatPreview.last_message);
            chatPreview.time = new Date().toLocaleTimeString();
			chatPreview.self = false;
            this.updateChatList(this.previews);
        }
    }

    async render(): Promise<void> {
		this.previews = await getChatPreviews();
		
		this.parent.root.innerHTML = template({ previews: this.previews });
		if (this.previews && this.previews.length > 0) {
			this.addChatSelectionListeners();
			this.addSearchListener();
		}
    }

	addChatSelectionListeners(): void {
		const chatPreviews = document.querySelectorAll('.chats-list__chat');
		chatPreviews.forEach((preview) => {
			preview.addEventListener('click', () => {
				const index = parseInt(preview.getAttribute('data-id') as string);
				const usernameElement = preview.querySelector('.chats-list__chat__info__header__name');
				const avatarElement = preview.querySelector('.chats-list__chat__avatar__img');
				const username = usernameElement ? usernameElement.textContent : '';
				const avatar = avatarElement ? avatarElement.getAttribute('src') : './img/user.svg';
				this.loadChat(index, username, avatar);
			});
		});
	}

	addSearchListener(): void {
		const searchInput = document.querySelector('.search-container__search') as HTMLInputElement;
		const searchButton = document.querySelector('.search-container__search-button') as HTMLButtonElement;
		if (searchInput) {
			searchInput.addEventListener('input', () => {
				clearTimeout(this.debounceTimeout);
				this.debounceTimeout = window.setTimeout(() => {
					const searchTerm = searchInput.value;
					this.performSearch(searchTerm);
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
		  chatListContainer.innerHTML = templateChatsPreviews({ previews: filteredPreviews });
		  this.addChatSelectionListeners();
		}
	}

	async loadChat(index: number, username: string, avatar: string): Promise<void> {
		const chatData: Chat = await getChat(index);
		this.renderChat(chatData);
	}

	renderChat(chatData: any): void {
		const chatContainer = document.querySelector('.chat');
		if (chatContainer) {
		  	chatContainer.innerHTML = templateChat({ chatData });

			const chatMessagesContainer = document.querySelector('.chat__messages');
			if (chatMessagesContainer) {
				chatMessagesContainer.scrollTop = chatContainer.scrollHeight;
			}
			
			const closeButton = chatContainer.querySelector('.chat__header__close-button') as HTMLButtonElement;
			if (closeButton) {
				closeButton.addEventListener('click', () => {
					chatContainer.innerHTML = templatePlaceholder(); 
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
							date: '2021-07-01',
							self: true,
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

	addMessageToChat(message: any): void {
		const chatMessagesContainer = document.querySelector('.chat__messages');
		if (chatMessagesContainer) {
			const noMessagesElement = chatMessagesContainer.querySelector('.chat__no-messages');
      		if (noMessagesElement) {
        		noMessagesElement.remove(); 
      		}
		  	const messageHtml = templateMessage({ message });
		  	chatMessagesContainer.insertAdjacentHTML('beforeend', messageHtml);
		  	chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
		}
	}
}