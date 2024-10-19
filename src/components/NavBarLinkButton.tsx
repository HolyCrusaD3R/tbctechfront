import { Link } from "react-router-dom";

const NavBarLinkButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={to} className="flex flex-col justify-center text-xl">
      <div className="rounded-md py-2 px-4 transition-colors duration-300 transform hover:bg-tbcBlue hover:text-white">
        {children}
      </div>
    </Link>
  );
};

export default NavBarLinkButton;
