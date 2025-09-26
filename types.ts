export enum MessageStatus {
  SENT = 'sent',
  DELIVERED = 'delivered',
  READ = 'read',
}

export interface Message {
  id: number;
  text: string;
  timestamp: string;
  sender: 'me' | 'contact';
  status: MessageStatus;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Chat {
  id: number;
  contact: User;
  messages: Message[];
  unreadCount: number;
}