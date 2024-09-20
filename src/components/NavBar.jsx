import logo from "../assets/logo.webp";
import BButton from "./BButton";
import postcard from "../assets/postcard.svg";
import playbtn from "../assets/play-btn.svg";
import puzzle from "../assets/puzzle.svg";
import laptop from "../assets/laptop.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between p-3 mx-20">
      <div className="">
        <img src={logo} className="h-20"></img>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex gap-4">
          <img src={postcard} alt="" className="h-7 w-7" />
          <img src={playbtn} alt="" className="h-7 w-7" />
          <img src={puzzle} alt="" className="h-7 w-7" />
          <img src={laptop} alt="" className="h-7 w-7" />
          <img src={laptop} alt="" className="h-7 w-7" />
          <img src={laptop} alt="" className="h-7 w-7" />
        </div>
        <div className="flex gap-3">
          <BButton>Sign In</BButton>
          <button className="border-2 border-blue bg-blue  whitespace-nowrap text-white rounded-full p-1 w-24 h-10 font-semibold text-base">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
