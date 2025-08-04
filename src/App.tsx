import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Register from "./Register";
import SignIn from "./SignIn";
import { MdChat } from "react-icons/md";
import {
  FaRocket,
  FaRobot,
  FaChartLine,
  FaUsers,
  FaCog,
  FaLink,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";
import logo from "./assets/logo.PNG";
import screenshot from "./assets/screenshot.PNG";
import screenshot1 from "./assets/screenshot1.PNG";

const lineData = [
  { value: 900 },
  { value: 1050 },
  { value: 950 },
  { value: 1200 },
  { value: 1000 },
  { value: 1300 },
  { value: 1158 },
];
const pieData = [
  { name: "Orders", value: 32, color: "#2563eb" },
  { name: "Courier", value: 24, color: "#22c55e" },
  { name: "Website", value: 18, color: "#f59e42" },
  { name: "Messages", value: 12, color: "#fbbf24" },
  { name: "Issues", value: 8, color: "#ef4444" },
  { name: "Other", value: 6, color: "#64748b" },
];

const customerCards = [
  {
    img: "https://via.placeholder.com/180x120?text=Customer+1",
    title: "Customer One",
  },
  {
    img: "https://via.placeholder.com/180x120?text=Customer+2",
    title: "Customer Two",
  },
  {
    img: "https://via.placeholder.com/180x120?text=Customer+3",
    title: "Customer Three",
  },
  {
    img: "https://via.placeholder.com/180x120?text=Customer+4",
    title: "Customer Four",
  },
  {
    img: "https://via.placeholder.com/180x120?text=Customer+5",
    title: "Customer Five",
  },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-bg">
      <header className="dashboard-header">
        <div>
          <div
            className="logo-title"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="SatisfAI Logo" className="logo-image" />
            <h1>Chat Analytics Dashboard</h1>
          </div>
        </div>
        <div className="dashboard-header-right">
          <span className="dashboard-header-year">June 2025</span>
          <button
            className="dashboard-header-btn"
            onClick={() => navigate("/chat")}
          >
            <MdChat style={{ marginRight: 8, verticalAlign: "middle" }} />
            Full Analytics
          </button>
        </div>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-top">
          <div className="dashboard-card dashboard-card-lg">
            <div className="dashboard-card-title">
              Chat Session Dynamics - Last 30 Days{" "}
              <span className="dashboard-card-green">+24.31%</span>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart
                data={lineData}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value">1,158 Chats</div>
          </div>
          <div className="dashboard-card dashboard-card-lg">
            <div className="dashboard-card-title">Chat Distribution</div>
            <div className="dashboard-pie-row">
              <div className="dashboard-pie-legend">
                {pieData.map((entry) => (
                  <div className="dashboard-pie-legend-item" key={entry.name}>
                    <span
                      className="dashboard-pie-legend-dot"
                      style={{ background: entry.color }}
                    ></span>
                    <span>{entry.name}</span>
                    <span className="dashboard-pie-legend-value">
                      {entry.value}%
                    </span>
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
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "EN", name: "English" },
    { code: "KA", name: "ქართული" },
    { code: "RU", name: "Русский" },
  ];

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="starter-page">
      <header className="dashboard-header">
        <div>
          <div
            className="logo-title"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="SatisfAI Logo" className="logo-image" />
            <h1>Welcome to SatisfAI</h1>
          </div>
        </div>
        <div className="dashboard-header-right">
          <div className="language-selector" ref={languageSelectorRef}>
            <button
              className="language-selector-btn dashboard-header-btn"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <FaGlobe className="language-icon" />
              <span>{selectedLanguage}</span>
              <FaChevronDown
                className={`language-chevron ${
                  isLanguageDropdownOpen ? "rotated" : ""
                }`}
              />
            </button>
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`language-option ${
                      selectedLanguage === language.code ? "selected" : ""
                    }`}
                    onClick={() => handleLanguageSelect(language.code)}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="dashboard-header-btn"
            onClick={() => navigate("/dashboard")}
          >
            <FaRocket style={{ marginRight: 8, verticalAlign: "middle" }} />
            Try Demo
          </button>
          <button
            className="dashboard-header-btn signin-header-btn"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        </div>
      </header>
      <main className="starter-main">
        <div className="starter-content">
          <h2>
            Analyze <span style={{ color: "#2563eb" }}>54x</span> faster, with{" "}
            <span style={{ color: "#2563eb" }}>40%</span> less cost
          </h2>
          <p>
            SatisfAI helps you streamline customer communication and optimize
            business processes.
          </p>
          <button
            className="starter-cta-btn-register"
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>
          <button
            className="starter-cta-btn"
            onClick={() => navigate("/dashboard")}
          >
            Analyse Now
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
      <section className="capabilities-section">
        <h2>What SatisfAI is Capable Of</h2>
        <div className="feature-icons-container">
          <div className="feature-icon-item">
            <FaShieldAlt />
            <span>Secure Data</span>
          </div>
          <div className="feature-icon-item">
            <FaHeadset />
            <span>24/7 Support</span>
          </div>
          <div className="feature-icon-item">
            <FaRocket />
            <span>Fast Setup</span>
          </div>
          <div className="feature-icon-item">
            <FaCheckCircle />
            <span>99% Uptime</span>
          </div>
        </div>
        <div className="capabilities-container">
          <div className="capability-item capability-images-container">
            <div className="capability-images-stacked">
              <img
                src={screenshot}
                alt="Screenshot of Advanced Chat Analytics"
                className="capability-screenshot"
              />
              <img
                src={screenshot1}
                alt="Screenshot of Seamless Integration"
                className="capability-screenshot"
              />
            </div>
          </div>
          <div className="capability-item">
            <div className="capability-text-item">
              <div className="capability-icon-wrapper">
                <FaChartLine />
              </div>
              <div className="capability-text-content">
                <h3>Advanced Chat Analytics</h3>
                <p>
                  Gain deep insights into your customer interactions with our
                  powerful analytics dashboard.
                </p>
              </div>
            </div>
            <div className="capability-text-item">
              <div className="capability-icon-wrapper">
                <FaLink />
              </div>
              <div className="capability-text-content">
                <h3>Seamless Integration</h3>
                <p>
                  Easily integrate SatisfAI with your existing tools and
                  workflows for a streamlined experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">Services</h2>
        <div className="services-list">
          <h1>Filler Service 1</h1>
          <h1>Filler Service 2</h1>
          <h1>Filler Service 3</h1>
          <h1>Filler Service 4</h1>
        </div>
      </section>

      {/* Service Visualisation Flow Section */}
      <section className="service-visualisation-section">
        <h1 className="service-visualisation-title">
          Service Visualisation Flow
        </h1>
        <p className="service-visualisation-desc">
          This is a placeholder description for the service visualisation flow.
          You can describe how your services interact or the process flow here.
        </p>
        <div className="service-visualisation-img-wrapper">
          <img
            src="https://via.placeholder.com/500x220?text=Flow+Placeholder"
            alt="Service Visualisation Flow"
            className="service-visualisation-img"
          />
        </div>
      </section>

      {/* Customers Carousel Section */}
      <section className="customers-section">
        <h2 className="customers-title">Customers</h2>
        <CustomersCarousel />
      </section>

      {/* Break Card Section */}
      <section className="break-card-section">
        <div className="break-card-bg">
          <div className="break-card-content">
            <h1 className="break-card-title">
              Take a Break, Boost Your Productivity
            </h1>
            <div className="break-card-buttons">
              <button className="break-card-btn break-card-btn-primary">
                Start Break
              </button>
              <button className="break-card-btn break-card-btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        <FAQAccordion />
      </section>

      <footer className="site-footer">
        <p>© 2024 SatisfAI. All rights reserved.</p>
      </footer>
      <div className="dashboard-bg-curve dashboard-bg-curve-green"></div>
      <div className="dashboard-bg-curve dashboard-bg-curve-red"></div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StarterPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

// Carousel component
const CustomersCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + visibleCount < customerCards.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };
  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  return (
    <div className="carousel-wrapper">
      <button
        className="carousel-arrow"
        onClick={handleLeft}
        disabled={!canGoLeft}
      >
        &lt;
      </button>
      <div className="carousel-cards">
        {customerCards
          .slice(startIdx, startIdx + visibleCount)
          .map((card, idx) => (
            <div className="customer-card" key={card.title + idx}>
              <img
                src={card.img}
                alt={card.title}
                className="customer-card-img"
              />
              <h1 className="customer-card-title">{card.title}</h1>
            </div>
          ))}
      </div>
      <button
        className="carousel-arrow"
        onClick={handleRight}
        disabled={!canGoRight}
      >
        &gt;
      </button>
    </div>
  );
};

// FAQ data and accordion component
const faqData = [
  {
    question: "What is SatisfAI?",
    answer:
      "SatisfAI is a platform that helps you analyze and optimize your customer chat interactions with advanced analytics.",
  },
  {
    question: "How do I register?",
    answer:
      "Click the Register Now button on the landing page and fill out the registration form to get started.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard security practices to keep your data safe and private.",
  },
  {
    question: "Can I try the demo before registering?",
    answer:
      "Absolutely! Click Try Demo to explore the dashboard and analytics features.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <div className="faq-list">
      {faqData.map((item, idx) => (
        <div
          className={`faq-item${openIdx === idx ? " open" : ""}`}
          key={item.question}
        >
          <button className="faq-question" onClick={() => toggle(idx)}>
            {item.question}
            <span className="faq-arrow">{openIdx === idx ? "−" : "+"}</span>
          </button>
          <div
            className="faq-answer-wrapper"
            style={{ maxHeight: openIdx === idx ? 200 : 0 }}
          >
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
