import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";  // Your main page
import Auth from "./components/AuthForm";  // Sign Up Page
import SignIn from "./components/SignIn";  // Sign In Page
import Footer from "./components/Footer"; // Footer Component
import WriteStory from "./components/WriteStory";
function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page (Banner) */}
        <Route path="/" element={<Banner />} />

        {/* Sign Up Page */}
        <Route path="/auth" element={<SignIn />} />

        {/* Sign In Page (Adding this route) */}
        <Route path="/signin" element={<Auth/>} />
         {/* Write a Story Page (Newly Added) */}
        <Route path="/write-story" element={<WriteStory />} />
      </Routes>

      {/* Global Footer (No Change) */}
      <Footer />
    </Router>
  );
}

export default App;


// 
// import { useState } from "react";
// import LoadingScreen from "./components/LoadingScreen";
// import Home from "./components/Home";

// function App() {
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   return (
//     <>
//       {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
//       {loadingComplete && <Home />}
//     </>
//   );
// }

// export default App;
