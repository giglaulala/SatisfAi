import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSlack,
  FaLinkedin,
  FaCheckCircle,
  FaChartLine,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";
import "./App.css";

const timeline = [
  {
    title: "Weekly Business Review",
    time: "Today • 09:30",
    description: "Shared CSAT snapshots with RevOps",
    status: "completed",
  },
  {
    title: "Automation Experiment",
    time: "Yesterday • 15:00",
    description: "Rolled out AI replies to VIP cohort",
    status: "active",
  },
  {
    title: "Leadership Sync",
    time: "Mon • 11:00",
    description: "Aligned on Q4 retention plan",
    status: "pending",
  },
];

const preferences = [
  { label: "Workspace", value: "Global CX" },
  { label: "Role", value: "Head of Experience" },
  { label: "Timezone", value: "GMT +4 (Tbilisi)" },
  { label: "Language", value: "English" },
];

const Profile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-header-left">
          <button
            className="profile-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <FaArrowLeft />
          </button>
          <div className="profile-breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <span>›</span>
            <span>Profile</span>
          </div>
        </div>
        <div className="profile-header-right">
          <button className="profile-action-btn ghost" onClick={() => navigate("/dashboard")}>
            View Dashboard
          </button>
          <button className="profile-action-btn primary">
            Update Details
          </button>
        </div>
      </header>

      <section className="profile-hero-card">
        <div className="profile-hero-content">
          <div className="profile-hero-main">
            <div className="profile-avatar-lg">SJ</div>
            <div>
              <p className="profile-label">Account Owner</p>
              <h1>Sandro Japaridze</h1>
              <p className="profile-subtitle">
                Drives customer experience, automation, and predictive revenue insights for SatisfAI teams.
              </p>
            </div>
          </div>
          <div className="profile-hero-metrics">
            <div>
              <span className="metric-label">Workspaces</span>
              <span className="metric-value">4</span>
            </div>
            <div>
              <span className="metric-label">Automations</span>
              <span className="metric-value">12</span>
            </div>
            <div>
              <span className="metric-label">Avg. CSAT</span>
              <span className="metric-value metric-positive">94%</span>
            </div>
          </div>
        </div>
      </section>

      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="profile-card">
            <h2>Contact</h2>
            <div className="profile-contact-row">
              <FaEnvelope />
              <div>
                <p>sjaparidze@satisf.ai</p>
                <span>Work email</span>
              </div>
            </div>
            <div className="profile-contact-row">
              <FaPhoneAlt />
              <div>
                <p>+995 555 222 010</p>
                <span>Direct line</span>
              </div>
            </div>
            <div className="profile-contact-row">
              <FaMapMarkerAlt />
              <div>
                <p>Tbilisi, Georgia</p>
                <span>HQ location</span>
              </div>
            </div>
            <div className="profile-contact-actions">
              <button className="profile-chip">
                <FaSlack /> Slack
              </button>
              <button className="profile-chip">
                <FaLinkedin /> Linkedin
              </button>
            </div>
          </div>

          <div className="profile-card">
            <h2>Preferences</h2>
            <ul className="profile-preferences">
              {preferences.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="profile-card">
            <h2>Success Score</h2>
            <div className="profile-score">
              <span>Customer Delight</span>
              <strong>9.4 / 10</strong>
              <p>Top 5% of enterprise workspaces this quarter.</p>
            </div>
          </div>
        </aside>

        <main className="profile-main">
          <div className="profile-panels">
            <div className="profile-panel">
              <div className="profile-panel-heading">
                <FaCheckCircle />
                <div>
                  <h3>Highlights</h3>
                  <p>Key milestones for this account</p>
                </div>
              </div>
              <ul className="profile-highlights">
                <li>
                  <span>Playbooks automated</span>
                  <strong>16</strong>
                </li>
                <li>
                  <span>Avg. Resolution Time</span>
                  <strong>2m 41s</strong>
                </li>
                <li>
                  <span>Voice of Customer pulses</span>
                  <strong>48 / month</strong>
                </li>
              </ul>
            </div>

            <div className="profile-panel">
              <div className="profile-panel-heading">
                <FaChartLine />
                <div>
                  <h3>Trends</h3>
                  <p>Rolling 30 day view</p>
                </div>
              </div>
              <div className="profile-trends">
                <div>
                  <span>Automations fired</span>
                  <strong>342</strong>
                  <small className="metric-positive">+14%</small>
                </div>
                <div>
                  <span>Team adoption</span>
                  <strong>87%</strong>
                  <small className="metric-positive">+6%</small>
                </div>
                <div>
                  <span>Escalations</span>
                  <strong>12</strong>
                  <small className="metric-negative">-18%</small>
                </div>
              </div>
            </div>

            <div className="profile-panel">
              <div className="profile-panel-heading">
                <FaCalendarAlt />
                <div>
                  <h3>Timeline</h3>
                  <p>Recent signals and rituals</p>
                </div>
              </div>
              <ul className="profile-timeline">
                {timeline.map((entry) => (
                  <li key={entry.title}>
                    <div className={`timeline-dot ${entry.status}`}></div>
                    <div>
                      <strong>{entry.title}</strong>
                      <span>{entry.time}</span>
                      <p>{entry.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>

      <footer className="profile-footer">
        <div>
          <h4>Need any changes?</h4>
          <p>Contact your account team or adjust settings directly.</p>
        </div>
        <button className="profile-action-btn ghost">
          <FaCog />
          Workspace Settings
        </button>
      </footer>
    </div>
  );
};

export default Profile;

