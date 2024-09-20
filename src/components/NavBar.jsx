import logo from "../assets/logo.webp";
import BButton from "./buttons/BButton";
import postcard from "../assets/postcard.svg";
import playbtn from "../assets/play-btn.svg";
import puzzle from "../assets/puzzle.svg";
import laptop from "../assets/laptop.svg";
import briefcase from "../assets/briefcase.svg";
import people from "../assets/people.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-3 md:mx-20 mx-5">
      {/* Logo Section */}
      <div className="">
        <img src={logo} className="h-14 w-20 md:h-20 md:w-28" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-7 mt-2">
        <div className="hidden md:flex gap-8 font-thin text-xs">
          <div className="flex flex-col items-center">
            <img
              src={postcard}
              alt="Articles"
              className="h-6 w-6 md:h-7 md:w-7"
            />
            <span>Articles</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={people} alt="People" className="h-6 w-6 md:h-7 md:w-7" />
            <span>People</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={playbtn}
              alt="Learning"
              className="h-6 w-6 md:h-7 md:w-7"
            />
            <span>Learning</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={briefcase} alt="Jobs" className="h-6 w-6 md:h-7 md:w-7" />
            <span>Jobs</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={puzzle} alt="Games" className="h-6 w-6 md:h-7 md:w-7" />
            <span>Games</span>
          </div>
          <div className="flex flex-col items-center border-l border-r px-2">
            <img
              src={laptop}
              alt="Get the App"
              className="h-6 w-6 md:h-7 md:w-7"
            />
            <span className="whitespace-pre">Get the App</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <BButton>Sign In</BButton>
          <button className="border-2 border-blue bg-blue text-white rounded-full px-3 py-1 md:px-4 md:py-2 w-20 md:w-24 h-8 md:h-10 font-semibold text-xs md:text-base">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
