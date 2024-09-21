import Article from "../components/Article";
import Aspects from "../components/Aspects";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import NavBar from "../components/NavBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Index from "../pages/Index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <div className="bg-white">
              <NavBar />
              <Hero />
              <Article />
              <Aspects />
              <Jobs />
            </div>
          }
        />

        {/* SignIn Route */}
        <Route path="/SignIn" element={<SignIn />} />

        {/* SignUp Route */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Index" element={<Index />} />
      </Routes>
    </Router>
  );
};

export default LandingPage;
