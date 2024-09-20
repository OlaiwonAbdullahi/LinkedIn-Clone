import Logo from "../assets/Logo.webp";
import Google from "../assets/google.png";
import HeroBtn from "../components/buttons/HeroBtn";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={Logo} alt="" />

      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
        <h2 className="text-3xl text-textcolor">Sign In</h2>
        <div className="p-4 w-full">
          <HeroBtn>
            <img src={Google} alt="Google logo" className="w-6 h-6" /> Continue
            with Google
          </HeroBtn>
          <HeroBtn>
            <img src={Google} alt="Google logo" className="w-6 h-6" /> Sign in
            with Apple
          </HeroBtn>
        </div>
        <hr className="border border-textcolor w-full" />
        <input
          type="text"
          placeholder="Email or Phone"
          className="border mt-4 w-full border-textcolor placeholder:text-textcolor h-14 rounded-md p-2"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="border mt-4 w-full border-textcolor placeholder:text-textcolor h-14 rounded-md p-2"
        />
        <br />
        <span className="text-blue font-semibold">Forgot Password?</span>
        <button className="border-2 border-blue bg-blue text-white rounded-full px-3 py-1 md:px-4 md:py-2 w-full h-10 font-semibold text-xs md:text-base mt-4">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
