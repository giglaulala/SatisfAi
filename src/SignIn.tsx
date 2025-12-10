import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaUser,
} from "react-icons/fa";
import logo from "./assets/logo.PNG";
import "./App.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (isSignUp) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    } else {
      if (!formData.password) {
        newErrors.password = "Password is required";
      }
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
      if (isSignUp) {
        // Here you would typically make an API call to register the user
        console.log("Registration data:", formData);
      } else {
        // Here you would typically make an API call to authenticate the user
        console.log("Sign in data:", formData);
      }
      // For now, just navigate to dashboard
      navigate("/dashboard");
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    // Reset form data and errors when switching modes
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="signin-container">
      {/* Left side - Blue gradient with content */}
      <div className="signin-left">
        <div className="signin-nav">
          <div className="signin-logo">
            <img src={logo} alt="SatisfAI Logo" className="signin-logo-img" />
          </div>
          <div className="signin-nav-right">
            <button
              className="signin-contact-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Now
            </button>
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

      {/* Right side - Sign in/Sign up form */}
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
          
          <div className="signin-mode-toggle">
            <button
              type="button"
              className={`signin-mode-btn ${!isSignUp ? "active" : ""}`}
              onClick={() => !isSignUp || toggleMode()}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`signin-mode-btn ${isSignUp ? "active" : ""}`}
              onClick={() => isSignUp || toggleMode()}
            >
              Sign Up
            </button>
          </div>

          <h1 className="signin-title">{isSignUp ? "Create Account" : "Sign in"}</h1>

          {/* Sign in/Sign up form */}
          <form onSubmit={handleSubmit} className="signin-form">
            {isSignUp && (
              <>
                <div className="signin-form-row">
                  <div className="signin-form-group signin-form-group-half">
                    <div className="signin-input-wrapper">
                      <FaUser className="signin-input-icon" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={
                          errors.firstName ? "signin-input error" : "signin-input"
                        }
                        placeholder="First Name"
                      />
                    </div>
                    {errors.firstName && (
                      <span className="signin-error">{errors.firstName}</span>
                    )}
                  </div>

                  <div className="signin-form-group signin-form-group-half">
                    <div className="signin-input-wrapper">
                      <FaUser className="signin-input-icon" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={
                          errors.lastName ? "signin-input error" : "signin-input"
                        }
                        placeholder="Last Name"
                      />
                    </div>
                    {errors.lastName && (
                      <span className="signin-error">{errors.lastName}</span>
                    )}
                  </div>
                </div>
              </>
            )}

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

            {isSignUp && (
              <div className="signin-form-group">
                <div className="signin-input-wrapper">
                  <FaLock className="signin-input-icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={
                      errors.confirmPassword ? "signin-input error" : "signin-input"
                    }
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    className="signin-password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="signin-error">{errors.confirmPassword}</span>
                )}
              </div>
            )}

            <button type="submit" className="signin-submit-btn">
              {isSignUp ? "Create Account" : "Login"}
            </button>
          </form>

          <div className="signin-footer">
            <p>
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <span
                    className="signin-register-link"
                    onClick={toggleMode}
                  >
                    Sign in
                  </span>
                </>
              ) : (
                <>
                  Not registered yet?{" "}
                  <span
                    className="signin-register-link"
                    onClick={toggleMode}
                  >
                    Sign Up Now
                  </span>
                </>
              )}
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
