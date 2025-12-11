import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../layouts/MyLayout";

const Navbar = () => {
  const { handleSignOut } = useContext(AuthContext);
  return (
    <div>
      <ul className="flex gap-5 items-center my-5">
        <li className="bg-purple-500 p-1 rounded-md">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="bg-purple-500 p-1 rounded-md">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="bg-purple-500 p-1 rounded-md">
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li className="bg-purple-500 p-1 rounded-md">
          <NavLink to="/login">login</NavLink>
        </li>
        <li className="bg-purple-500 p-1 rounded-md">
          <NavLink to="/profile">profile</NavLink>
        </li>
        <button onClick={handleSignOut} className="bg-red-500 p-1 rounded-md">
          Sign Out
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
