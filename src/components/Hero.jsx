import Button from "./Button";
import HeroImg from "../assets/heroimg.svg";
import Google from "../assets/Google.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 md:items-center md:justify-between px-5 md:pl-20">
      <div className="flex flex-col items-center md:items-start md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-center md:text-left text-3xl md:text-6xl text-slate-600 mb-6 md:mb-10 leading-10">
          Welcome to your <br></br> professional community
        </h2>

        <Button className="w-full md:w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-md mb-4">
          <img src={Google} alt="Google logo" className="w-6 h-6" /> Continue
          with Google
        </Button>

        <Button className="w-full md:w-auto bg-white text-blue-600 border border-blue-600 p-3 rounded-md mb-4">
          Sign in with email
        </Button>

        <p className="text-xs text-center md:text-left text-slate-500 mb-3">
          By clicking Continue to join or sign in, you agree to LinkedIn&apos;s{" "}
          <span className="text-blue-600">User Agreement</span>,{" "}
          <span className="text-blue-600">Privacy Policy</span>, and{" "}
          <span className="text-blue-600">Cookie Policy</span>.
        </p>

        <span className="text-xs text-center md:text-left text-slate-500">
          New to LinkedIn?{" "}
          <span className="text-blue-600 font-semibold">Join Now</span>
        </span>
      </div>

      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 mt-24">
        <img src={HeroImg} alt="Hero Image" className="w-full md:w-5/6" />
      </div>
    </div>
  );
};

export default Hero;
