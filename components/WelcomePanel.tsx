import React from 'react';
import { AdualLogo } from './Icons';

const WelcomePanel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-slate-100 border-l border-slate-200 text-center">
      <AdualLogo className="w-40 h-40 text-blue-600 mb-6" />
      <h1 className="text-3xl text-gray-700 font-light mb-2">Welcome to ADUAL</h1>
      <p className="text-gray-500 max-w-sm">
        Connect with your customers efficiently. Select a chat to start messaging.
      </p>
      <div className="mt-8 border-t border-gray-300 pt-4 text-sm text-gray-400">
        End-to-end encrypted
      </div>
    </div>
  );
};

export default WelcomePanel;