import { Link } from 'react-router-dom';
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

export const Navlinks = [
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
    name: "JOIN",
    link: "https://dev-jjgtlcmvb3dvo5kn.us.auth0.com/u/login?state=hKFo2SB2WG95S000clpfcmx4OHVadk8tT1JkU2JLWXgwQy12VaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDdtUXFlaXQwWjh5dGJtMndUbWJjY0ZlNjh5R2pLeFBDo2NpZNkgd3VPbEdEbU9Rb3lmbFFFc0Fxd0gzQ0ZiRHRDbllhVGI",
  },
];
const Footer = () => {
  return (
    <div
      className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300
    "
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="" className="w-16 " />
            <div>
              {/* Social Handle */}
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="sm:block hidden">Contact us: +92 3133742427</div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="inline-block text-lg font-semibold  hover:text-primary py-1 hover:border-primary transition-colors duration-300  "
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
