import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoManSharp, IoWoman } from "react-icons/io5";
import { TbMoodKidFilled } from "react-icons/tb";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <IoMdHome />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <IoManSharp />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <IoWoman />
          Women's
        </div>
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <TbMoodKidFilled />
          Kid's
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
