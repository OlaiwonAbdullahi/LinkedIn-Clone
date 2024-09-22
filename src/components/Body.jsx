import ProfilePics from "../assets/slider1.png";
import Premium from "../assets/premium.png";
import Dots from "../assets/three-dots.svg";
import LinkedIn from "../assets/LinkedIn.png";
import bookmark from "../assets/bookmark.svg";
import BBotton from "./buttons/BButton.jsx";
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
      <div className="basis-2/4 h-full w-full bg-white p-2 m-7 rounded-xl border-gray-400"></div>

      <div className="basis-1/4 h-72 w-full bg-white p-2 m-7 rounded-xl border-gray-400">
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
