import React from "react";
import "./SubstackModel.css"; // If using plain CSS

const SubstackModel = () => {
  return (
    <div className="substack-wrapper">
  <section className="substack-model-section">
      <h2 className="section-heading">How the Substack model works</h2>

      <div className="model-item">
        <img src="/Revenue Pie Chart.webp" alt="Revenue Pie Chart" className="model-img" />
        <div className="model-text">
          <h3>We only make money when creators make money.</h3>
          <p>
            When communities pay for a subscription on Substack, an average of 86% of the revenue goes to the publisher,
            with the remainder covering our fees. We only make money when writers and creators do.
          </p>
        </div>
      </div>

      <div className="model-item reverse">
        <img src="/Subscription Coins.webp" alt="Subscription Coins" className="model-img" />
        <div className="model-text">
          <h3>The subscription model enables independence.</h3>
          <p>
            Writers can build real audiences, not ad-driven traffic. A few hundred paid subscribers can support a
            livelihood. A few thousand makes it lucrative.
          </p>
          <a href="#" className="model-link">Estimate your earnings →</a>
        </div>
      </div>

      <div className="model-item">
        <img src="/model3.png" alt="Network Graph" className="model-img" />
        <div className="model-text">
          <h3>Our network helps publishers grow and discover new perspectives.</h3>
          <p>
            50% of subscriptions come from the Substack network. Readers find writers through shared values and
            curiosity, not algorithms.
          </p>
          <a href="#" className="model-link">Learn more →</a>
        </div>
      </div>

      <div className="center-button">
        <button className="substack-btn">Start a CityTales</button>
      </div>
    </section>
</div>
   
  );
};

export default SubstackModel;
