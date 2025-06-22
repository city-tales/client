import React from 'react';
import '../styles/RevenueModel.css';
import { IMAGE_URLS } from '../utils/constants';

const RevenueModel = () => {
    return (
        <div className="revenue-model-wrapper">
            <section className="revenue-model-model-section">
                <h2 className="section-heading">
                    How the City Tales model works
                </h2>

                <div className="model-item">
                    <img
                        src={IMAGE_URLS.CITY_BACKGROUND}
                        alt="Revenue Pie Chart"
                        className="model-img"
                    />
                    <div className="model-text">
                        <h3>We only make money when creators make money.</h3>
                        <p>
                            When communities pay for a subscription on City
                            Tales, an average of 86% of the revenue goes to the
                            publisher, with the remainder covering our fees. We
                            only make money when writers and creators do.
                        </p>
                    </div>
                </div>

                <div className="model-item reverse">
                    <img
                        src={IMAGE_URLS.NEWSLETTER}
                        alt="Subscription Coins"
                        className="model-img"
                    />
                    <div className="model-text">
                        <h3>The subscription model enables independence.</h3>
                        <p>
                            Writers can build real audiences, not ad-driven
                            traffic. A few hundred paid subscribers can support
                            a livelihood. A few thousand makes it lucrative.
                        </p>
                        <a href="#" className="model-link">
                            Estimate your earnings →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RevenueModel;
