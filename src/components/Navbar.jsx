import { Link } from 'react-router-dom';
import { pageRoutes } from '../utils/routes';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left"> </div>
                <ul className="navbar-links">
                    <li>
                        <Link to={pageRoutes.home} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={pageRoutes.stories} className="nav-link">
                            Stories
                        </Link>
                    </li>
                    <li>
                        <Link to={pageRoutes.trending} className="nav-link">
                            Trending
                        </Link>
                    </li>
                    <li>
                        <Link to={pageRoutes.writeAStory} className="nav-link">
                            Write a Story
                        </Link>
                    </li>
                    <li>
                        <Link to={pageRoutes.categories} className="nav-link">
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link to={pageRoutes.about} className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>

                {/* Search box with gradient background */}
                <div className="search-box">
                    {/* Left portion: white input */}
                    <input
                        type="text"
                        placeholder="Search a Story"
                        className="search-input"
                    />

                    {/* Right portion: gradient background with icon */}
                    <div className="search-icon-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="search-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 19l-3-3m-2.5-5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                            />
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
