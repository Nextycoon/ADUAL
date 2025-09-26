import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import WelcomePanel from './components/WelcomePanel';
import { CHATS, CURRENT_USER } from './constants';
import { Chat, Message } from './types';

const App: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>(CHATS);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleSelectChat = (id: number) => {
    setSelectedChatId(id);
    // Mark messages as read
    setChats(prevChats => prevChats.map(chat => 
      chat.id === id ? { ...chat, unreadCount: 0 } : chat
    ));
  };

  const handleSendMessage = (chatId: number, message: Message) => {
    setChats(prevChats => {
      return prevChats.map(chat => {
        if (chat.id === chatId) {
          return { ...chat, messages: [...chat.messages, message] };
        }
        return chat;
      }).sort((a, b) => { // Move updated chat to the top
        if (a.id === chatId) return -1;
        if (b.id === chatId) return 1;
        return 0;
      });
    });
  };

  const selectedChat = chats.find(c => c.id === selectedChatId);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-hidden">
        {/* Main container with header */}
        <div className="absolute top-0 left-0 w-full h-32 bg-blue-600"></div>
        
        <div className="relative flex flex-row w-full max-w-7xl mx-auto h-[calc(100%-2rem)] my-auto shadow-2xl">
          {/* Sidebar */}
          <div className="w-full md:w-1/3 lg:w-4/12 h-full z-10">
            <Sidebar
              user={CURRENT_USER}
              chats={chats}
              selectedChatId={selectedChatId}
              onSelectChat={handleSelectChat}
            />
          </div>

          {/* Chat Panel */}
          <div className="hidden md:flex flex-auto h-full z-10">
            {selectedChat ? (
              <ChatPanel chat={selectedChat} onSendMessage={handleSendMessage} />
            ) : (
              <WelcomePanel />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
