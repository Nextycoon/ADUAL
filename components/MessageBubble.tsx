import React from 'react';
import { Message, MessageStatus } from '../types';
import { CheckAllIcon } from './Icons';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isMe = message.sender === 'me';
  const statusColor = message.status === MessageStatus.READ ? 'text-blue-500' : 'text-gray-400';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-3 py-2 rounded-lg shadow-sm ${
          isMe ? 'bg-sky-200 rounded-br-none' : 'bg-white rounded-bl-none'
        }`}
      >
        <p className="text-sm text-gray-800">{message.text}</p>
        <div className="flex items-center justify-end mt-1">
          <span className="text-xs text-gray-500 mr-2">{message.timestamp}</span>
          {isMe && <CheckAllIcon className={`w-4 h-4 ${statusColor}`} />}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
