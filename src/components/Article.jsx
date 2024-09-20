import BButton from "./buttons/BButton";
import Button from "./buttons/Button";

const Article = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 md:p-20 bg-lightgrey gap-6 md:gap-10">
      {/* Text Section */}
      <div className="basis-full md:basis-1/3">
        <p className="text-2xl md:text-3xl mb-4">
          Explore collaborative articles
        </p>
        <span className="text-base md:text-xl">
          We&apos;re unlocking community knowledge in a new way. Experts add
          insights directly into each article, started with the help of AI.
        </span>
      </div>

      {/* Buttons Section */}
      <div className="basis-full md:basis-2/3 flex flex-wrap justify-start gap-3">
        <Button>Marketing</Button>
        <Button>Public Administration</Button>
        <Button>HealthCare</Button>
        <Button>Engineering</Button>
        <Button>IT Service</Button>
        <Button>Sustainability</Button>
        <Button>Business Adminisration</Button>
        <Button>Telecommunications</Button>
        <Button>HR Manangement</Button>
        <BButton>Show All</BButton>
      </div>
    </div>
  );
};

export default Article;
