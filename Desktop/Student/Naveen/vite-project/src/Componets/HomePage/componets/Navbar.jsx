import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./context";
import { IoLogoRss } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className="h-20 shadow-lg flex justify-between items-center px-20">
        <div className="text-2xl flex items-center">
          <h1 className="font-bold">Tap</h1>
          <i>
            <IoLogoRss className="text-sky" />
          </i>
        </div>
        <ul className="flex gap-5">
          {navLinks.map((nav, index) => {
            return (
              <li
                className="capitalize font-medium hover:text-sky duration-200"
                key={index}
              >
                <Link to={nav.path}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
