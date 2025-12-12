import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const offices = [
  {
    title: "Headquarters",
    address: "44 Kazbegi Ave, Tbilisi, Georgia",
    hours: "Mon–Fri, 09:00 – 20:00",
  },
  {
    title: "EMEA Success Hub",
    address: "Neue Schönhauser Str. 9, Berlin, Germany",
    hours: "Mon–Fri, 08:00 – 18:00",
  },
  {
    title: "Support Studio",
    address: "333 Market St, San Francisco, USA",
    hours: "24/7",
  },
];

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact submission", formData);
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <button
            className="contact-back-btn"
            onClick={() => navigate("/signin")}
          >
            <FaArrowLeft />
            Back to Sign in
          </button>
          <p className="contact-eyebrow">We usually reply within 24 hours</p>
          <h1>Let’s talk about your customer experience goals</h1>

          <div className="contact-hero-callout">
            <h2>Visit or message us anytime</h2>
            <p>
              Whether you prefer in-person workshops or async collaboration, our
              regional teams in Tbilisi, Berlin, and San Francisco are ready to
              help you launch world-class conversational analytics.
            </p>
            <div className="contact-hero-stats">
              <div>
                <span>Avg. response</span>
                <strong>2h 18m</strong>
              </div>
              <div>
                <span>Enterprise customers</span>
                <strong>180+</strong>
              </div>
              <div>
                <span>Support languages</span>
                <strong>10</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-primary-card">
          <div className="contact-primary-row">
            <FaMapMarkerAlt />
            <div>
              <span>HQ</span>
              <strong>44 Kazbegi Ave, Tbilisi</strong>
            </div>
          </div>
          <div className="contact-primary-row">
            <FaEnvelope />
            <div>
              <span>Email</span>
              <strong>hello@satisfai.com</strong>
            </div>
          </div>
          <div className="contact-primary-row">
            <FaPhoneAlt />
            <div>
              <span>Phone</span>
              <strong>+995 591 81 02 28</strong>
            </div>
          </div>

          <div className="contact-primary-row">
            <FaClock />
            <div>
              <span>Hours</span>
              <strong>Mon–Fri, 09:00 – 20:00</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-marquee">
          <div className="contact-marquee-track">
            {[...offices, "map", ...offices, "map"].map((item, index) =>
              item === "map" ? (
                <div className="contact-map-card" key={`map-${index}`}>
                  <div className="contact-map-copy">
                    <p className="contact-card-label">Visit HQ</p>
                    <h3>We host private workshops weekly</h3>
                    <p>
                      Book time with our experience lab to co-design
                      automations, map agent journeys, and measure impact before
                      rollout.
                    </p>
                    <button
                      className="contact-map-btn"
                      onClick={() => navigate("/dashboard")}
                    >
                      Book a Session
                    </button>
                  </div>
                  <div className="contact-map-visual">
                    <div className="map-pin"></div>
                    <span>Tbilisi</span>
                  </div>
                </div>
              ) : typeof item === "object" &&
                item !== null &&
                "title" in item ? (
                <div className="contact-card" key={`${item.title}-${index}`}>
                  <p className="contact-card-label">{item.title}</p>
                  <h3>{item.address}</h3>
                  <span>{item.hours}</span>
                  <p className="contact-card-desc">
                    Teams in{" "}
                    {item.title.includes("Berlin")
                      ? "Europe"
                      : item.title.includes("San Francisco")
                      ? "North America"
                      : "Georgia"}{" "}
                    rely on SatisfAI to run executive reviews, roadmap
                    checkpoints, and customer empathy labs every quarter.
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-info-card">
          <h2>Send us a message</h2>
          <p>
            Tell us about your team, your current stack, or the workflows you’d
            love to automate. We’ll route the message to the right specialist.
          </p>
          <p className="contact-form-info-note">
            Prefer a call? Book time directly via{" "}
            <span onClick={() => navigate("/signin")}>Calendly</span>.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              Full name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Company
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="contact-form-row">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <label>
            How can we help?
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            ></textarea>
          </label>
          <button type="submit" className="contact-submit-btn">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>© {new Date().getFullYear()} SatisfAI. All rights reserved.</p>
        <div className="contact-footer-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/dashboard")}>Demo</span>
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
