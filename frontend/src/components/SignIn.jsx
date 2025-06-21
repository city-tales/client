import React, { useState } from "react";
import "./AuthForm.css"; // Uses the same CSS as the Sign Up Page

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Sign In</h2>

        {/* Email & Password */}
        <input 
          type="email" 
          placeholder="Email Address" 
          className="auth-input" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="auth-input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember Me & Forgot Password */}
        <div className="auth-options">
          <label className="remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        {/* Sign In Button */}
        <button className="create-btn">Log In</button>

        {/* Social Login Options */}
        <div className="social-icons">
          <a href="#" className="social-btn google-btn">Log in with Google</a>
          <a href="#" className="social-btn facebook-btn">Log in with Facebook</a>
        </div>

        {/* No Account? Sign Up */}
        <p className="login-text">Don't have an account? <a href="/signin">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
