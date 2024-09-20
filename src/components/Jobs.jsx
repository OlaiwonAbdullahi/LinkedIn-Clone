import BButton from "./buttons/BButton";

const Jobs = () => {
  return (
    <div className="flex flex-col items-center bg-lightred">
      <p className="text-2xl md:text-3xl mb-10 mt-6 text-center text-red-800">
        Post your job for millions of people to see
      </p>

      <BButton>Post A Job</BButton>
    </div>
  );
};

export default Jobs;
