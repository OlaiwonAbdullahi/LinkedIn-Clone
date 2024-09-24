import like from "../assets/like.svg";
import send from "../assets/send.svg";
import repeat from "../assets/repeat.svg";
import chat from "../assets/chat.svg";
import Dots from "../assets/three-dots.svg";

const InitialPost = () => {
  const data = [
    {
      name: "John Doe",
      dp: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&facialHairType=BeardMedium&clotheType=Hoodie",
      post: "  The journey began months ago when I decided to challenge myself. Training for a marathon was no small feat. I spent countless hours running early in the morning, battling through rainy days, and even dealing with the occasional injury. But every drop of sweat was worth it as I watched my endurance and strength improve.",
      occupation: "Software Engineer",
      time: "2 hours ago",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "Jane Smith",
      dp: "https://avataaars.io/",
      post: "  I am thrilled to announce that I’m embarking on a new project focused on artificial intelligence! This has been a long-time interest of mine, and I believe now is the perfect time to dive in and explore its vast possibilities.",
      occupation: "Data Scientist",
      time: "1 hour ago",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "Michael Johnson",
      dp: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&facialHairType=BeardMedium&clotheType=Hoodie",
      post: " I just got back from an incredible Web3 conference, and I am buzzing with excitement! The event brought together some of the brightest minds and innovators in the blockchain and decentralized technology space, and it was an amazing opportunity to learn, connect, and collaborate.",
      occupation: "Blockchain Developer",
      time: "30 minutes ago",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "Emily Davis",
      dp: "https://avataaars.io/",
      post: " I’m thrilled to announce the launch of my new blog dedicated to exploring the latest trends in technology! This has been a project I’ve been passionate about for quite some time, and I can’t wait to share my insights and discoveries with all of you.",
      occupation: "Content Creator",
      time: "5 hours ago",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "David Wilson",
      dp: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&facialHairType=BeardMedium&clotheType=Hoodie",
      post: " I’m excited to share that I’m getting ready to embark on a new adventure: a coding bootcamp! This is a big step for me, and I can’t wait to dive into the world of coding and software development.",
      occupation: "Full Stack Developer",
      time: "10 minutes ago",
      image: "https://picsum.photos/150/150",
    },
  ];

  return (
    <div className="">
      {data.map((post, index) => (
        <PostTemp post={post} key={index} />
      ))}
    </div>
  );
};

export default InitialPost;

function PostTemp({ post }) {
  return (
    <div className="h-full w-full bg-white p-2 mt-1 rounded-xl border border-gray-400">
      <div className="flex justify-end gap-2">
        <img src={Dots} alt="" className="w-5 mt-2" />
        <p className="text-2xl">&times;</p>
      </div>

      <div className="flex flex-row gap-3 pl-3">
        <div>
          <img
            src={post.dp || "https://via.placeholder.com/150"}
            alt=""
            className="w-12 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold">{post.name}</h2>
          <p className="text-xs">{post.occupation}</p>
          <p className="text-xs text-textcolor">{post.time}</p>
        </div>
      </div>

      <p className="mt-3 mb-4 ml-3 text-sm">{post.post}</p>

      <div className="w-full h-full mt-3">
        <img src={post.image} alt="Post" className="w-full h-auto rounded-lg" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-auto items-center">
        <div className="flex gap-1 basis-full sm:basis-1/2 mb-2 sm:mb-0">
          <img src={like} alt="" className="h-3 mt-1 font-medium" />
          <span className="text-xs">Abdulllai and 1,234 others</span>
        </div>
        <div className="basis-full sm:basis-1/2 text-right">
          <span className="text-xs">14,940 comments</span>
        </div>
      </div>

      <hr />

      <div className="flex justify-around mt-3">
        {[
          { src: like, label: "Like" },
          { src: chat, label: "Comment" },
          { src: repeat, label: "Repost" },
          { src: send, label: "Send" },
        ].map((action, index) => (
          <div
            key={index}
            className="flex gap-2 font-medium text-gray-600 hover:bg-lightgrey w-24 justify-center h-8 rounded-lg items-center"
          >
            <img src={action.src} alt="" className="h-6" />
            <span>{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
