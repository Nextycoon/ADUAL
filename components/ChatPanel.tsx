import React, { useState, useRef, useEffect } from 'react';
import { Chat, Message, MessageStatus } from '../types';
import { SearchIcon, VerticalDotsIcon, SmileIcon, SendIcon } from './Icons';
import MessageBubble from './MessageBubble';

interface ChatPanelProps {
  chat: Chat;
  onSendMessage: (chatId: number, message: Message) => void;
}

const ChatHeader: React.FC<{ chat: Chat }> = ({ chat }) => (
    <header className="flex items-center p-3 bg-slate-200 border-b border-slate-300">
        <img src={chat.contact.avatar} alt={chat.contact.name} className="w-10 h-10 rounded-full mr-4" />
        <div className="flex-1">
            <h2 className="text-md font-semibold text-gray-800">{chat.contact.name}</h2>
            <p className="text-sm text-gray-500">online</p>
        </div>
        <div className="flex items-center space-x-4 text-gray-600">
            <button className="p-2 hover:bg-slate-300 rounded-full"><SearchIcon className="w-6 h-6" /></button>
            <button className="p-2 hover:bg-slate-300 rounded-full"><VerticalDotsIcon className="w-6 h-6" /></button>
        </div>
    </header>
);

const MessageArea: React.FC<{ messages: Message[] }> = ({ messages }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

const MessageInput: React.FC<{ onSendMessage: (text: string) => void }> = ({ onSendMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onSendMessage(text.trim());
            setText('');
        }
    };

    return (
        <footer className="p-3 bg-slate-200">
            <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full px-3 py-1">
                <button type="button" className="p-2 text-gray-500 hover:text-blue-600">
                    <SmileIcon className="w-6 h-6" />
                </button>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-gray-700"
                />
                <button type="submit" className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                    <SendIcon className="w-6 h-6" />
                </button>
            </form>
        </footer>
    );
};

const ChatPanel: React.FC<ChatPanelProps> = ({ chat, onSendMessage }) => {
    
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: chat.messages.length + 1,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'me',
      status: MessageStatus.SENT,
    };
    onSendMessage(chat.id, newMessage);
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-100" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23d1d5db%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z%22/%3E%3C/g%3E%3C/svg%3E")'}}>
        <ChatHeader chat={chat} />
        <MessageArea messages={chat.messages} />
        <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPanel;
