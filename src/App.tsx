import React from 'react';
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './App.css';

const lineData = [
  { value: 900 }, { value: 1050 }, { value: 950 }, { value: 1200 }, { value: 1000 }, { value: 1300 }, { value: 1158 }
];
const pieData = [
  { name: 'შეკვეთაა', value: 32, color: '#2563eb' },
  { name: 'კურიერი', value: 24, color: '#22c55e' },
  { name: 'საიტი', value: 18, color: '#f59e42' },
  { name: 'შეტყობინება', value: 12, color: '#fbbf24' },
  { name: 'ხარვეზი', value: 8, color: '#ef4444' },
  { name: 'სხვა', value: 6, color: '#64748b' },
];

const App: React.FC = () => {
  return (
    <div className="dashboard-bg">
      <header className="dashboard-header">
        <div>
          <div className="logo-title">
            <span className="logo-text">SatisfAI</span>
            <h1>ჩატის ანალიტიკის დაფა</h1>
          </div>
        </div>
        <div className="dashboard-header-right">

          <span className="dashboard-header-year">ივნისი 2025</span>
          <button className="dashboard-header-btn">სრულფასოვანი ანალიტიკა</button>
        </div>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-top">
          <div className="dashboard-card dashboard-card-lg">
            <div className="dashboard-card-title">ჩატის სესიის რაოდენობის დინამიკა ბოლო 30 დღეში <span className="dashboard-card-green">+24.31%</span></div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={lineData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value">1,158 ჩატი</div>
          </div>
          <div className="dashboard-card dashboard-card-lg">
            <div className="dashboard-card-title">ჩატის განაწილება</div>
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
                  <div className="dashboard-pie-center-label">თემა</div>
                </div>
              </div>
            </div>
            <div className="dashboard-card-subtitle">ბოლო 30 დღე</div>
          </div>
        </section>
        <section className="dashboard-bottom">
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">სულ ჩატები</div>
            <div className="dashboard-card-value">1,158</div>
            <div className="dashboard-card-green">+12%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">საშუალო პასხის დრო</div>
            <div className="dashboard-card-value">00:00:30</div>
            <div className="dashboard-card-red">-5%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">საშუალო დიალოგის დრო</div>
            <div className="dashboard-card-value">21წ 32წმ</div>
            <div className="dashboard-card-red">-2%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">კმაყოფილების დონე</div>
            <div className="dashboard-card-value">84%</div>
            <div className="dashboard-card-red">-3%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">თემები</div>
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

export default App;
