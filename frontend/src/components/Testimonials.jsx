

import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="about-section">
      <div className="section-wrapper">
        <div className="about-container">
          <h2 className="about-heading">
            When subscribers pay writers and creators directly, they can focus
            on doing the work they care about most. A few hundred paid
            subscribers can support a livelihood.
          </h2>

          <p className="about-paragraph">
  Today, Substack’s subscription network encompasses more than 35 million active subscriptions, including more than 3 million paid subscriptions. Some of the world’s most celebrated writers and creators are here—
  <span className="highlight">Margaret Atwood, George Saunders, Elizabeth Gilbert, Mehdi Hasan, and Kareem Abdul-Jabbar</span>, to name a few—and they have been joined by a new generation of writers and creators who are building their livelihoods and communities on Substack.
</p>

<p className="about-paragraph">
  As Substack grows to accommodate more writers, podcasters, videomakers, musicians, scientists, and culture-makers of all kinds, we believe that together we can build 
  <span className="highlight-link"> a new economic engine for culture</span>. We think the internet’s powers, married to the right business model, can be harnessed to build the most valuable media economy the world has ever known—an economy where value is measured not only in dollars but also in quality, in good-faith discourse, and in creating an internet that celebrates and supports humanity.
</p>


<div className="about-button-wrapper">
  <button className="about-button">Start a CityTales</button>
</div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
