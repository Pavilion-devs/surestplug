import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'JD',
      lastMessage: 'Thanks for the great service!',
      time: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'When can you start the project?',
      time: '1 hour ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Mike Chen',
      avatar: 'MC',
      lastMessage: 'Perfect! See you tomorrow.',
      time: '3 hours ago',
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: 'FashionHub Nigeria',
      avatar: 'FH',
      lastMessage: 'Your commission has been processed',
      time: 'Yesterday',
      unread: 1,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'them',
      text: 'Hi! I saw your profile and I\'m interested in your plumbing services.',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'me',
      text: 'Hello! Thank you for reaching out. I\'d be happy to help. What kind of plumbing work do you need?',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'them',
      text: 'I need to fix a leaking pipe in my bathroom and install a new sink in the kitchen.',
      time: '10:35 AM'
    },
    {
      id: 4,
      sender: 'me',
      text: 'I can definitely help with that. When would be a good time for me to come take a look?',
      time: '10:37 AM'
    },
    {
      id: 5,
      sender: 'them',
      text: 'How about tomorrow afternoon around 2 PM?',
      time: '10:40 AM'
    },
    {
      id: 6,
      sender: 'me',
      text: 'That works perfectly! I\'ll be there at 2 PM. Could you share your address?',
      time: '10:42 AM'
    },
    {
      id: 7,
      sender: 'them',
      text: '15 Admiralty Way, Lekki Phase 1, Lagos',
      time: '10:43 AM'
    },
    {
      id: 8,
      sender: 'me',
      text: 'Great! I\'ve noted it down. See you tomorrow at 2 PM.',
      time: '10:45 AM'
    },
    {
      id: 9,
      sender: 'them',
      text: 'Thanks for the great service!',
      time: '11:30 AM'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto h-[calc(100vh-140px)]">
        <div className="bg-white border-2 border-neutral-200 rounded-lg overflow-hidden h-full flex flex-col md:flex-row">
          {/* Conversations Sidebar */}
          <div className="w-full md:w-80 border-r border-neutral-200 flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-neutral-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full px-4 py-2 pl-10 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 border-b border-neutral-100 cursor-pointer transition-colors ${
                    selectedChat === conv.id ? 'bg-neutral-50' : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-neutral-900 truncate">{conv.name}</h3>
                        <span className="text-xs text-neutral-500 whitespace-nowrap ml-2">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-neutral-600 truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="ml-2 w-5 h-5 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center flex-shrink-0">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                    JD
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">John Doe</h3>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-md hover:bg-neutral-100">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="p-2 rounded-md hover:bg-neutral-100">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md ${msg.sender === 'me' ? 'order-2' : ''}`}>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        msg.sender === 'me'
                          ? 'bg-neutral-900 text-white'
                          : 'bg-neutral-100 text-neutral-900'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1 px-2">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-neutral-200">
              <form onSubmit={handleSendMessage} className="flex items-end gap-3">
                <button
                  type="button"
                  className="p-2 rounded-md hover:bg-neutral-100 flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    rows="1"
                    className="w-full px-4 py-2 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900 resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
