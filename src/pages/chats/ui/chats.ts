import { Router } from '../../../app/Router';
import template from './chats.pug';
import { ChatPreview } from '../../../entities/ChatPreview/ChatPreview';
import templateChat from '../../../widgets/Chat/Chat.pug';
import { Chat } from '../../../entities/Chat/Chat';
import { getChatPreviews } from '../api/getChatPreviews';

export class ChatsPage {
	private parent: Router;
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
		let previews = await getChatPreviews();
		/*let previews: ChatPreview[] = [
			{
			  id: 1,
			  username: 'johndoe',
			  first_name: 'John',
			  last_name: 'Doe',
			  images: [{ id: 1, link: './img/user1.svg', number: 1 }],
			  lastMessage: 'Hello',
			  self: false
			},
			{
			  id: 2,
			  username: 'janedoe',
			  first_name: 'Jane',
			  last_name: 'Doe',
			  images: [{ id: 2, link: './img/user2.svg', number: 1 }],
			  lastMessage: 'Hi',
			  self: false
			},
			{
				id: 3,
				username: 'alicesmith',
				first_name: 'Alice',
				last_name: 'Smith',
				images: [{ id: 3, link: './img/user3.svg', number: 1 }],
				lastMessage: 'How are you?',
				self: false
			},
			{
				id: 4,
				username: 'bobjohnson',
				first_name: 'Bob',
				last_name: 'Johnson',
				images: [{ id: 4, link: './img/user4.svg', number: 1 }],
				lastMessage: 'Good morning',
				self: false
			}
		];*/
		
		this.parent.root.innerHTML = template({ previews });
		if (previews) {
			this.addChatSelectionListeners();
		}
    }

	addChatSelectionListeners(): void {
		const chatPreviews = document.querySelectorAll('.chats-list__chat');
		chatPreviews.forEach((preview) => {
			preview.addEventListener('click', () => {
				const index = parseInt(preview.getAttribute('data-id') as string);
				this.loadChat(index);
			});
		});
	}

	async loadChat(index: number): Promise<void> {
		//const chatData = await getChatData(index);
		const chatData: Chat[] = [
			{
			  id: 1,
			  username: 'johndoe',
			  first_name: 'John',
			  last_name: 'Doe',
			  messages: ['Hello', 'How are you?', 'I am fine, thank you!']
			},
			{
			  id: 2,
			  username: 'janedoe',
			  first_name: 'Jane',
			  last_name: 'Doe',
			  messages: ['Hi', 'What are you doing?', 'Just working on a project.']
			},
			{
			  id: 3,
			  username: 'alicesmith',
			  first_name: 'Alice',
			  last_name: 'Smith',
			  messages: ['How are you?', 'I am good, how about you?', 'Doing great, thanks!']
			},
			{
			  id: 4,
			  username: 'bobjohnson',
			  first_name: 'Bob',
			  last_name: 'Johnson',
			  messages: ['Good morning', 'Good morning! How was your night?', 'It was good, thanks!']
			}
		];
		let data = chatData.find((chat) => chat.id === index);
		this.renderChat(data);
	}

	renderChat(chatData: any): void {
		const chatContainer = document.querySelector('.chat');
		if (chatContainer) {
		  	chatContainer.innerHTML = templateChat({ chatData });
		}
	}
}