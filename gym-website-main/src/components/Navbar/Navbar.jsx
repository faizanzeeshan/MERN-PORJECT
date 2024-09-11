import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Navlinks = [
  {
    id: 3,
    name: "HOME",
    link: "/",
  },

  {
    id: 1,
    name: "SERVICES",
    link: "/services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 3,
    name: "CONTACT US",
    link: "/contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container" style={{width:"1600px ", marginInline:"280px"}}>
        <div className="flex justify-between items-center">
          <div className="sm:flex items-center gap-2 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            +92 3133742427
          </div>
          <div>
            <img
              src={Logo}
              alt=""
              className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 "
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="inline-block text-lg font-semibold  hover:text-primary duration-300  "
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* DarkMode feature implement */}
              <DarkMode />

              <div className="log ">
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      LOG OUT
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={() => loginWithRedirect()}>LOG IN</button>
                  </li>
                )}
                   
              </div>
              <li>
                {
                  isAuthenticated &&  <p>{user.name}</p>
                }
              </li>
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
