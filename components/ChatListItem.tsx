import React from 'react';
import { Chat } from '../types';

interface ChatListItemProps {
  chat: Chat;
  isSelected: boolean;
  onClick: (id: number) => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ chat, isSelected, onClick }) => {
  const lastMessage = chat.messages[chat.messages.length - 1];

  return (
    <div
      className={`flex items-center p-3 cursor-pointer hover:bg-slate-100 ${
        isSelected ? 'bg-slate-200' : 'bg-white'
      }`}
      onClick={() => onClick(chat.id)}
    >
      <img
        src={chat.contact.avatar}
        alt={chat.contact.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-gray-800 truncate">{chat.contact.name}</p>
          <p className="text-xs text-gray-500">{lastMessage?.timestamp}</p>
        </div>
        <div className="flex justify-between items-start mt-1">
          <p className="text-sm text-gray-600 truncate pr-2">{lastMessage?.text}</p>
          {chat.unreadCount > 0 && (
            <span className="bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;
