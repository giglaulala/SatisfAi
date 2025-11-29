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
import Profile from "./Profile";
import Contact from "./Contact";
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
  FaChevronLeft,
  FaChevronRight,
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
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    logo: "https://logo.clearbit.com/intercom.com",
    title: "Intercom CX",
    industry: "SaaS Support",
    quote:
      "Our managers can spot trends in minutes instead of digging through raw chat logs.",
    metric: "37% faster resolution",
  },
  {
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
    logo: "https://logo.clearbit.com/shopify.com",
    title: "Shopify Plus",
    industry: "E‑commerce Ops",
    quote:
      "SatisfAI gave us instant voice-of-customer insights for every launch.",
    metric: "+18 pts CSAT",
  },
  {
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80",
    logo: "https://logo.clearbit.com/notion.so",
    title: "Notion Crew",
    industry: "Community",
    quote:
      "Topic clustering and AI summaries keep our small team highly leveraged.",
    metric: "4h/day saved",
  },
  {
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=80",
    logo: "https://logo.clearbit.com/airbnb.com",
    title: "Airbnb Hosts",
    industry: "Marketplace Trust",
    quote:
      "Escalations dropped after we automated routing workflows via SatisfAI.",
    metric: "−22% escalations",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    logo: "https://logo.clearbit.com/peloton.com",
    title: "Peloton Care",
    industry: "Consumer Hardware",
    quote:
      "We finally have real-time visibility into sentiment across channels.",
    metric: "Single source of truth",
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
        {/* Filler content to complete the section visually */}
        <div className="capabilities-filler">
          <p className="capabilities-lead">
            From real-time insights to effortless integrations, SatisfAI covers
            your end-to-end customer communication analytics. Explore a few
            examples below to see how teams use SatisfAI to make smarter, faster
            decisions every day.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">Services</h2>
        <p className="services-lead">
          Everything you need to analyze, automate, and improve customer
          conversations.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaChartLine />
            </div>
            <h3 className="service-title">Analytics & Insights</h3>
            <p className="service-desc">
              Understand trends, drivers of CSAT, and team performance with
              beautiful, actionable dashboards.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaRobot />
            </div>
            <h3 className="service-title">AI Summaries</h3>
            <p className="service-desc">
              Turn long threads into crisp summaries and next steps your teams
              can execute on instantly.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaHeadset />
            </div>
            <h3 className="service-title">Quality Monitoring</h3>
            <p className="service-desc">
              Measure tone, resolution, and compliance to coach your agents and
              uplift customer experience.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaLink />
            </div>
            <h3 className="service-title">Workflow Automation</h3>
            <p className="service-desc">
              Trigger tickets, update CRMs, and sync with your stack—no
              copy‑paste or manual toil.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaShieldAlt />
            </div>
            <h3 className="service-title">Security & Privacy</h3>
            <p className="service-desc">
              Enterprise‑grade controls, encryption in transit and at rest, and
              strict data governance.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaCog />
            </div>
            <h3 className="service-title">Fast Integration</h3>
            <p className="service-desc">
              Connect in minutes via API or native connectors. Zero heavy setup,
              immediate value.
            </p>
          </div>
        </div>
      </section>

      {/* Service Visualisation Flow Section */}
      <section className="service-visualisation-section">
        <h1 className="service-visualisation-title">
          Service Visualisation Flow
        </h1>
        <p className="service-visualisation-desc">
          From ingestion to insight and action—see how SatisfAI transforms raw
          conversations into measurable outcomes.
        </p>
        <div className="flow-timeline">
          <div className="flow-step">
            <div className="flow-badge">1</div>
            <div className="flow-content">
              <h4>Connect Channels</h4>
              <p>
                Plug in chat, email, social, and voice to unify customer
                conversations.
              </p>
            </div>
          </div>
          <div className="flow-connector">
            <span></span>
          </div>
          <div className="flow-step">
            <div className="flow-badge">2</div>
            <div className="flow-content">
              <h4>Analyze & Summarize</h4>
              <p>
                Detect topics, sentiment, and root causes—auto‑summarized for
                speed.
              </p>
            </div>
          </div>
          <div className="flow-connector">
            <span></span>
          </div>
          <div className="flow-step">
            <div className="flow-badge">3</div>
            <div className="flow-content">
              <h4>Automate Workflows</h4>
              <p>
                Trigger tickets and updates in your tools to close the loop
                faster.
              </p>
            </div>
          </div>
          <div className="flow-connector">
            <span></span>
          </div>
          <div className="flow-step">
            <div className="flow-badge">4</div>
            <div className="flow-content">
              <h4>Measure Impact</h4>
              <p>
                Track CSAT, AHT, and efficiency gains in real‑time, across
                teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Carousel Section */}
      <section className="customers-section">
        <h2 className="customers-title">Customers</h2>
        <p className="customers-lead">
          Trusted by teams that move fast and care about CX.
        </p>
        <CustomersCarousel />
        <div className="customers-collage">
          {customerCards.slice(0, 4).map((card) => (
            <img
              key={card.title}
              src={card.img}
              alt={card.title}
              className="customers-collage-img"
            />
          ))}
        </div>
        <div className="customers-badges">
          <div className="customers-badge">99% Uptime SLA</div>
          <div className="customers-badge">SOC 2 Ready</div>
          <div className="customers-badge">GDPR Compliant</div>
        </div>
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
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

// Carousel component
const CustomersCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [motionDir, setMotionDir] = useState<"left" | "right" | "">("");
  const visibleCount = 3;
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + visibleCount < customerCards.length;

  const handleLeft = () => {
    if (canGoLeft) {
      setMotionDir("left");
      setStartIdx(startIdx - 1);
    }
  };
  const handleRight = () => {
    if (canGoRight) {
      setMotionDir("right");
      setStartIdx(startIdx + 1);
    }
  };

  useEffect(() => {
    if (!motionDir) return;
    const timer = setTimeout(() => setMotionDir(""), 450);
    return () => clearTimeout(timer);
  }, [motionDir]);

  return (
    <div className="carousel-wrapper">
      <button
        className="carousel-arrow"
        onClick={handleLeft}
        disabled={!canGoLeft}
      >
        <FaChevronLeft
          className="carousel-arrow-icon"
          aria-hidden="true"
          size={22}
          style={{ width: 22, height: 22, flexShrink: 0 }}
        />
        <span className="sr-only">Previous testimonials</span>
      </button>
      <div
        className={`carousel-cards${motionDir ? ` slide-${motionDir}` : ""}`}
      >
        {customerCards
          .slice(startIdx, startIdx + visibleCount)
          .map((card, idx) => (
            <div className="customer-card" key={card.title + idx}>
              <div className="customer-card-hero">
                <img
                  src={card.img}
                  alt={card.title}
                  className="customer-card-img"
                />
                <img src={card.logo} alt="" className="customer-card-logo" />
              </div>
              <span className="customer-card-industry">{card.industry}</span>
              <h1 className="customer-card-title">{card.title}</h1>
              <p className="customer-card-quote">“{card.quote}”</p>
              <span className="customer-card-metric">{card.metric}</span>
            </div>
          ))}
      </div>
      <button
        className="carousel-arrow"
        onClick={handleRight}
        disabled={!canGoRight}
      >
        <FaChevronRight
          className="carousel-arrow-icon"
          aria-hidden="true"
          size={22}
          style={{ width: 22, height: 22, flexShrink: 0 }}
        />
        <span className="sr-only">Next testimonials</span>
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
