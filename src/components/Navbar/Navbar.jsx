import React, { useState } from "react";
import "./navbar.css";

import { GiEarthAsiaOceania } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <GiEarthAsiaOceania className="icon" />
              Arulin
            </h1>
          </a>
        </div>

        <div className={`navBar ${isNavOpen ? "active" : ""}`}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>
          <div className="closeNavbar" onClick={handleCloseNavbar}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar" onClick={handleToggleNavbar}>
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
