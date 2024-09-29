import bookmark from "../assets/bookmark.svg";
import premium from "../assets/premium.png";
import video from "../assets/play-btn.svg";
import menu from "../assets/menu.svg";
import MainNavBar from "../components/MainNavBar";
const Jobs = () => {
  return (
    <div className="bg-lightgrey">
      <MainNavBar />

      <div className=" flex justify-between ">
        <div className="">
          <div className=" basis-1/4  p-4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col hidden">
            <div className="">
              <div className=" flex gap-2 my-3">
                <img src={bookmark} alt="" className="h-6 w-6" />
                <span>My Job</span>
              </div>
              <div className=" flex gap-2 my-3">
                <img src={menu} alt="" className="h-6 w-6" />
                <span>Preferences</span>
              </div>
              <div className=" flex gap-2 my-3">
                <img src={premium} alt="" className="h-6 w-6" />
                <span>My Career Insight</span>
              </div>
              <div className=" flex gap-2 my-3">
                <img src={video} alt="" className="h-6 w-6" />
                <span>Job seeker guidance</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-center w-full mx-auto items-center">
            <button className="border border-blue text-blue rounded-full p-1 w-3/4 h-10 font-semibold text-base whitespace-nowrap ">
              Post a free Job
            </button>
          </div>
        </div>
        <div className=" basis-2/4"></div>
        <div className=" basis-1/4"></div>
      </div>
    </div>
  );
};

export default Jobs;
