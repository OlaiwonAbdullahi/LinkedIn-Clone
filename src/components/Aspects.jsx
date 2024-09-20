import Button from "./buttons/Button";
import Carret from "../assets/carret.svg";

const Aspects = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 md:p-20 bg-white gap-6 md:gap-10">
      {/* Text Section */}
      <div className="basis-full md:basis-1/3">
        <p className="text-2xl md:text-3xl mb-4">
          Find the right job or internship for you
        </p>
      </div>

      {/* Buttons Section */}
      <div className="basis-full md:basis-2/3 flex flex-wrap justify-start gap-3">
        <Button>Engineering</Button>
        <Button>Business Development </Button>
        <Button>Finance</Button>
        <Button>Administrative Assistant</Button>
        <Button>Retail Associate</Button>
        <Button>Customer Service</Button>
        <Button>Operations </Button>
        <Button>information Technology</Button>
        <Button>Marketing</Button>
        <Button>Human Resources</Button>
        <Button>
          Show More <img src={Carret} alt="" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Aspects;
