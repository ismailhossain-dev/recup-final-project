import React from "react";
import Logo from "../../../components/Logo/Logo";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // একটি কমন ক্লাস ফাংশন যাতে একটিভ লিংক বুঝা যায়
  const navLinkStyles = ({ isActive }) =>
    `  mr-2 active:bg-transparent! hover:bg-transparent! p-0 ${isActive ? "border-b-2 border-blue-500  text-primary " : ""}`;

  const links = (
    <>
      <li>
        <NavLink to="/service" className={navLinkStyles}>
          Service
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className={navLinkStyles}>
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink to="/coverage" className={navLinkStyles}>
          Coverage
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/70 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-12 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-lg border border-base-200"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center gap-2">
          <Logo />
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-2 font-medium">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20 capitalize text-black"
          >
            LogOut
          </button>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20 capitalize text-black"
          >
            Log in
          </NavLink>
        )}

        {/* Be a Rider button  */}
        <button className="btn btn-primary btn-sm md:btn-md shadow-lg shadow-primary/20 capitalize text-black mx-4">
          Be a Rider
        </button>
      </div>
    </div>
  );
};

export default Navbar;
