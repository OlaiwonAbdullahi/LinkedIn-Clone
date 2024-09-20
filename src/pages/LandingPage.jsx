import Article from "../components/Article";
import Aspects from "../components/Aspects";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <div className=" bg-white">
      <NavBar />
      <Hero />
      <Article />
      <Aspects />
    </div>
  );
};

export default LandingPage;
