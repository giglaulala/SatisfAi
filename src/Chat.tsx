import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './Chat.css';
import { MdMoreHoriz, MdArrowBack, MdInfo } from 'react-icons/md';
import logo from './assets/logo.PNG';

const users = [
  { id: 1, name: 'გიორგი იმერლიშვილი', lastMessage: 'ტესტი...', time: '3წთ', avatar: 'https://ui-avatars.com/api/?name=გი' },
  { id: 2, name: 'ლევან ქავთარაძე', lastMessage: 'გამარჯობა!', time: '3წთ', avatar: 'https://ui-avatars.com/api/?name=ლქ' },
  { id: 3, name: 'მარიამ დვალიშვილი', lastMessage: 'მადლობა!', time: '5წთ', avatar: 'https://ui-avatars.com/api/?name=მდ' },
  { id: 4, name: 'ნინო ბერიძე', lastMessage: 'შეკვეთა მივიღე.', time: '1სთ', avatar: 'https://ui-avatars.com/api/?name=ნბ' },
  { id: 5, name: 'დავით კობახიძე', lastMessage: 'გთხოვთ, დამიკავშირდით.', time: '10წთ', avatar: 'https://ui-avatars.com/api/?name=დკ' },
  { id: 6, name: 'თამარ აბაშიძე', lastMessage: 'პროდუქტი არ არის.', time: '2სთ', avatar: 'https://ui-avatars.com/api/?name=თა' },
  { id: 7, name: 'ლაშა გელაშვილი', lastMessage: 'შეკვეთა გაუქმდა.', time: '15წთ', avatar: 'https://ui-avatars.com/api/?name=ლგ' },
  { id: 8, name: 'ეკა ქავთარაძე', lastMessage: 'კარგი, მადლობა.', time: '20წთ', avatar: 'https://ui-avatars.com/api/?name=ექ' },
  { id: 9, name: 'ზურა მელიქიშვილი', lastMessage: 'მოგვიანებით დაგიკავშირდებით.', time: '30წთ', avatar: 'https://ui-avatars.com/api/?name=ზმ' },
  { id: 10, name: 'სოფო ბერიშვილი', lastMessage: 'გადახდა შესრულდა.', time: '40წთ', avatar: 'https://ui-avatars.com/api/?name=სბ' },
  { id: 11, name: 'გიგა შავგულიძე', lastMessage: 'საჭიროა დამატებითი ინფორმაცია.', time: '50წთ', avatar: 'https://ui-avatars.com/api/?name=გშ' },
  { id: 12, name: 'ანა კიკნაველიძე', lastMessage: 'შეკვეთა დასრულდა.', time: '1სთ', avatar: 'https://ui-avatars.com/api/?name=აკ' },
  { id: 13, name: 'ბექა კაპანაძე', lastMessage: 'პრობლემა დაფიქსირდა.', time: '2სთ', avatar: 'https://ui-avatars.com/api/?name=ბკ' },
  { id: 14, name: 'თეონა ბერიძე', lastMessage: 'გთხოვთ, დაადასტურეთ.', time: '3სთ', avatar: 'https://ui-avatars.com/api/?name=თბ' },
  { id: 15, name: 'ირაკლი ქავთარაძე', lastMessage: 'შეკვეთა მზადაა.', time: '4სთ', avatar: 'https://ui-avatars.com/api/?name=იქ' },
];

const initialMessages = [
  { id: 1, user: 'me', text: 'გამარჯობა! როგორ შემიძლია დაგეხმაროთ?', time: '12:00' },
  { id: 2, user: 'bot', text: 'გამარჯობა! მაინტერესებს შეკვეთის სტატუსი.', time: '12:01' },
  { id: 3, user: 'me', text: 'თქვენი შეკვეთა უკვე გაიგზავნა და მალე მოგეწოდებათ!', time: '12:02', positive: true },
  { id: 4, user: 'bot', text: 'ძალიან დიდი მადლობა სწრაფი მომსახურებისთვის!', time: '12:03', positive: true },
  { id: 5, user: 'me', text: 'სამწუხაროდ, თქვენი შეკვეთა ვერ მოესწრება დღეს.', time: '12:04', negative: true },
  { id: 6, user: 'bot', text: 'ვწუხვარ, ეს ძალიან ცუდი ამბავია.', time: '12:05', negative: true },
  { id: 7, user: 'me', text: 'სხვა რამით ხომ ვერ დაგეხმარებით?', time: '12:06' },
  { id: 8, user: 'bot', text: 'არა, მადლობა. კარგ დღეს გისურვებთ!', time: '12:07', positive: true },
  { id: 9, user: 'me', text: 'გთხოვთ, გაითვალისწინოთ, რომ პროდუქტი ამოიწურა.', time: '12:08', negative: true },
  { id: 10, user: 'bot', text: 'სამწუხაროა, სხვა ვარიანტები გაქვთ?', time: '12:09', negative: true },
  { id: 11, user: 'me', text: 'ამ ეტაპზე, სამწუხაროდ, ვერ შემოგთავაზებთ.', time: '12:10', negative: true },
];

const levanMessages = [
  { id: 1, user: 'me', text: 'გამარჯობა! როგორ შემიძლია დაგეხმაროთ?', time: '14:30' },
  { id: 2, user: 'bot', text: 'გამარჯობა! მაინტერესებს ფასები.', time: '14:31' },
  { id: 3, user: 'me', text: 'რა პროდუქტი გაინტერესებთ?', time: '14:32' },
  { id: 4, user: 'bot', text: 'მადლობა, მოგვიანებით დაგიკავშირდებით.', time: '14:33', positive: true },
];

const mariamMessages = [
  { id: 1, user: 'me', text: 'გამარჯობა! როგორ შემიძლია დაგეხმაროთ?', time: '16:45' },
  { id: 2, user: 'bot', text: 'გამარჯობა! პრობლემა მაქვს შეკვეთასთან.', time: '16:46' },
  { id: 3, user: 'me', text: 'რა პრობლემაა? დეტალურად მითხარით.', time: '16:47' },
  { id: 4, user: 'bot', text: 'შეკვეთა არ მივიღე ვადაში.', time: '16:48', negative: true },
  { id: 5, user: 'me', text: 'ბოდიში, დაუყოვნებლივ გადავხედავთ.', time: '16:49' },
];

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const getMessagesForUser = (userId: number) => {
    switch (userId) {
      case 2: // ლევან ქავთარაძე
        return levanMessages;
      case 3: // მარიამ დვალიშვილი
        return mariamMessages;
      default:
        return initialMessages;
    }
  };

  const getHeaderBadges = (userId: number) => {
    switch (userId) {
      case 2: // ლევან ქავთარაძე
        return [
          { text: 'განწყობა: დადებითი', color: 'badge-green' },
          { text: 'საშუალო პასუხის დრო: 1.2წთ', color: 'badge-blue' },
          { text: 'ჩატის ხანგრძლივობა: 8წთ', color: 'badge-purple' },
          { text: 'თეგები: ფასები, ინფორმაცია', color: 'badge-orange' },
          { text: 'აქტიური', color: 'badge-green' },
          { text: 'მომხმარებელი სერვისში', color: 'badge-blue' },
          { text: '92%', color: 'badge-green' },
          { text: '8%', color: 'badge-red' }
        ];
      case 3: // მარიამ დვალიშვილი
        return [
          { text: 'განწყობა: ნეგატიური', color: 'badge-red' },
          { text: 'საშუალო პასუხის დრო: 3.8წთ', color: 'badge-blue' },
          { text: 'ჩატის ხანგრძლივობა: 22წთ', color: 'badge-purple' },
          { text: 'თეგები: პრობლემა, შეკვეთა', color: 'badge-orange' },
          { text: 'აქტიური', color: 'badge-green' },
          { text: 'მომხმარებელი სერვისში', color: 'badge-blue' },
          { text: '45%', color: 'badge-red' },
          { text: '55%', color: 'badge-red' }
        ];
      default:
        return [
          { text: 'განწყობა: დადებითი', color: 'badge-green' },
          { text: 'საშუალო პასუხის დრო: 2.3წთ', color: 'badge-blue' },
          { text: 'ჩატის ხანგრძლივობა: 15წთ', color: 'badge-purple' },
          { text: 'თეგები: შეკვეთა, პრობლემა', color: 'badge-orange' },
          { text: 'აქტიური', color: 'badge-green' },
          { text: 'მომხმარებელი სერვისში', color: 'badge-blue' },
          { text: '78%', color: 'badge-green' },
          { text: '22%', color: 'badge-red' }
        ];
    }
  };

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
    setMessages(getMessagesForUser(user.id));
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'me',
        text: newMessage.trim(),
        time: new Date().toLocaleTimeString('ka-GE', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-layout">
      {/* Sidebar */}
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <button className="back-button" onClick={() => window.history.back()}>
            <MdArrowBack />
          </button>
          <div className="sidebar-search">
            <input type="text" placeholder="ძებნა..." className="sidebar-search-input" />
          </div>
          <span className="chat-logo">.</span>
        </div>
        <ul className="user-list">
          {users.map(user => (
            <li
              key={user.id}
              className={`user-list-item${selectedUser.id === user.id ? ' user-list-item-selected' : ''}`}
              onClick={() => handleUserSelect(user)}
            >
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-last-message">{user.lastMessage}</span>
              </div>
              <span className="user-time">{user.time}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Chat Area */}
      <div className="chat-main-area">
        {/* Header */}
        <header className="chat-header">
          <img src={logo} alt="SatisfAI" className="chat-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
          <div className="chat-status-badges">
            {getHeaderBadges(selectedUser.id).map((badge, index) => (
              <span key={index} className={`badge ${badge.color}`}>{badge.text}</span>
            ))}
          </div>
          <MdInfo className="chat-info-icon" title="ინფორმაცია" />
        </header>
        {/* Chat Summary on border line */}
        <div className="chat-summary-bar">
          <span className="chat-summary-text">მოთხოვნა ვერ დაკმაყოფილდა, არასაკმარისი პროდუქტი</span>
        </div>
        {/* Recipient Info */}
        <div className="chat-recipient-bar">
          <img src={selectedUser.avatar} alt={selectedUser.name} className="chat-recipient-avatar" />
          <span className="chat-recipient-name">{selectedUser.name}</span>
          <MdMoreHoriz style={{ marginLeft: 'auto', fontSize: 28, color: '#888', cursor: 'pointer' }} title="მეტი" />
        </div>
        {/* Chat Window */}
        <main className="chat-window">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`chat-bubble ${msg.user === 'me' ? 'chat-bubble-me' : 'chat-bubble-bot'}${msg.positive ? ' chat-bubble-positive' : ''}${msg.negative ? ' chat-bubble-negative' : ''}`}
            >
              <div className="chat-bubble-text">{msg.text}</div>
              <div className="chat-bubble-meta">{msg.time}</div>
            </div>
          ))}
        </main>
        {/* Input Row */}
        <div className="chat-input-row">
          <input 
            className="chat-input" 
            placeholder="მოწერეთ შეტყობინება..." 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="chat-send-btn" 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            გაგზავნა
          </button>
          <div className="chat-input-icons">
            <span className="icon-attach" title="მიმაგრება">📎</span>
            <span className="icon-emoji" title="ემოჯი">😊</span>
            <span className="icon-more" title="მეტი">⋯</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 