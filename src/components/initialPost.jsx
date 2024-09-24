const initialPost = () => {
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
};

export default initialPost;
