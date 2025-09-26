import { User, Chat, MessageStatus } from './types';

export const CURRENT_USER: User = {
  id: 'me',
  name: 'ADUAL Business',
  avatar: 'https://picsum.photos/seed/adual/200',
};

export const CHATS: Chat[] = [
  {
    id: 1,
    contact: {
      id: 'contact1',
      name: 'Alice Johnson',
      avatar: 'https://picsum.photos/seed/alice/200',
    },
    messages: [
      { id: 1, text: 'Hey, I was wondering about the status of my order #12345?', sender: 'contact', timestamp: '10:40 AM', status: MessageStatus.READ },
      { id: 2, text: 'Hi Alice! Let me check on that for you right away.', sender: 'me', timestamp: '10:41 AM', status: MessageStatus.READ },
      { id: 3, text: 'It looks like your order has been shipped and is scheduled for delivery tomorrow.', sender: 'me', timestamp: '10:42 AM', status: MessageStatus.READ },
      { id: 4, text: 'That\'s great news! Thank you for the quick update.', sender: 'contact', timestamp: '10:43 AM', status: MessageStatus.READ },
    ],
    unreadCount: 0,
  },
  {
    id: 2,
    contact: {
      id: 'contact2',
      name: 'Bob Williams',
      avatar: 'https://picsum.photos/seed/bob/200',
    },
    messages: [
      { id: 1, text: 'Can you provide more details on the new product line?', sender: 'contact', timestamp: 'Yesterday', status: MessageStatus.READ },
      { id: 2, text: 'Absolutely, Bob. I\'m attaching the brochure to this message. Let me know if you have any specific questions!', sender: 'me', timestamp: 'Yesterday', status: MessageStatus.DELIVERED },
    ],
    unreadCount: 0,
  },
  {
    id: 3,
    contact: {
      id: 'contact3',
      name: 'Charlie Brown',
      avatar: 'https://picsum.photos/seed/charlie/200',
    },
    messages: [
      { id: 1, text: 'Perfect, thanks!', sender: 'me', timestamp: '12:15 PM', status: MessageStatus.READ },
      { id: 2, text: 'Is it possible to get a demo next week?', sender: 'contact', timestamp: '12:30 PM', status: MessageStatus.READ },
      { id: 3, text: 'Of course, what day works best for you?', sender: 'me', timestamp: '12:31 PM', status: MessageStatus.READ },
      { id: 4, text: 'How about Tuesday at 2 PM?', sender: 'contact', timestamp: '12:32 PM', status: MessageStatus.READ },
      { id: 5, text: 'Sounds good, I\'ve scheduled it. You\'ll receive a calendar invite shortly.', sender: 'me', timestamp: '12:33 PM', status: MessageStatus.DELIVERED },
    ],
    unreadCount: 2,
  },
  {
    id: 4,
    contact: {
      id: 'contact4',
      name: 'Diana Miller',
      avatar: 'https://picsum.photos/seed/diana/200',
    },
    messages: [
      { id: 1, text: 'Just wanted to say the service was excellent. 5 stars!', sender: 'contact', timestamp: '9:05 AM', status: MessageStatus.SENT },
    ],
    unreadCount: 1,
  },
  {
    id: 5,
    contact: {
      id: 'contact5',
      name: 'Ethan Davis',
      avatar: 'https://picsum.photos/seed/ethan/200',
    },
    messages: [
      { id: 1, text: 'See you then.', sender: 'me', timestamp: 'Yesterday', status: MessageStatus.DELIVERED },
    ],
    unreadCount: 0,
  },
];