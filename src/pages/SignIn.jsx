import Logo from "../assets/Logo.webp";
import Google from "../assets/google.png";
import HeroBtn from "../components/buttons/HeroBtn";

const SignIn = () => {
  return (
    <div>
      <img src={Logo} alt="" />

      <div className=" flex flex-col justify-center mx-auto">
        <h2 className="text-3xl text-textcolor">Sign In</h2>
        <div className=" p-4">
          <HeroBtn>
            <img src={Google} alt="Google logo" className="w-6 h-6" /> Continue
            with Google
          </HeroBtn>
          <HeroBtn>
            <img src={Google} alt="Google logo" className="w-6 h-6" /> Sign in
            with Apple
          </HeroBtn>
        </div>
        <hr className="border border-textcolor mx-4" />
        <input
          type="text"
          placeholder="Email or Phone"
          className="border mt-4 w-2/3 border-textcolor placeholder:text-textcolor h-14 rounded-md p-2"
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="border mt-4 w-2/3 border-textcolor placeholder:text-textcolor h-14 rounded-md p-2"
        />
        <br />
        <span className="text-blue font-semibold">Forgot Password?</span>

        <button className="border-2 border-blue bg-blue text-white rounded-full px-3 py-1 md:px-4 md:py-2 w-full md:w-1/3 h-8 md:h-10 font-semibold text-xs md:text-base">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default SignIn;
