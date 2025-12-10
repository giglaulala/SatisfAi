import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
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
  FaHourglassHalf,
  FaDollarSign,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "./assets/logo.PNG";
import screenshot from "./assets/screenshot.PNG";
import screenshot1 from "./assets/screenshot1.PNG";
import chatImage from "./assets/chat.png";
import dashboardImage from "./assets/dashboard.png";
import textAnalysisImage from "./assets/textanalisys.png";
import { FeatureSteps } from "./FeatureSteps";

const lineData = [
  { name: "Mon", value: 900 },
  { name: "Tue", value: 1050 },
  { name: "Wed", value: 950 },
  { name: "Thu", value: 1200 },
  { name: "Fri", value: 1000 },
  { name: "Sat", value: 1300 },
  { name: "Sun", value: 1158 },
];

const areaData = [
  { name: "Jan", value: 420 },
  { name: "Feb", value: 580 },
  { name: "Mar", value: 650 },
  { name: "Apr", value: 720 },
  { name: "May", value: 890 },
  { name: "Jun", value: 1158 },
];

const barData = [
  { name: "Mon", resolved: 245, pending: 32 },
  { name: "Tue", resolved: 289, pending: 28 },
  { name: "Wed", resolved: 267, pending: 41 },
  { name: "Thu", resolved: 312, pending: 25 },
  { name: "Fri", resolved: 298, pending: 35 },
];

const radialData = [
  { name: "Excellent", value: 45, fill: "#3b82f6" },
  { name: "Good", value: 30, fill: "#60a5fa" },
  { name: "Average", value: 15, fill: "#93c5fd" },
  { name: "Poor", value: 10, fill: "#bfdbfe" },
];

const pieData = [
  { name: "Orders", value: 32, color: "#1e40af" },
  { name: "Courier", value: 24, color: "#2563eb" },
  { name: "Website", value: 18, color: "#3b82f6" },
  { name: "Messages", value: 12, color: "#60a5fa" },
  { name: "Issues", value: 8, color: "#93c5fd" },
  { name: "Other", value: 6, color: "#bfdbfe" },
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
          <div className="dashboard-card dashboard-card-chart">
            <div className="dashboard-card-title">
              Chat Session Dynamics{" "}
              <span className="dashboard-card-green">+24.31%</span>
            </div>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart
                data={lineData}
                margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#lineGradient)"
                  strokeWidth={2.5}
                  dot={false}
                  strokeLinecap="round"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value-small">1,158 Chats</div>
          </div>
          <div className="dashboard-card dashboard-card-chart">
            <div className="dashboard-card-title">Growth Trend</div>
            <ResponsiveContainer width="100%" height={120}>
              <AreaChart
                data={areaData}
                margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="url(#areaGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value-small">+175% Growth</div>
          </div>
          <div className="dashboard-card dashboard-card-chart">
            <div className="dashboard-card-title">Resolution Status</div>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart
                data={barData}
                margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
              >
                <Bar dataKey="resolved" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="#60a5fa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value-small">1,411 Resolved</div>
          </div>
        </section>
        <section className="dashboard-middle">
          <div className="dashboard-card dashboard-card-pie">
            <div className="dashboard-card-title">Channel Distribution</div>
            <div className="dashboard-pie-compact">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="dashboard-pie-legend-compact">
                {pieData.slice(0, 3).map((entry) => (
                  <div
                    className="dashboard-pie-legend-item-compact"
                    key={entry.name}
                  >
                    <span
                      className="dashboard-pie-legend-dot"
                      style={{ background: entry.color }}
                    ></span>
                    <span>{entry.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="dashboard-card dashboard-card-radial">
            <div className="dashboard-card-title">Satisfaction Score</div>
            <ResponsiveContainer width="100%" height={140}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="90%"
                data={radialData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar dataKey="value" cornerRadius={4} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="dashboard-card-value-small">84% Avg</div>
          </div>
        </section>
        <section className="dashboard-bottom">
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Total Chats</div>
            <div className="dashboard-card-value">1,158</div>
            <div className="dashboard-card-green">+12%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Response Time</div>
            <div className="dashboard-card-value">00:30</div>
            <div className="dashboard-card-green">-5%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Duration</div>
            <div className="dashboard-card-value">21m</div>
            <div className="dashboard-card-red">-2%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Satisfaction</div>
            <div className="dashboard-card-value">84%</div>
            <div className="dashboard-card-green">+3%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Topics</div>
            <div className="dashboard-card-value">49</div>
            <div className="dashboard-card-green">+1%</div>
          </div>
          <div className="dashboard-card dashboard-card-sm">
            <div className="dashboard-card-label">Resolved</div>
            <div className="dashboard-card-value">1,411</div>
            <div className="dashboard-card-green">+18%</div>
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
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close language dropdown when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsLanguageDropdownOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight =
        document.querySelector(".dashboard-header")?.getBoundingClientRect()
          .height || 80;
      const scrollY = window.scrollY;

      // Check if we're at the top (hero section)
      if (scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      const sections = [
        { id: "hero", element: document.querySelector(".starter-main") },
        {
          id: "capabilities",
          element: document.querySelector("#capabilities"),
        },
        { id: "services", element: document.querySelector("#services") },
        {
          id: "how-it-works",
          element: document.querySelector("#how-it-works"),
        },
        { id: "faq", element: document.querySelector("#faq") },
      ];

      // Find which section is currently in view
      let currentSection = "hero";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          const sectionBottom = sectionTop + rect.height;

          // Check if section is in viewport (with offset for header)
          if (
            scrollY + headerHeight + 100 >= sectionTop &&
            scrollY + headerHeight + 100 < sectionBottom
          ) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Fallback: find the section we've scrolled past
      if (currentSection === "hero") {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            if (scrollY + headerHeight + 50 >= sectionTop) {
              currentSection = section.id;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    // Close mobile menu when a section is clicked
    setIsMobileMenuOpen(false);

    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("hero");
      return;
    }

    // Use getElementById - the IDs are confirmed to exist
    const element = document.getElementById(sectionId);

    if (!element) {
      console.error(`Section "${sectionId}" not found`);
      return;
    }

    // Use scrollIntoView which respects scroll-margin-top CSS property
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update active section immediately
    setActiveSection(sectionId);
  };

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
          </div>
        </div>
        <nav className="section-nav-inline">
          <button
            className={`section-nav-item ${
              activeSection === "hero" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "hero")}
          >
            Home
          </button>
          <button
            className={`section-nav-item ${
              activeSection === "capabilities" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "capabilities")}
          >
            Capabilities
          </button>
          <button
            className={`section-nav-item ${
              activeSection === "services" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </button>
          <button
            className={`section-nav-item ${
              activeSection === "how-it-works" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "how-it-works")}
          >
            How It Works
          </button>
          <button
            className={`section-nav-item ${
              activeSection === "faq" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "faq")}
          >
            FAQ
          </button>
        </nav>
        <div className="dashboard-header-right">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <button
            className="dashboard-header-btn signin-header-btn"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <img src={logo} alt="SatisfAI Logo" className="mobile-menu-logo" />
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <button
            className={`mobile-menu-item ${
              activeSection === "hero" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "hero")}
          >
            Home
          </button>
          <button
            className={`mobile-menu-item ${
              activeSection === "capabilities" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "capabilities")}
          >
            Capabilities
          </button>
          <button
            className={`mobile-menu-item ${
              activeSection === "services" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "services")}
          >
            Services
          </button>
          <button
            className={`mobile-menu-item ${
              activeSection === "how-it-works" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "how-it-works")}
          >
            How It Works
          </button>
          <button
            className={`mobile-menu-item ${
              activeSection === "faq" ? "active" : ""
            }`}
            onClick={(e) => scrollToSection(e, "faq")}
          >
            FAQ
          </button>
          <div className="mobile-menu-divider"></div>
          <div className="mobile-menu-actions">
            <button
              className="mobile-signin-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/signin");
              }}
            >
              Sign In
            </button>
          </div>
        </nav>
      </div>
      <main className="starter-main">
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
        <div className="starter-content">
          <h1 className="hero-title">AI-Powered Chat Analytics</h1>
          <p className="hero-subtitle">
            Assess high-impact quality issues with detailed Chat Analytics & Observability Suite.
          </p>
          <div className="hero-cta-buttons">
            <button
              className="hero-cta-primary"
              onClick={() => navigate("/signin")}
            >
              Try for free
            </button>
            <button
              className="hero-cta-secondary"
              onClick={() => navigate("/dashboard")}
            >
              Book a Demo
            </button>
          </div>
          <div className="hero-images-stacked">
            <img src={dashboardImage} alt="Dashboard" className="hero-stacked-image hero-image-1" />
            <img src={chatImage} alt="Chat Interface" className="hero-stacked-image hero-image-2" />
            <img src={textAnalysisImage} alt="Text Analysis" className="hero-stacked-image hero-image-3" />
          </div>
        </div>
      </main>
      <section id="capabilities" className="capabilities-section">
        <div className="feature-icons-container">
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
        <FeatureSteps
          title=""
          features={[
            {
              step: "Step 1",
              title: "Advanced Chat Analytics",
              content:
                "Gain deep insights into your customer interactions with our powerful analytics dashboard.",
              image: dashboardImage,
            },
            {
              step: "Step 2",
              title: "Real-time Chat Interface",
              content:
                "Monitor and manage customer conversations in real-time with our intuitive chat interface.",
              image: chatImage,
            },
            {
              step: "Step 3",
              title: "Text Analysis & Insights",
              content:
                "Analyze conversation patterns, sentiment, and key topics to improve customer satisfaction.",
              image: textAnalysisImage,
            },
          ]}
          autoPlayInterval={4000}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
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
      <section id="how-it-works" className="service-visualisation-section">
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

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-title-wrapper">
          <div className="faq-title-line"></div>
        <h2 className="faq-title">FAQ</h2>
          <div className="faq-title-bar"></div>
        </div>
        <div className="faq-cards-container">
          <div className="faq-container">
            <h2 className="faq-category-title">General</h2>
            <FAQAccordion data={faqData} />
          </div>
          <div className="faq-container">
            <h2 className="faq-category-title">Technical</h2>
            <FAQAccordion data={faqTechnicalData} />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2025 SatisfAI. All rights reserved.</p>
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
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

// FAQ data and accordion component
const faqData = [
  {
    question: "How can I use SatisfAI without registration?",
    answer:
      "You can explore SatisfAI's features with our comprehensive free trial that gives you access to core functionality without requiring immediate registration. Simply click 'Try for free' on the homepage to get started instantly. The free trial includes access to basic chat analytics, real-time monitoring capabilities, and sample dashboards that demonstrate the platform's power. While the free trial provides valuable hands-on experience, full access to all features—including advanced analytics, custom report generation, data export capabilities, team collaboration tools, and priority support—requires registration. Registration is quick, secure, and takes less than two minutes. Once registered, you'll unlock unlimited data retention, API access for integrations, and custom alert configurations.",
  },
  {
    question: "Do you have a referral program?",
    answer:
      "Yes! We offer an exciting referral program designed to reward our valued users for helping grow the SatisfAI community. When you refer colleagues, friends, or other businesses to SatisfAI, you earn substantial rewards that can include account credits, extended subscription periods, or even free months of premium features. Each successful referral typically earns you credits that can be applied to your subscription, reducing your costs while helping others discover the power of advanced chat analytics. New users you refer also receive special onboarding bonuses, making it a win-win situation. To participate, simply contact our support team through the contact form or email, and they'll provide you with your unique referral link and a detailed breakdown of the current referral rewards structure.",
  },
  {
    question: "Can I access chat analytics using my mobile device?",
    answer:
      "Absolutely! SatisfAI is fully responsive and optimized to work seamlessly across all mobile devices, including smartphones and tablets running iOS, Android, and other mobile operating systems. Our mobile-optimized interface ensures that you can access your complete analytics dashboard, view real-time chat metrics, monitor customer interactions, and review detailed reports from anywhere, at any time. The mobile experience maintains all the core functionality of the desktop version, including interactive charts, customizable widgets, and the ability to drill down into specific conversation details. You can receive push notifications for important alerts, share reports directly from your mobile device, and even configure new monitoring parameters on the go.",
  },
  {
    question: "Can I import my existing chat data to SatisfAI?",
    answer:
      "Yes, SatisfAI provides comprehensive data import capabilities that support a wide variety of chat platforms, formats, and data structures. Our robust integration tools allow you to seamlessly migrate your historical chat data, conversation logs, customer information, and existing analytics into the SatisfAI platform. We support imports from popular platforms including Intercom, Zendesk, Drift, LiveChat, Freshchat, and many others, as well as custom CSV, JSON, and API-based data formats. The import process is designed to be straightforward and secure, with our system automatically mapping your existing data fields to SatisfAI's analytics structure. For larger datasets or complex migrations involving multiple data sources, our dedicated support team provides personalized assistance to ensure a smooth transition.",
  },
  {
    question: "Can I use SatisfAI to analyze customer conversation flows?",
    answer:
      "Definitely! SatisfAI's advanced analytics suite includes sophisticated conversation flow mapping and analysis capabilities that allow you to visualize, understand, and optimize how customer interactions progress through different stages of your support and sales processes. Our conversation flow analysis tools provide detailed visual representations of customer journeys, showing you exactly how conversations move from initial contact through resolution, including all the decision points, handoffs, and interactions along the way. You can identify common conversation patterns, detect bottlenecks where customers frequently get stuck, understand which conversation paths lead to successful outcomes, and discover opportunities to streamline your communication processes. The flow analysis includes metrics such as average conversation duration at each stage, drop-off rates, escalation patterns, and the effectiveness of different conversation strategies. This comprehensive view helps you optimize your support workflows, improve agent training by identifying best practices, and enhance customer satisfaction by reducing friction in the conversation experience.",
  },
];

const faqTechnicalData = [
  {
    question: "What integrations does SatisfAI support?",
    answer:
      "SatisfAI offers extensive integration capabilities with a wide range of popular chat platforms, CRM systems, and business tools. We provide native integrations with major platforms including Intercom, Zendesk, Drift, LiveChat, Freshchat, HubSpot, Salesforce, Slack, Microsoft Teams, and many others. Our integration architecture is built on a flexible API that allows for custom integrations with virtually any platform that supports webhooks or REST APIs. Each integration is designed to be seamless, automatically syncing conversation data, customer information, and analytics metrics in real-time. For enterprise customers, we offer dedicated integration support, custom connector development, and assistance with complex multi-platform setups.",
  },
  {
    question: "How does SatisfAI ensure data security and privacy?",
    answer:
      "Data security and privacy are fundamental priorities at SatisfAI, and we implement multiple layers of protection to safeguard your information. All data transmission is encrypted using TLS 1.3, the latest and most secure encryption standard, ensuring that information is protected both in transit and at rest. Our infrastructure is hosted on enterprise-grade cloud platforms with SOC 2 Type II certification, meaning we meet the highest standards for security, availability, and confidentiality. We employ role-based access controls that allow you to manage who can view, edit, or export data within your organization, with granular permissions for different team members. We comply with major data protection regulations including GDPR, CCPA, and HIPAA (for applicable use cases), giving you confidence that your data handling meets legal requirements. We never share or sell your data to third parties, and you maintain full ownership and control of all information processed through our platform.",
  },
  {
    question: "What kind of analytics and reporting features are available?",
    answer:
      "SatisfAI provides a comprehensive suite of analytics and reporting features designed to give you deep insights into your customer communications. Our analytics dashboard includes real-time metrics such as conversation volume, response times, customer satisfaction scores, agent performance metrics, and conversation sentiment analysis. You can create custom reports with drag-and-drop report builders, allowing you to combine multiple data sources, apply filters, and visualize information in charts, graphs, and tables. Advanced analytics features include predictive modeling that forecasts customer satisfaction trends, identifies at-risk conversations, and suggests proactive interventions. We offer conversation flow analysis that maps customer journeys, identifies bottlenecks, and highlights optimization opportunities. Sentiment analysis uses natural language processing to understand customer emotions throughout conversations, helping you identify frustrated customers or positive experiences. You can set up automated reports that are delivered via email on schedules you define, ensuring stakeholders always have access to the latest insights.",
  },
  {
    question: "Can I customize the dashboard and analytics views?",
    answer:
      "Absolutely! SatisfAI offers extensive customization options that allow you to tailor the dashboard and analytics views to match your specific needs and preferences. The dashboard builder provides a drag-and-drop interface where you can add, remove, resize, and rearrange widgets to create a personalized view of your most important metrics. You can choose from a library of pre-built widgets including charts, tables, gauges, and KPI cards, or create custom widgets using our widget builder. Color schemes, fonts, and layout options can be customized to match your brand identity or personal preferences. You can create multiple dashboard views for different purposes—for example, an executive dashboard with high-level KPIs, an operational dashboard for daily management, or a detailed analytics dashboard for deep dives.",
  },
  {
    question: "What are the system requirements and browser compatibility?",
    answer:
      "SatisfAI is a cloud-based platform that requires no software installation, making it accessible from virtually any device with an internet connection and a modern web browser. We support all major browsers including Google Chrome (recommended), Mozilla Firefox, Microsoft Edge, Safari, and Opera, with support for the latest two versions of each browser. The platform is optimized for both desktop and mobile devices, with responsive design that automatically adapts to different screen sizes. For the best experience, we recommend using Chrome or Firefox on desktop with a minimum screen resolution of 1280x720 pixels. Mobile devices running iOS 12+ or Android 8+ are fully supported, with native mobile apps available for iOS and Android. There are no specific hardware requirements since all processing happens in the cloud, but a stable internet connection with a minimum speed of 1 Mbps is recommended for optimal performance.",
  },
];

const FAQAccordion: React.FC<{ data: typeof faqData }> = ({ data }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <div className="faq-list">
      {data.map((item, idx) => (
        <div
          className={`faq-item${openIdx === idx ? " open" : ""}`}
          key={item.question}
        >
          <button className="faq-question" onClick={() => toggle(idx)}>
            {item.question}
            <FaChevronDown
              className={`faq-arrow ${openIdx === idx ? "open" : ""}`}
            />
          </button>
          <div
            className="faq-answer-wrapper"
            style={{ maxHeight: openIdx === idx ? "500px" : "0" }}
          >
            <div className="faq-answer">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
