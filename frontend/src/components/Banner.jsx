

import React from "react";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Ensure Footer is imported
import "./Banner.css";
import SubstackModel from "./SubstackModel";
import Testimonials from "./Testimonials";

function Banner() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <header className="banner-container">
      {/* HERO SECTION */}
      <div className="hero-section">
        <Navbar />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Join the Storytelling Revolution</h1>
          {/* Navigate to Auth Page */}
          <button className="hero-signin-btn" onClick={() => navigate("/auth")}>
            Sign In
          </button>
        </div>
      </div>

      {/* SECOND SECTION (City Tales area + cards) */}
      <section className="second-section">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h2 className="city-tales-title">City Tales</h2>
          <p className="city-tales-desc">
            Join us on an illuminating exploration. Delve into a world of heartfelt 
            recollections, hidden gems, and become part of an ever-growing storytelling 
            community. Because every city has tales waiting to be told.
          </p>
          <input
            type="text"
            className="story-input"
            placeholder="Name your adventure..."
          />
          <button className="start-story-btn">Start Story</button>
        </div>

        {/* RIGHT CARDS */}
        <div className="right-cards">
          {/* Card 1 */}
          <div className="card">
            <h3 className="card-title">Your City</h3>
            <img src="/home.webp" alt="Home" className="card-image" />
            <p className="card-info">Discover real experiences around your city.</p>
            <button className="card-btn">Your city</button>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h3 className="card-title">Top Storytellers</h3>
            <img src="/trending.jpg" alt="Trending" className="card-image" />
            <p className="card-info">Meet the best storytellers and read their tales.</p>
            <button className="card-btn">Top Storytellers</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <h3 className="card-title">Category</h3>
            <img src="/12.webp" alt="Categories" className="card-image" />
            <p className="card-info">Explore categories from travel to lifestyle.</p>
            <button className="card-btn">Category</button>
          </div>

          {/* Card 4 */}
          <div className="card">
            <h3 className="card-title">Write Your Story</h3>
            <img src="/signin.webp" alt="Sign In" className="card-image" />
            <p className="card-info">Connect with people by sharing your journey.</p>
            <button className="card-btn">Write your story</button>
          </div>
          
          {/* Card 5 - New Card */}
          <div className="card">
            <h3 className="card-title">Events</h3>
            <img src="/download (1).png" alt="Events" className="card-image" />
            <p className="card-info">Stay updated with our upcoming events.</p>
            <button className="card-btn">Events</button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Testimonials />
      <SubstackModel />
      {/* Include Footer at the End */}
      <Footer />
    </header>
  );
}

export default Banner;
