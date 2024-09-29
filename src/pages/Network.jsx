import MainNavBar from "../components/MainNavBar";
import Newspaper from "../assets/newspaper.svg";
import calendar from "../assets/calendar.svg";
import postcard from "../assets/postcard.svg";
import bookmark from "../assets/bookmark.svg";
import briefcase from "../assets/briefcase.svg";
import BBotton from "../components/buttons/BButton";
import LinkedIn from "../assets/linkedin2.png";
import Dots from "../assets/three-dots.svg";
import { UserAuth } from "../context/AuthContext";

const Network = () => {
  const user = UserAuth();
  return (
    <div className=" bg-lightgrey">
      <MainNavBar />
      <div className="flex md:flex-row justify-between flex-col">
        <div className="basis-1/4 h-full w-full bg-white md:m-7 mt-4 m-0 rounded-xl border border-gray-400 md:flex md:flex-col">
          <h2 className="p-2 font-semibold">Manage my network</h2>
          <hr />

          <div className=" flex  justify-between p-2">
            <div className="flex gap-2">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Connections</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">14,232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex  gap-2">
              <img src={briefcase} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Contacts</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">4,232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex  gap-2">
              <img src={Newspaper} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">
                Followings & Followers
              </h2>
            </div>
            <div className=" whitespace-nowrap font-medium">14,232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex  gap-2">
              <img src={postcard} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Groups</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex  gap-2">
              <img src={calendar} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Events</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">32</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex  gap-2">
              <img src={bookmark} alt="" className="h-6 w-6" />
              <h2 className=" whitespace-nowrap font-medium">Pages</h2>
            </div>
            <div className=" whitespace-nowrap font-medium">232</div>
          </div>

          <div className=" flex  justify-between p-2">
            <div className="flex  gap-2">
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
          <div className=" flex justify-around mt-4 bg-white md:m-7 m-0 rounded-xl border border-gray-400">
            <div className=" text-green-900 border-b-green-800 border-b-2 font-medium w-full mx-10 mb-1 basis-1/2 text-center">
              Grow
            </div>
            <div className="font-medium basis-1/2 text-center">Catch Up</div>
          </div>
          <div className=" flex justify-around mt-4 p-2 bg-white md:m-7 m-0 rounded-xl border border-gray-400 ">
            <div className="">No Pending Invitations</div>
            <div className="font-medium">Manage</div>
          </div>
          <div className=" bg-white md:m-7 mt-4 m-0 rounded-xl border border-gray-400 p-4 ">
            <div className="flex justify-between p-2">
              <div className=" font-medium">Job Search Smarter</div>
              <div className=" text-2xl"> &times;</div>
            </div>
            <div className="">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                tenetur.
              </p>
              <div className=" flex gap-2 mt-3">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/150"}
                  alt=""
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-xs">
                  Abdullahi and millions of other members uses Premium
                </span>
              </div>
              <div className=" w-1/2 mt-2">
                {" "}
                <button className=" bg-yellow-600 text-textcolor rounded-full p-1 w-3/4 h-10 font-semibold text-base whitespace-nowrap ">
                  Try Premium For NGN0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
