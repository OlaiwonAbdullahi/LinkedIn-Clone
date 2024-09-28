import MainNavBar from "../components/MainNavBar";
import Newspaper from "../assets/newspaper.svg";

const Network = () => {
  return (
    <div className=" bg-lightgrey">
      <MainNavBar />
      <div className="flex md:flex-row justify-between flex-col">
        <div className="basis-1/4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col">
          <h2 className="p-2">Manage my network</h2>
          <hr />
          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Connections</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">14,232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Contacts</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">4,232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">
                Followings & Followers
              </h2>
            </div>
            <div className=" whitespace-nowrap font-medium">14,232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Groups</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Events</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">32</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Pages</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex ">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Newsletters</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">20</div>
          </div>
        </div>
        <div className="basis-3/4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col"></div>
      </div>
    </div>
  );
};

export default Network;
