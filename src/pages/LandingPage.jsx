import Article from "../components/Article";
import Aspects from "../components/Aspects";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <div className=" bg-white">
      <NavBar />
      <Hero />
      <Article />
      <Aspects />
      <Jobs />
    </div>
  );
};

export default LandingPage;
