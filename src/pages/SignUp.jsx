import Logo from "../assets/logo.webp";
import BButton from "../components/buttons/BButton";
import HeroBtn from "../components/buttons/HeroBtn";
import Google from "../assets/Google.png";
const SignUp = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <img src={Logo} alt="" className="w-28 h-20" />
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold">
            Make the most of your professional life
          </h2>
          <form action="">
            <label htmlFor="emailForm" className="text-sm">
              Email or phone number
            </label>
            <br />
            <input
              type="text"
              id="emailForm"
              className="border border-textcolor rounded-md h-8"
            />
            <br />
            <label htmlFor="password">Password (6+ characters)</label>
            <br />
            <input
              type="password"
              id="password"
              className="border border-textcolor rounded-md h-8"
            />
            <input type="checkbox" /> <span>Remember me</span>
          </form>
          <BButton>Agree & Join</BButton>
          <hr />
          <HeroBtn>
            <img src={Google} alt="Google logo" className="w-6 h-6" /> Continue
            with Google
          </HeroBtn>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
