import React, { useState, useEffect } from "react";
import "./AuthForm.css"; // Ensure you have styling in place

const Auth = () => {
  const [cities, setCities] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch cities dynamically
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then(response => response.json())
      .then(data => {
        if (data && data.data) {
          const cityList = data.data.map(city => city.city);
          setCities(cityList);
        } else {
          setError("Failed to load cities");
        }
      })
      .catch(error => {
        console.error("Error fetching cities:", error);
        setError("Failed to load cities");
      });
  }, []);

  // Handle profile picture preview
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  return (
    <div className="auth-container">
  <div className="auth-box">
    <h2 className="auth-title">Create Account</h2>

    <input type="text" placeholder="Full Name" className="auth-input" />
    <input type="email" placeholder="Email Address" className="auth-input" />
    <input type="password" placeholder="Password" className="auth-input" />
    <input type="password" placeholder="Confirm Password" className="auth-input" />

    {/* City Dropdown */}
    <select className="auth-input">
      <option value="">Select Your City</option>
      {cities.length > 0 ? (
        cities.map((city, index) => <option key={index} value={city}>{city}</option>)
      ) : (
        <option>Loading cities...</option>
      )}
    </select>

    {/* Profile Picture Upload */}
    <div className="file-upload-container">
      <label className="file-label">Upload Profile Picture</label>
      <input 
        type="file" 
        className="file-input" 
        accept="image/*" 
        onChange={(e) => setProfilePic(e.target.files[0])}
      />
    </div>

    {/* Create Account Button */}
    <button className="create-btn">Create Account</button>

    {/* Social Login Buttons */}
    <div className="social-icons">
      <a href="#" className="social-btn google-btn">Log in with Google</a>
      <a href="#" className="social-btn facebook-btn">Log in with Facebook</a>
    </div>

    {/* Already have an account */}
    <p className="login-text">Already have an account? <a href="/signin">Sign In</a></p>
  </div>
</div>

  );
};

export default Auth;
