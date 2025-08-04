import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";
import logo from "./assets/logo.PNG";
import "./App.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to authenticate the user
      console.log("Sign in data:", formData);
      // For now, just navigate to dashboard
      navigate("/dashboard");
    }
  };

  return (
    <div className="signin-container">
      {/* Left side - Blue gradient with content */}
      <div className="signin-left">
        <div className="signin-nav">
          <div className="signin-logo">
            <img src={logo} alt="SatisfAI Logo" className="signin-logo-img" />
          </div>
          <div className="signin-nav-links">
            <span>Home</span>
            <span>Product</span>
            <span>Service</span>
          </div>
          <div className="signin-nav-right">
            <div className="language-selector" ref={languageSelectorRef}>
              <button
                className="language-selector-btn"
                style={{ color: "white" }}
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                <FaGlobe className="language-icon" style={{ color: "white" }} />
                <span>{selectedLanguage}</span>
                <FaChevronDown
                  className={`language-chevron ${
                    isLanguageDropdownOpen ? "rotated" : ""
                  }`}
                  style={{ color: "white" }}
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
            <button className="signin-contact-btn">Contact Now</button>
          </div>
        </div>
        <div className="signin-overlay">
          <div className="signin-left-content">
            <h1 className="signin-left-title">Welcome to SatisfAI</h1>
            <p className="signin-left-subtitle">
              Advanced chat analytics and AI-powered insights to optimize your
              customer interactions and drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="signin-right">
        <div className="signin-form-container">
          <h1 className="signin-title">Sign in</h1>

          {/* Sign in form */}
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="signin-form-group">
              <div className="signin-input-wrapper">
                <FaEnvelope className="signin-input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={
                    errors.email ? "signin-input error" : "signin-input"
                  }
                  placeholder="Email"
                />
              </div>
              {errors.email && (
                <span className="signin-error">{errors.email}</span>
              )}
            </div>

            <div className="signin-form-group">
              <div className="signin-input-wrapper">
                <FaLock className="signin-input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={
                    errors.password ? "signin-input error" : "signin-input"
                  }
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="signin-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <span className="signin-error">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="signin-submit-btn">
              Login
            </button>
          </form>

          <div className="signin-footer">
            <p>
              Not registered yet as{" "}
              <span
                className="signin-register-link"
                onClick={() => navigate("/register")}
              >
                Register Now
              </span>
            </p>
          </div>

          <button className="signin-back-btn" onClick={() => navigate("/")}>
            <FaArrowLeft style={{ marginRight: 8 }} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
