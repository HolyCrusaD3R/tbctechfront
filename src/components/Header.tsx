import { Link } from "react-router-dom";
import tbcLogo from "../assets/tbcLogo.png";

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
        <div className="flex flex-row gap-8 justify-end">
          <Link to="/signup">
            <div className="px-4 py-2 rounded-md flex flex-col justify-center">
              Sign up
            </div>
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
