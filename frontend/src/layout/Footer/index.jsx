import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './footer.scss'
function Footer() {
  return (
   <>
<footer>
<div className="aboutFooter">
  <h6 className='headerForAbout'>ABOUT US</h6>
   <p>
   Lorem ipsum dolor sit amet <br />
   consectetur adipisicing elit. Neque <br />
   facere laudantium magnam <br />
   voluptatum autem. Amet aliquid <br />
    nesciunt veritatis aliquam.

   </p>
  </div>

  <div className="quickLinks">
  <h6>QUICK LINKS</h6>
   <div className='linksForQuick'>
    <Link>About Us</Link>
    <Link>Services</Link>
    <Link>Testimonials</Link>
    <Link>Contact Us</Link>

   </div>
  </div>

  <div className="followFooter">
  <h6>FOLLOW US</h6>
   <div>
   <Link><FaLinkedin/></Link>
   <Link><FaInstagram/></Link>
   <Link><FaTwitter/></Link>
   <Link><FaLinkedin/></Link>

   </div>

   
  </div>
  <div className="featuredProductFooter">
    <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" style={{width:"200px"}}/>
    <h6>Leather brown Shape</h6>
    <div className="price">$6.00</div>
    <button style={{backgroundColor:"black", color:"white"}}>ADD TO CART</button>
   </div >
</footer>
   
   </>
  )
}

export default Footer