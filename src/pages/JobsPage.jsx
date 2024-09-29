import bookmark from "../assets/bookmark.svg";
import premium from "../assets/premium.png";
import video from "../assets/play-btn.svg";
import menu from "../assets/menu.svg";
const Jobs = () => {
  return (
    <div className=" flex justify-between">
      <div className=" basis-1/4">
        <div className="">
          <div className=" flex gap-2">
            <img src={bookmark} alt="" className="h-6 w-6" />
            <span>My Job</span>
          </div>
          <div className=" flex gap-2">
            <img src={menu} alt="" className="h-6 w-6" />
            <span>My Job</span>
          </div>
          <div className=" flex gap-2">
            <img src={premium} alt="" className="h-6 w-6" />
            <span>My Job</span>
          </div>
          <div className=" flex gap-2">
            <img src={video} alt="" className="h-6 w-6" />
            <span>My Job</span>
          </div>
        </div>
      </div>
      <div className=" basis-2/4"></div>
      <div className=" basis-1/4"></div>
    </div>
  );
};

export default Jobs;
