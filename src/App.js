import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Banner />} />
            </Routes>
        </Router>
    );
}

export default App;
