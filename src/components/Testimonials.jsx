import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
    return (
        <section className="about-section">
            <div className="section-wrapper">
                <div className="about-container">
                    <h2 className="about-heading">
                        When subscribers pay writers and creators directly, they
                        can focus on doing the work they care about most. A few
                        hundred paid subscribers can support a livelihood.
                    </h2>

                    {/* 
                        // Active Information of subscribers
                        <p className="about-paragraph">
                        Today, City Tales subscription network encompasses more than 35 million active subscriptions, including more than 3 million paid subscriptions.
                    </p> 
                    */}

                    <p className="about-paragraph">
                        As City Tales grows to accommodate more writers,
                        podcasters, musicians, scientists, and culture-makers of
                        all kinds, we believe that together we can build
                        <span className="highlight-link">
                            {' '}
                            a new economic engine for culture
                        </span>
                        . We think the internet’s powers, married to the right
                        business model, can be harnessed to build the most
                        valuable media economy the world has ever known—an
                        economy where value is measured not only in dollars but
                        also in quality, in good-faith discourse, and in
                        creating an internet that celebrates and supports
                        humanity.
                    </p>

                    <div className="about-button-wrapper">
                        <button className="about-button">
                            Start a City Tale
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
