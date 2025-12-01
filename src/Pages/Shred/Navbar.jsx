import React from "react";
import Logo from "../../Components/Logo";
import { Link, NavLink } from "react-router";
import useUserAuth from "../../Hooks/useUserAuth";

const Navbar = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Services</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">Send a Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage Areas</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
          </li>
        </>
      )}
       <li>
        <NavLink to="/">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  rounded-xl shadow-sm bg-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* FIX: plain div used, not Link */}
        <div className="btn btn-ghost text-xl">
          <Logo />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <Link onClick={handleLogOut} className="btn bg-primary">
            LogOut
          </Link>
        ) : (
          <Link to="/login" className="btn bg-primary">
            Login
          </Link>
        )}
        <Link to="/rider" className="btn mx-4 bg-primary">
          Sign up{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
