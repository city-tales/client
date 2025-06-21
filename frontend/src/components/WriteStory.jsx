import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar"; // Your existing Navbar
import "./WriteStory.css";

function WriteStory() {
  const [story, setStory] = useState("");

  // For toggling category dropdown
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Story Category");
  // For toggling tags dropdown
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const [selectedTag, setSelectedTag] = useState("Tags Section");

  // Refs to detect outside clicks
  const categoryRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // If category dropdown is open and click is outside categoryRef => close
      if (showCategoryDropdown && categoryRef.current && !categoryRef.current.contains(e.target)) {
        setShowCategoryDropdown(false);
      }
      // If tags dropdown is open and click is outside tagsRef => close
      if (showTagsDropdown && tagsRef.current && !tagsRef.current.contains(e.target)) {
        setShowTagsDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategoryDropdown, showTagsDropdown]);

  // Toggle the dropdowns
  const toggleCategoryDropdown = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
    if (showTagsDropdown) setShowTagsDropdown(false);
  };

  const toggleTagsDropdown = () => {
    setShowTagsDropdown(!showTagsDropdown);
    if (showCategoryDropdown) setShowCategoryDropdown(false);
  };

  // Select an item from category/tag
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setShowCategoryDropdown(false);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setShowTagsDropdown(false);
  };

  const handlePublish = () => {
    alert("Your story has been published!");
    // Insert your publishing logic here
  };

  return (
    <div className="write-story-page">
      {/* 1) Navbar on top */}
      <Navbar />

      {/* 2) Full-page cityscape background */}
      <img src="/1111111.webp" alt="Cityscape" className="bg-image" />

      {/* 3) Main heading above the floating box */}
      <h1 className="main-heading">Write Your Story</h1>

      {/* 4) Content area: left sidebar + floating box side by side */}
      <div className="content-area">
        {/* Left sidebar (unchanged) */}
        <aside className="left-sidebar">
          <h2 className="sidebar-title">CityTales</h2>
          <img src="/profile.jpg" alt="User" className="profile-pic" />
          <ul className="sidebar-list">
            <li><button className="sidebar-btn">Bold</button></li>
            <li><button className="sidebar-btn">Italic</button></li>
            <li><button className="sidebar-btn">Underline</button></li>
            <li><button className="sidebar-btn">Headings</button></li>
            <li><button className="sidebar-btn">Bullet List & Numbered List</button></li>
            <li><button className="sidebar-btn">Add Image</button></li>
            <li><button className="sidebar-btn">Insert Link</button></li>
            <li><button className="sidebar-btn">Save as Draft</button></li>
          </ul>
        </aside>

        {/* 5) Main floating box with text area */}
        <main className="story-main">
          <h2 className="box-title">Write Your Story</h2>
          <p className="box-subtitle">
            Write your story here. Feel free to share your journey, experiences, or creative ideas.
          </p>

          {/* Text area for story */}
          <textarea
            className="story-textarea"
            placeholder="Start typing your story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />

          {/* Bottom row: two peachy buttons on the left + Publish on the right */}
          <div className="bottom-row">
            {/* Left side: two new dropdown buttons */}
            <div className="left-btns">
              {/* Category Button with ref */}
              <div className="dropdown-container" ref={categoryRef}>
                <button className="cool-button" onClick={toggleCategoryDropdown}>
                  {selectedCategory}
                </button>
                {showCategoryDropdown && (
                  <ul className="dropdown-menu">
                    <li onClick={() => handleCategorySelect("Love")}>Love</li>
                    <li onClick={() => handleCategorySelect("Career")}>Career</li>
                    <li onClick={() => handleCategorySelect("College Life")}>College Life</li>
                    <li onClick={() => handleCategorySelect("Adventure")}>Adventure</li>
                  </ul>
                )}
              </div>

              {/* Tags Button with ref */}
              <div className="dropdown-container" ref={tagsRef}>
                <button className="cool-button" onClick={toggleTagsDropdown}>
                  {selectedTag}
                </button>
                {showTagsDropdown && (
                  <ul className="dropdown-menu">
                    <li onClick={() => handleTagSelect("#inspiration")}>#inspiration</li>
                    <li onClick={() => handleTagSelect("#struggle")}>#struggle</li>
                    <li onClick={() => handleTagSelect("#success")}>#success</li>
                  </ul>
                )}
              </div>
            </div>

            {/* Right side: Publish button */}
            <div className="publish-row">
              <button className="publish-btn" onClick={handlePublish}>
                Publish
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default WriteStory;
