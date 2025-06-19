import React from 'react';
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import { MdChat } from 'react-icons/md';
import { FaRocket, FaRobot, FaChartLine, FaUsers, FaCog } from 'react-icons/fa';
import logo from './assets/logo.PNG';

const lineData = [
  { value: 900 }, { value: 1050 }, { value: 950 }, { value: 1200 }, { value: 1000 }, { value: 1300 }, { value: 1158 }
];
const pieData = [
  { name: 'Orders', value: 32, color: '#2563eb' },
  { name: 'Courier', value: 24, color: '#22c55e' },
  { name: 'Website', value: 18, color: '#f59e42' },
  { name: 'Messages', value: 12, color: '#fbbf24' },
  { name: 'Issues', value: 8, color: '#ef4444' },
  { name: 'Other', value: 6, color: '#64748b' },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-bg">
      <header className="dashboard-header">
        <div>
          <div className="logo-title">
            <img src={logo} alt="SatisfAI Logo" className="logo-image" />
            <h1>Chat Analytics Dashboard</h1>
          </div>
        </div>
        <div className="dashboard-header-right">
          <span className="dashboard-header-year">June 2025</span>
          <button className="dashboard-header-btn" onClick={() => navigate('/chat')}><MdChat style={{marginRight: 8, verticalAlign: 'middle'}} />Full Analytics</button>
        </div>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-top">
          <div className="dashboard-card dashboard-card-lg">
            <div className="dashboard-card-title">Chat Session Dynamics - Last 30 Days <span className="dashboard-card-green">+24.31%</span></div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={lineData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value">1,158 Chats</div>
          </div>
          <div className="dashboard-card dashboard-card-lg">
            <div className="dashboard-card-title">Chat Distribution</div>
            <div className="dashboard-pie-row">
              <div className="dashboard-pie-legend">
                {pieData.map((entry, idx) => (
                  <div className="dashboard-pie-legend-item" key={entry.name}>
                    <span className="dashboard-pie-legend-dot" style={{ background: entry.color }}></span>
                    <span>{entry.name}</span>
                    <span className="dashboard-pie-legend-value">{entry.value}%</span>
                  </div>
                ))}
              </div>
              <div className="dashboard-pie-wrapper">
                <PieChart width={320} height={260}>
                  <Pie
                    data={pieData}
                    cx={160}
                    cy={130}
                    innerRadius={90}
                    outerRadius={120}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="dashboard-pie-center">
                  <div className="dashboard-pie-center-value">49</div>
                  <div className="dashboard-pie-center-label">Topics</div>
                </div>
              </div>
            </div>
            <div className="dashboard-card-subtitle">Last 30 Days</div>
          </div>
        </section>
        <section className="dashboard-bottom">
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Total Chats</div>
            <div className="dashboard-card-value">1,158</div>
            <div className="dashboard-card-green">+12%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Avg. Response Time</div>
            <div className="dashboard-card-value">00:00:30</div>
            <div className="dashboard-card-red">-5%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Avg. Chat Duration</div>
            <div className="dashboard-card-value">21m 32s</div>
            <div className="dashboard-card-red">-2%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Satisfaction Rate</div>
            <div className="dashboard-card-value">84%</div>
            <div className="dashboard-card-red">-3%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Topics</div>
            <div className="dashboard-card-value">49</div>
            <div className="dashboard-card-red">-1%</div>
          </div>
        </section>
      </main>
      <div className="dashboard-bg-curve dashboard-bg-curve-green"></div>
      <div className="dashboard-bg-curve dashboard-bg-curve-red"></div>
    </div>
  );
};

const StarterPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="starter-page">
      <header className="dashboard-header">
        <div>
          <div className="logo-title">
            <img src={logo} alt="SatisfAI Logo" className="logo-image" />
            <h1>Welcome to SatisfAI</h1>
          </div>
        </div>
        <div className="dashboard-header-right">
          <button className="dashboard-header-btn" onClick={() => navigate('/dashboard')}>
            <FaRocket style={{marginRight: 8, verticalAlign: 'middle'}} />
            Try Demo
          </button>
        </div>
      </header>
      <main className="starter-main">
        <div className="starter-content">
          <h2>Enhance Your Business with AI</h2>
          <p>SatisfAI helps you streamline customer communication and optimize business processes.</p>
          <button className="starter-cta-btn" onClick={() => navigate('/dashboard')}>
            Start Demo
          </button>
        </div>
        <div className="starter-illustration">
          <div className="illustration-icon robot">
            <FaRobot />
          </div>
          <div className="illustration-icon chart">
            <FaChartLine />
          </div>
          <div className="illustration-icon users">
            <FaUsers />
          </div>
          <div className="illustration-icon cog">
            <FaCog />
          </div>
        </div>
      </main>
      <div className="dashboard-bg-curve dashboard-bg-curve-green"></div>
      <div className="dashboard-bg-curve dashboard-bg-curve-red"></div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StarterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;
