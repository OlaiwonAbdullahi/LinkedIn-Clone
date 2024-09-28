import MainNavBar from "../components/MainNavBar";
import Newspaper from "../assets/newspaper.svg";
import BBotton from "../components/buttons/BButton";
import LinkedIn from "../assets/linkedin2.png";
import Dots from "../assets/three-dots.svg";

const Network = ({ user }) => {
  return (
    <div className=" bg-lightgrey">
      <MainNavBar />
      <div className="flex md:flex-row justify-between flex-col">
        <div className="basis-1/4 h-full w-full bg-white md:m-7 mt-4 m-0 rounded-xl border border-gray-400 md:flex md:flex-col">
          <h2 className="p-2 font-semibold">Manage my network</h2>
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
          <hr className=" border border-gray-400" />
          <div className="flex justify-end gap-2">
            <p className="text-right">Ad</p>
            <img src={Dots} alt="" />
          </div>
          <p className="text-center font-medium mb-5">
            {user?.displayName || "Anonymous User"}, Unlock Your Full potential
            with LinkedIn Premium
          </p>
          <div className="flex gap-4 mx-auto justify-center mb-5">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt=""
              className="h-20 w-20 rounded-full"
            />
            <img src={LinkedIn} alt="" className="h-20 w-20 rounded-lg" />
          </div>
          <p className="text-sm text-center">
            See the list of people who Viewed your profile
          </p>
          <div className="flex justify-center my-3">
            <BBotton>Try For Free</BBotton>
          </div>
        </div>
        <div className="basis-3/4 h-full w-full">
          {" "}
          <div className=" bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col">
            <div className=""></div>
          </div>
          <div className=" bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col"></div>
          <div className=" bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Network;
