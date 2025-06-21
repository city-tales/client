import Navbar from './Navbar';
import '../styles/Banner.css';

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
            </header>
        </>
    );
}

export default Banner;
