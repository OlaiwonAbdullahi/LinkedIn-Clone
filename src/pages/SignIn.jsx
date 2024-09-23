import Google from "../assets/google.png";
import Logo from "../assets/google.png";
import apple from "../assets/apple.svg";
import HeroBtn from "../components/buttons/HeroBtn";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <img src={Logo} alt="" className="self-start w-32 ml-3" />
      <div className="flex flex-col  items-center w-full max-w-md mx-auto">
        <h2 className="text-3xl text-textcolor self-start font-semibold">
          Sign In
        </h2>
        <div className="p-4 w-full">
          <button
            className="w-full md:w-full flex items-center justify-center gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4"
            onClick={handleGoogleSignIn}
          >
            <img src={Google} alt="Google logo" className="w-6 h-6" />{" "}
            <Link to="/Index">Continue with Google</Link>
          </button>

          <HeroBtn>
            <img src={apple} alt="Google logo" className="w-6 h-6" /> Sign in
            with Apple
          </HeroBtn>
        </div>
        <hr className="border border-textcolor w-full" />
        <input
          type="text"
          placeholder="Email or Phone"
          disabled
          className="border mt-4 w-full border-textcolor placeholder:text-textcolor h-14 rounded-md p-2"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          disabled
          className="border mt-4 w-full border-textcolor placeholder:text-textcolor h-14 rounded-md p-2"
        />
        <br />
        <span className="text-blue font-semibold self-start">
          Forgot Password?
        </span>
        <button className="border-2 border-blue bg-blue text-white rounded-full px-3 py-1 md:px-4 md:py-2 w-full h-10 font-semibold text-base md:text-lg mt-4">
          Sign In
        </button>
        <h2 className="mt-3">
          New to LinkedIn?{" "}
          <span className="text-blue font-semibold">
            {" "}
            <Link to="/SignUp">Join now</Link>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default SignIn;
