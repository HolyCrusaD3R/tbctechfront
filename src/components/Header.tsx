import tbcLogo from "../assets/tbcLogo.png";
import NavBarLinkButton from "./NavBarLinkButton";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-between max-w-[1400px] mx-auto my-4">
        <div className="flex flex-row gap-8 justify-start">
          <img src={tbcLogo} className="w-16 h-16" />
          <div className="flex flex-col justify-center text-xl">
            <p>TBC smart contracts</p>
          </div>
        </div>
        <div className="flex flex-row gap-8 justify-end ">
          <NavBarLinkButton to="/">Home</NavBarLinkButton>
          <NavBarLinkButton to="/login">Log In</NavBarLinkButton>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
