import React from "react";
import { FaFacebook, FaInstagramSquare, FaLink } from "react-icons/fa";
import {Link} from 'react-router-dom'
import "./navbar.scss";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <header>
        <div className="headerMain">
          <div className="linksForHeader">
            <FaFacebook />
            <FaSquareInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>

          <div className="rightHeader">
            <span className="phone"> <span className="iconspan">
            <FaPhone />
            </span>
 (+1) 234 5678 9101</span>
            <span className="mail"> <span className="iconspan">
            <IoMailSharp />
            </span>
    shop@yourdomain.com</span>
          </div>
        </div>
      </header>


      <nav>
        <div className="navContainer">
          <div className="logo">Selling.</div>

          <div className="rightLinksForNavbar">
            <Link>Home</Link>
            <Link to="/add">Add Page</Link>
            <Link to="/cart">Basket</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link>Specials</Link>
            <Link>Specials</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
