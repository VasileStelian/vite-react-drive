import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({scrollToSection}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full relative flex py-6 justify-between items-center navbar z-[150] ">
      <img src={logo} alt="diadrive" className="w-[120px] " />
      <ul className="list-none md:flex hidden justify-end items-center flex-1 ">
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
      <div className="md:hidden flex flex-1 justify-end items-center">
        
        <svg  onClick={() => setToggle((prev) => !prev)}
        className="w-[30px]" fill="#fe4875" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm12.5 10.75c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.248c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75zm0-3.252c0-.414-.336-.75-.75-.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/>
        </svg>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black border transition-all border-neonPink rounded-md absolute right-7 top-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] px-2 ${
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
