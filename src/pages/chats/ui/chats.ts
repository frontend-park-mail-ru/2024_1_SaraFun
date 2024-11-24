import { Router } from '../../../app/Router';
import { ChatPreview } from '../../../entities/ChatPreview/ChatPreview';
import { Chat } from '../../../entities/Chat/Chat';
import { getChatPreviews } from '../api/getChatPreviews';
import { postMessage } from '../api/postMessage';
import { getFilteredChatPreviews } from '../api/getFilteredChatPreviews';
import template from './chats.pug';
import templateChat from '../../../widgets/Chat/Chat.pug';
import templateChatsPreviews from '../../../widgets/ChatPreviews/ChatPreviews.pug';
import templatePlaceholder from '../../../shared/components/ChatPlaceholder/ChatPlaceholder.pug';
import templateMessage from '../../../shared/components/Message/AddMessage.pug';

export class ChatsPage {
	private parent: Router;
	private previews: ChatPreview[] = [];
	private debounceTimeout: number | undefined;

	/**
     * Creates an instance of FeedPage.
     * @param {Object} parent - The parent object containing the root element.
     */
	constructor(parent: Router) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render();
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
					const searchTerm = searchInput.value.toLowerCase();
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
		/*const filteredPreviews = this.previews.filter(preview =>
		  preview.first_name.toLowerCase().includes(searchTerm)
		);*/
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
		//const chatData = await getChatData(index);
		const chatData: Chat[] = [
			{
			  id: 1,
			  username: username,
			  first_name: username,
			  last_name: 'Doe',
			  images: null,
			  messages: [
					{ body: 'Hello', date: '2021-07-01', self: false }, 
					{ body: 'How are you?', date: '2021-07-01', self: false }, 
					{ body: 'I am fine, thank you!', date: '2021-07-01', self: true }
				]
			},
			{
			  id: 2,
			  username: username,
			  first_name: username,
			  last_name: 'Doe',
			  images: null,
			  messages: [
					{body: 'Hi', date: '2021-07-01', self: true}, 
					{body: 'What are you doing?', date: '2021-07-01', self: true}, 
					{body: 'Just working on a project.', date: '2021-07-01', self: false}
			]
			},
			{
			  id: 3,
			  username: 'alicesmith',
			  first_name: 'Alice',
			  last_name: 'Smith',
			  images: null,
			  messages: [
				{body: 'How are you?', date: '2021-07-01', self: false}, 
				{body: 'I am good, how about you? I am good, how about you? I am good, how about you? I am good, how about you? I am good, how about you? I am good, how about you?', date: '2021-07-01', self: true}, 
				{body: 'Doing great, thanks!', date: '2021-07-01', self: false}
				]
			},
			{
			  id: 4,
			  username: 'bobjohnson',
			  first_name: 'Bob',
			  last_name: 'Johnson',
			  images: null,
			  messages: [
				{body: 'Good morning', date: '2021-07-01', self: false}, 
				{body: 'Good morning! How was your night?', date: '2021-07-01', self: true}, 
				{body: 'It was good, thanks!', date: '2021-07-01', self: false}
			]
			},
			{
				id: 5,
				username: 'bobjohnson',
				first_name: 'Bobby',
				last_name: 'Johnson',
				images: null,
				messages: null,
			}
		];
		let data = chatData.find((chat) => chat.id === index);
		this.renderChat(data);
	}

	renderChat(chatData: any): void {
		const chatContainer = document.querySelector('.chat');
		if (chatContainer) {
		  	chatContainer.innerHTML = templateChat({ chatData });
			const closeButton = chatContainer.querySelector('.chat__header__close-button') as HTMLButtonElement;
			if (closeButton) {
				closeButton.addEventListener('click', () => {
					chatContainer.innerHTML = templatePlaceholder(); 
				});
			}

			const sendButton = chatContainer.querySelector('.chat__input__button') as HTMLButtonElement;
      		const messageInput = chatContainer.querySelector('.chat__input__field') as HTMLInputElement;
      		if (sendButton && messageInput) {
				const sendMessage = () => {
					const messageText = messageInput.value.trim();
					if (messageText) {
						const message =  {
							body: messageText,
							date: '2021-07-01',
							self: true,
						}
						//postMessage(chatData.id, messageText);
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