import ProfilePics from "../assets/slider1.png";
import Premium from "../assets/premium.png";
import Dots from "../assets/three-dots.svg";
import LinkedIn from "../assets/LinkedIn.png";
import bookmark from "../assets/bookmark.svg";
import BBotton from "./buttons/BButton.jsx";
import Photo from "../assets/picture.svg";
import calendar from "../assets/calendar.svg";
import news from "../assets/news.svg";
import Carret from "../assets/carret.svg";
const Body = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="basis-1/4 h-full w-full bg-white  m-7 rounded-xl border border-gray-400">
        <div className="bg-slate-300 rounded-t-xl pt-6 mb-6 h-20">
          <img
            src={ProfilePics}
            className="h-20 w-20 mx-auto  p-2  rounded-xl"
          ></img>
        </div>

        <h2 className="text-base text-center font-semibold ">
          Abdullahi Olaiwon
        </h2>

        <p className="text-center text-sm my-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          similique!
        </p>
        <hr />
        <div className=" flex justify-between pr-20 ml-10 my-3 text-gray-600 text-sm">
          <span>Profile Views</span>
          <span className="text-blue font-semibold">143</span>
        </div>
        <div className=" flex justify-between pr-20 ml-10 my-3 text-gray-600 text-sm">
          <span>Post Impresions</span>
          <span className="text-blue font-semibold">14,544</span>
        </div>
        <hr />
        <div className="p-2">
          <p className=" text-xs">Job search smarter and stand out</p>
          <div className="flex gap-2 mt-1">
            <img src={Premium} alt="" />
            <span className="text-sm font-semibold">Try Premium for NGN0</span>
          </div>
        </div>
        <hr />
        <div className="flex gap-2 p-2">
          <img src={bookmark} alt="" />
          <span className="font-semibold text-sm">Saved Items</span>
        </div>
      </div>
      <div className="basis-2/4 h-full w-full ">
        <PostForm />
        <div className=" p-2 flex">
          <div className=" basis-10/12  p-2">
            <hr className="border border-textcolor" />
          </div>
          <div className="basis-2/12 flex whitespace-nowrap gap-2 text-xs mt-0">
            {" "}
            Sort By: <span className=" font-semibold">Top</span>{" "}
            <img src={Carret} alt="" className="w-3" />
          </div>
        </div>
      </div>

      <div className="basis-1/4 h-full w-full bg-white p-3 m-7 rounded-xl border-gray-400 border">
        <div className="flex justify-end gap-2">
          <p className="text-right">Ad </p>
          <img src={Dots} alt="" />
        </div>
        <p className="text-center font-medium mb-5">
          Abdullahi , Unlock Your Full potential with LinkedIn Premium
        </p>
        <div className="flex gap-4 mx-auto justify-center mb-5">
          <img src={ProfilePics} alt="" className="h-20 w-20" />
          <img src={LinkedIn} alt="" className="h-20 w-20 rounded-lg" />
        </div>
        <p className="text-sm text-center">
          See the list of people who Viewed your profile
        </p>
        <div className="flex justify-center my-3">
          <BBotton>Try For Free</BBotton>
        </div>
      </div>
    </div>
  );
};

export default Body;

function PostForm() {
  return (
    <div className="h-full w-full bg-white p-2 mt-7 rounded-xl border-gray-400 border">
      <div className=" flex gap-3">
        <img src={ProfilePics} alt="" className="w-12 h-12 rounded-full" />
        <input
          type="text"
          placeholder="Start a Post"
          className="border border-gray-400 rounded-full w-full h-12 p-3 placeholder:font-semibold placeholder:text-textcolor"
        />
      </div>
      <div className="pb-0 pt-4 mt-2 px-6 flex justify-between">
        <div className="flex gap-2">
          <img src={Photo} alt="" className="w-5 h-5 text-blue" />
          <span className="text-base font-semibold ">Media</span>
        </div>
        <div className="flex gap-2">
          <img src={calendar} alt="" className="w-5 h-5 text-blue" />
          <span className="text-base font-semibold ">Event</span>
        </div>
        <div className="flex gap-2">
          <img src={news} alt="" className="w-6 h-6 text-blue" />
          <span className="text-base font-semibold ">Write Articles</span>
        </div>
      </div>
    </div>
  );
}
