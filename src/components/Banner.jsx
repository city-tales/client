import Navbar from './Navbar';
import '../styles/Banner.css';
import Card from './Card';
import { IMAGE_URLS } from '../utils/constants';

function Banner() {
    return (
        <>
            <header className="banner-container">
                <div className="hero-section">
                    <Navbar />
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Join the Storytelling Revolution
                        </h1>
                        <button className="hero-signin-btn">Sign In</button>
                    </div>
                </div>

                <section className="second-section">
                    <div className="left-panel">
                        <h2 className="city-tales-title">City Tales</h2>
                        <p className="city-tales-desc">
                            Join us on an illuminating exploration. Delve into a
                            world of heartfelt recollections, hidden gems, and
                            become part of an ever-growing storytelling
                            community. Because every city has tales waiting to
                            be told.
                        </p>
                        <input
                            type="text"
                            className="story-input"
                            placeholder="Name your adventure..."
                        />
                        <button className="start-story-btn">Start Story</button>
                    </div>

                    <div className="right-cards">
                        <Card
                            title="Your City"
                            imageSrc={IMAGE_URLS.CITY}
                            imageAlt="Home"
                            description="Discover real experiences around your city"
                            buttonText="Your city"
                            // onButtonClick={() => handleYourCityClick()}
                        />

                        <Card
                            title="Top Storytellers"
                            imageSrc={IMAGE_URLS.TRENDING}
                            imageAlt="Trending"
                            description="Meet the best storytellers"
                            buttonText="Top Storytellers"
                            // onButtonClick={() => handleStorytellerClick()}
                        />

                        <Card
                            title="Category"
                            imageSrc={IMAGE_URLS.CATEGORY}
                            imageAlt="Categories"
                            description="Explore categories from travel to lifestyle"
                            buttonText="Category"
                            // onButtonClick={() => handleCategoryClick()}
                        />

                        <Card
                            title="Write Your Story"
                            imageSrc={IMAGE_URLS.WRITE_YOUR_STORY}
                            imageAlt="Sign In"
                            description="Connect with people with your journey."
                            buttonText="Write your story"
                            // onButtonClick={() => handleWriteStoryClick()}
                        />
                    </div>
                </section>
            </header>
        </>
    );
}

export default Banner;
