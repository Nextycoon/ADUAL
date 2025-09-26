import React, { useState } from 'react';
import { Chat, User } from '../types';
import { SearchIcon, VerticalDotsIcon, NewChatIcon, StatusIcon } from './Icons';
import ChatListItem from './ChatListItem';

interface SidebarProps {
  user: User;
  chats: Chat[];
  selectedChatId: number | null;
  onSelectChat: (id: number) => void;
}

const SidebarHeader: React.FC<{ user: User }> = ({ user }) => (
    <header className="flex justify-between items-center p-3 bg-slate-200">
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
        <div className="flex items-center space-x-2 text-gray-600">
            <button className="p-2 hover:bg-slate-300 rounded-full"><StatusIcon className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-slate-300 rounded-full"><NewChatIcon className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-slate-300 rounded-full"><VerticalDotsIcon className="w-6 h-6" /></button>
        </div>
    </header>
);

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => (
    <div className="p-2 bg-slate-100 border-b border-slate-200">
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
                type="text"
                placeholder="Search or start new chat"
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-white rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    </div>
);

const Sidebar: React.FC<SidebarProps> = ({ user, chats, selectedChatId, onSelectChat }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full border-r border-slate-200 bg-white">
      <SidebarHeader user={user} />
      <SearchBar onSearch={setSearchQuery} />
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            isSelected={chat.id === selectedChatId}
            onClick={onSelectChat}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
