import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import {  NavLink, Link } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
      return () => {
        window.removeEventListener("scroll", () => {
          console.log("");
        });
      };
    }, []);

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
    <a href="/">
      <img
        className="nav__logo"
        src="https://st4.depositphotos.com/5040187/19757/v/450/depositphotos_197571826-stock-illustration-logo-swoosh-global-red-letter.jpg"
        alt="WYPE LOGO"
      />
    </a>
    <div
      className={`nav__container nav__borderXwidth ${
        show && "nav__containerscroll nav__borderXwidthscroll"
      }`}
    >
      <NavLink
        className={`nav__link ${show && "nav__linkscroll"}`}
        to="/home"
      >
        HOME
      </NavLink>
      <NavLink
        className={`nav__link ${show && "nav__linkscroll"}`}
        to="/whyus"
      >
        WHY US?
      </NavLink>
      <NavLink
        className={`nav__link ${show && "nav__linkscroll"}`}
        to="/working"
      >
        HOW IT WORKS
      </NavLink>
      <NavLink
        className={`nav__link ${show && "nav__linkscroll"}`}
        to="/contact"
      >
        CONTACT US
      </NavLink>
      <NavLink
        className={`nav__link ${show && "nav__linkscroll"}`}
        to="/login"
      >
        LOGOUT
      </NavLink>
    </div>
  </nav>
  )
}

export default Navbar