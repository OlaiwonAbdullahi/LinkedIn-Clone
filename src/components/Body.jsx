import ProfilePics from "../assets/slider1.png";
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
      <div className="basis-1/4 h-64 w-full bg-red-900">
        <div className="flex te">
          <span className="text-right">Ad </span>
        </div>
        <p>Abdullahi ,claim your $100 in ad credit</p>
        <img src={ProfilePics} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
    </div>
  );
};

export default Body;
