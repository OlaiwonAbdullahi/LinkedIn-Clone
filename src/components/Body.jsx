import ProfilePics from "../assets/slider1.png";
import Dots from "../assets/three-dots.svg";
import LinkedIn from "../assets/LinkedIn.png";
import BBotton from "./buttons/BButton.jsx";
const Body = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4 h-64 w-full bg-white">
        <img src={ProfilePics}></img>
        <h2>Abdullahi Olaiwon</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          similique!
        </p>
        <hr />
        <div className=" flex justify-between pr-20">
          <span>Profile Views</span>
          <span>143</span>
        </div>
        <div className=" flex justify-between pr-20">
          <span>Post Impresions</span>
          <span>14,544</span>
        </div>
        <hr />
      </div>
      <div className="basis-2/4 h-64 w-full bg-green-900"></div>
      <div className="basis-1/4 h-72 w-full bg-white p-2 m-7 rounded-xl">
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
