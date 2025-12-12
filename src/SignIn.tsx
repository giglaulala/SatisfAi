import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import logo from "./assets/logo.PNG";
import chatbotImage from "./assets/Chatbot-rafiki.png";
import "./App.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
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
      {/* Left side - Chatbot illustration background */}
      <div
        className="signin-left"
        style={{
          backgroundImage: `url(${chatbotImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="signin-nav">
          <div className="signin-logo">
            <img src={logo} alt="SatisfAI Logo" className="signin-logo-img" />
          </div>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="signin-right">
        <div className="signin-form-container">
          <div className="signin-header-top">
            <div className="signin-logo">
              <img src={logo} alt="SatisfAI Logo" className="signin-logo-img" />
            </div>
            <div className="signin-nav-right">
              <button
                className="signin-contact-btn-top"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </div>
          </div>

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
              Welcome back. Please sign in with your existing account to access
              your dashboard.{" "}
              <span
                className="signin-register-link"
                onClick={() => navigate("/contact")}
              >
                Contact Now
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
