import LinkedIn from "../assets/LinkedIn.png";
const MainNavBar = () => {
  return (
    <div>
      <div className="h-12 bg-white text-textcolor ">
        <div className=" flex">
          <img src={LinkedIn} alt="" className="h-10 w-10" />

          <input
            type="text"
            placeholder="search"
            className="border bg-sky-200 w-56 h-8 placeholder:text-textcolor"
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MainNavBar;
