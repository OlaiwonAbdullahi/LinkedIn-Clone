import LinkedIn from "../assets/LinkedIn.png";
import postcard from "../assets/postcard.svg";
import messages from "../assets/chat.svg";
import Alarm from "../assets/bell.svg";
import laptop from "../assets/laptop.svg";
import briefcase from "../assets/briefcase.svg";
import people from "../assets/people.png";

const MainNavBar = () => {
  return (
    <div className="bg-white text-textcolor shadow-md">
      <div className="h-12 flex justify-between items-center px-4 md:px-10">
        {/* Left section with logo and search */}
        <div className="flex gap-2 items-center">
          <img
            src={LinkedIn}
            alt="LinkedIn Logo"
            className="h-10 w-10 rounded-sm"
          />
          <input
            type="text"
            placeholder="&#x1F50D; Search"
            className="border bg-sky-200 w-56 h-8 placeholder:text-textcolor rounded-sm p-4"
          />
        </div>

        {/* Right section with icons */}
        <div className="hidden md:flex gap-8 font-thin text-xs items-center">
          <div className="flex flex-col items-center">
            <img src={postcard} alt="Articles" className="h-7 w-7" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={people} alt="People" className="h-7 w-7" />
            <span>Network</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={briefcase} alt="Learning" className="h-7 w-7" />
            <span>Job</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={messages} alt="Jobs" className="h-7 w-7" />
            <span>Messages</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Alarm} alt="Games" className="h-7 w-7" />
            <span>Notification</span>
          </div>
          <div className="flex flex-col items-center border-l border-r px-4">
            <img src={laptop} alt="Get the App" className="h-7 w-7" />
            <span>Get the App</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
