import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      </ul>
    </div>
  );
};

export default Navbar;
