import Article from "../components/Article";
import Aspects from "../components/Aspects";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import NavBar from "../components/NavBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Index from "../pages/Index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Protected from "../components/Protected";
import Network from "./Network";
import JobsPage from "./JobsPage";

const LandingPage = () => {
  return (
    <div className="">
      <AuthContextProvider>
        <Router>
          <Routes>
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

            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Network" element={<Network />} />
            <Route path="/JobsPage" element={<JobsPage />} />

            <Route path="/SignUp" element={<SignUp />} />
            <Route
              path="/Index"
              element={
                <Protected>
                  <Index />
                </Protected>
              }
            />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default LandingPage;
