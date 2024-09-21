import linkedin2 from "../assets/linkedin2.png";
import HeroBtn from "../components/buttons/HeroBtn";
import Google from "../assets/Google.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-lightgrey flex flex-col justify-center items-center min-h-screen">
      {/* Logo Section */}
      <div className="mb-6 self-start ml-10">
        <img src={linkedin2} alt="" className="w-28 h-20" />
      </div>

      {/* Signup Form Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Make the most of your professional life
        </h2>
        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg w-full max-w-md mx-auto">
          {/* Form */}
          <form action="" className="w-full">
            <label
              htmlFor="emailForm"
              className="text-sm font-medium text-left block"
            >
              Email or phone number
            </label>
            <input
              type="text"
              id="emailForm"
              className="border border-textcolor rounded-md h-10 w-full mb-5"
            />

            <label
              htmlFor="password"
              className="text-sm font-medium text-left block"
            >
              Password (6+ characters)
            </label>
            <input
              type="password"
              id="password"
              className="border border-textcolor rounded-md h-10 w-full mb-5"
            />

            <div className="flex justify-start items-center mb-5">
              <input type="checkbox" className="accent-green-800 h-6 w-6" />
              <span className="text-sm ml-2">Remember me</span>
            </div>

            <p className="text-xs text-center text-textcolor my-3">
              By clicking Agree & Join or Continue to join, you agree to
              LinkedIn&apos;s
              <span className="text-blue font-semibold"> User Agreement</span>,
              <span className="text-blue font-semibold"> Privacy Policy</span>,
              and
              <span className="text-blue font-semibold"> Cookie Policy</span>.
            </p>
          </form>
          <button className="border-2 border-blue bg-blue text-white rounded-full px-4 py-2 w-full font-semibold text-lg my-4">
            Agree & Join
          </button>
          <hr className="border border-textcolor w-full mb-5" />
          <HeroBtn>
            <img src={Google} alt="Google logo" className="w-6 h-6" /> Continue
            with Google
          </HeroBtn>

          <h2 className="mt-3">
            Already on LinkedIn?
            <span className="text-blue font-semibold">
              {" "}
              <Link to="/SignIn">Sign in</Link>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
