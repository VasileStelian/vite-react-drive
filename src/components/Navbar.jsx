import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({scrollToSection}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full relative flex py-6 justify-between items-center navbar z-[150] ">
      <img src={logo} alt="diadrive" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            {nav.external ? (
              <a
                href={nav.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#33bbcf] transition-colors"
              >
                {nav.title}
              </a>
            ) : (
              <Link
                to={nav.url}
                onClick={() =>{
                  setToggle(false);
                  scrollToSection(nav.id);
                }}
                className="hover:text-[#33bbcf] transition-colors"
              >
                {nav.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                {nav.external ? (
                  <a href={nav.url} target="_blank" rel="noopener noreferrer">
                    {nav.title}
                  </a>
                ) : (
                  <Link to={nav.url} onClick={() => setToggle(false)}>
                    {nav.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
