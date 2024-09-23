import LinkedIn from "../assets/linkedin.png";
import grid from "../assets/grid.svg";
import messages from "../assets/chat.svg";
import Alarm from "../assets/bell.svg";
import Home from "../assets/house.svg";
import premium from "../assets/premium.png";
import briefcase from "../assets/briefcase.svg";
import people from "../assets/people.png";
import Carret from "../assets/carret.svg";

const MainNavBar = () => {
  return (
    <div className="bg-white text-textcolor shadow-md top-0 sticky">
      <div className="h-12 flex justify-between items-center px-4 md:px-32">
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
            className="border bg-sky-100 w-64 h-8 placeholder:text-textcolor rounded-sm p-4"
          />
        </div>

        {/* Right section with icons */}
        <div className="hidden md:flex gap-8 font-thin text-xs items-center">
          <div className="flex flex-col items-center">
            <img src={Home} alt="Articles" className="h-5 w-5" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={people} alt="People" className="h-5 w-5" />
            <span>Network</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={briefcase} alt="Learning" className="h-5 w-5" />
            <span>Job</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={messages} alt="Jobs" className="h-5 w-5" />
            <span>Messages</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Alarm} alt="Games" className="h-5 w-5" />
            <span>Notification</span>
          </div>
          <div className="flex flex-col items-center  border-l px-4">
            <img src={grid} alt="Get the App" className="h-5 w-5" />
            <span className="flex gap-1 whitespace-nowrap">
              For Business <img src={Carret} className="w-3 h-3 mt-1" />
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={premium} alt="Games" className="h-5 w-5" />
            <span className=" whitespace-nowrap">Try Premium for NGN0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
