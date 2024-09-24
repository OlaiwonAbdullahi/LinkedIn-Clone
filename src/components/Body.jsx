import Premium from "../assets/premium.png";
import Dots from "../assets/three-dots.svg";
import LinkedIn from "../assets/linkedin2.png";
import bookmark from "../assets/bookmark.svg";
import BBotton from "./buttons/BButton.jsx";
import Photo from "../assets/Picture.svg";
import calendar from "../assets/calendar.svg";
import news from "../assets/news.svg";
import Carret from "../assets/carret.svg";
import like from "../assets/like.svg";
import send from "../assets/send.svg";
import repeat from "../assets/repeat.svg";
import chat from "../assets/chat.svg";
import plus from "../assets/plus.svg";
import { UserAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

const Body = () => {
  const [showFormTemp, setShowFormTemp] = useState(false);

  function handleShowFormTemp() {
    setShowFormTemp((show) => !show);
  }

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const data = [
    {
      name: "John Doe",
      post: "Just completed a marathon!",
      occupation: "Software Engineer",
      time: "2 hours ago",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Jane Smith",
      post: "Excited to start a new project on AI!",
      occupation: "Data Scientist",
      time: "1 hour ago",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Michael Johnson",
      post: "Attended an amazing Web3 conference today.",
      occupation: "Blockchain Developer",
      time: "30 minutes ago",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Emily Davis",
      post: "Launched a new blog on tech trends.",
      occupation: "Content Creator",
      time: "5 hours ago",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "David Wilson",
      post: "Preparing for a coding bootcamp.",
      occupation: "Full Stack Developer",
      time: "10 minutes ago",
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="flex flex-row justify-between">
      <div className="basis-1/4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col hidden">
        <div className="bg-slate-300 rounded-t-xl pt-6 mb-6 h-20">
          {user && (
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              className="h-20 w-20 mx-auto p-2 rounded-full"
              alt="User Profile"
            />
          )}
        </div>

        <h2 className="text-base text-center font-semibold">
          {user?.displayName || "Anonymous User"}
        </h2>

        <p className="text-center text-sm my-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          similique!
        </p>
        <hr />
        <div className="flex justify-between pr-20 ml-10 my-3 text-gray-600 text-sm">
          <span>Profile Views</span>
          <span className="text-blue font-semibold">143</span>
        </div>
        <div className="flex justify-between pr-20 ml-10 my-3 text-gray-600 text-sm">
          <span>Post Impressions</span>
          <span className="text-blue font-semibold">14,544</span>
        </div>
        <hr />
        <div className="p-2">
          <p className="text-xs">Job search smarter and stand out</p>
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
        <hr />
        <div className="flex justify-center my-3 gap-2">
          <button
            className="border border-blue text-blue rounded-full p-1 w-24 h-10 font-semibold text-base whitespace-nowrap"
            onClick={handleSignOut}
          >
            Log Out
          </button>
          <button
            className="w-2/3 md:w-2/4 font-medium whitespace-nowrap h-10 flex items-center justify-center gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4"
            //onClick={handleGoogleSignIn}
          >
            <span className=" text-4xl mb-2">&#43; </span>
            <span> Make a Post</span>
          </button>
        </div>
      </div>

      <div className="basis-2/4 h-full md:w-full w-3/4 flex flex-col mx-auto ">
        <PostForm user={user} onAddPost={handleShowFormTemp} />
        <div className="p-2 flex">
          <div className="basis-10/12 p-2">
            <hr className="border border-textcolor" />
          </div>
          <div className="basis-2/12 flex whitespace-nowrap gap-2 text-xs mt-0">
            Sort By: <span className="font-semibold">Top</span>
            <img src={Carret} alt="" className="w-3" />
          </div>
        </div>
        {showFormTemp && (
          <FormTemp user={user} onAddPost={handleShowFormTemp} />
        )}
        <FormArr posts={data} user={user} />
      </div>

      <div className="basis-1/4 h-full w-full bg-white p-3 m-7 rounded-xl border-gray-400 border md:flex md:flex-col hidden">
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
    </div>
  );
};

export default Body;

function FormArr({ posts, user }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <Post key={index} post={post} user={user} />
      ))}
    </ul>
  );
}

function PostForm({ user, onAddPost }) {
  return (
    <div className="h-full w-full  bg-white p-2 mt-7 rounded-xl border-gray-400 border">
      <div className="flex gap-3">
        {user && (
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt=""
            className="w-12 h-12 rounded-full"
          />
        )}

        <button
          className="w-2/3 md:w-full font-medium whitespace-nowrap h-15 flex items-center justify-start gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4"
          onClick={onAddPost}
        >
          <span> Start a Post, Try Writing with AI</span>
        </button>
      </div>
      <div className="pb-0 pt-4 mt-2 px-6 flex justify-between">
        <div className="flex gap-2">
          <img src={Photo} alt="" className="w-5 h-5 text-blue" />
          <span className="text-base font-semibold">Media</span>
        </div>
        <div className="flex gap-2">
          <img src={calendar} alt="" className="w-5 h-5 text-blue" />
          <span className="text-base font-semibold">Event</span>
        </div>
        <div className="flex gap-2">
          <img src={news} alt="" className="w-6 h-6 text-blue" />
          <span className="text-base font-semibold">Write Articles</span>
        </div>
      </div>
    </div>
  );
}

function Post({ user, post }) {
  return (
    <div className="h-full w-full bg-white p-2 mt-1 rounded-xl border-gray-400 border">
      <div className="flex justify-end gap-2">
        <img src={Dots} alt="" className="w-5 mt-2" />
        <p className="text-2xl"> &times; </p>
      </div>

      <div className="flex flex-row gap-3 pl-3">
        <div>
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt=""
            className="w-12 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold">{post.name}</h2>
          <p className="text-xs"> {post.occupation} </p>
          <p className="text-xs text-textcolor">{post.time}</p>
        </div>
      </div>

      <p className="mt-3 mb-4 ml-3">{post.post}</p>

      <div className="w-full h-full mt-3">
        <img src="https://picsum.photos/600/400" alt="Post" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-auto items-center">
        <div className=" flex gap-1 basis-full sm:basis-1/2 mb-2 sm:mb-0">
          <img src={like} alt="" className="h-3 mt-1 font-medium" />
          <span className="text-xs">Abdulllai and 1,234 others</span>
        </div>
        <div className="basis-full sm:basis-1/2 text-right">
          <span className="text-xs">14,940 comments</span>
        </div>
      </div>
      <hr />
      <div className=" flex justify-around mt-3">
        <div className="flex gap-2 font-medium text-gray-600 hover:bg-lightgrey w-24 justify-center h-8 rounded-lg items-center">
          <img src={like} alt="" className="h-6" />
          <span>Like</span>
        </div>
        <div className="flex gap-2 font-medium text-gray-600  hover:bg-lightgrey w-24 justify-center h-8 rounded-lg items-center">
          <img src={chat} alt="" className="h-6" />
          <span> Comment</span>
        </div>
        <div className="flex gap-2 font-medium text-gray-600  hover:bg-lightgrey w-24 justify-center h-8 rounded-lg items-center">
          <img src={repeat} alt="" className="h-6" />
          <span>Repost</span>
        </div>
        <div className="flex gap-2 font-medium text-gray-600  hover:bg-lightgrey w-24 justify-center h-8 rounded-lg items-center">
          <img src={send} alt="" className="h-6" />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
}

function FormTemp({ user, onAddPost }) {
  return (
    <div className="h-full w-full bg-white p-2 mt-1 rounded-xl border-gray-400 border z-50">
      <div className="flex justify-end mb-3">
        <button onClick={onAddPost}>
          <span className="text-4xl">&times;</span>
        </button>
      </div>
      <div className="flex gap-2 ml-3">
        <img src={user.photoURL} alt="" className="h-14 w-14 rounded-full" />
        <div className="">
          <div className="flex gap-1">
            <h2 className="text-base font-semibold">{user.displayName}</h2>
            <img src={Carret} alt="" className="w-4" />{" "}
          </div>
          <span className="text-sm">Post to Anyone</span>
        </div>
      </div>

      <input
        type="text"
        placeholder="What do you want to talk about"
        className="h-64 w-full placeholder:text-2xl focus:outline-none"
      />
      <div className="w-1/2 flex gap-2 p-2">
        <button
          className="w-2/3 md:w-3/4 font-medium whitespace-nowrap h-10 flex items-center justify-center gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4"
          //onClick={handleGoogleSignIn}
        >
          <img src={Premium} alt="" />
          <span> Rewrite with AI</span>
        </button>
        <div className=" flex gap-4 mt-2 pb-2">
          <img src={Photo} alt="" className="h-6 w-6" />
          <img src={calendar} alt="" className="h-6 w-6" />
          <img src={news} alt="" className="h-8 w-8 " />
          <img src={plus} alt="" className="h-8 w-8 " />
        </div>
      </div>
      <hr />
      <div className="w-full flex mt-4 justify-end">
        <button
          className="w-10 md:w-20 font-medium whitespace-nowrap h-10 flex items-center justify-center gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4"
          //onClick={handleGoogleSignIn}
        >
          <span> Post</span>
        </button>
      </div>
    </div>
  );
}
