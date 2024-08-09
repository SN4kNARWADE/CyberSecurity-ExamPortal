
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// This is a footer Section

const Footer = () => {
  return (
    <>
      <div className="container contact" id="contact">
       <h1>Touch in Contact</h1>
      <h2>Welcome to cyber warrior</h2>
      <p>Contact us at cyberwarrior.help@gmail.com or call us at 123-456-7890</p>
      <p>Follow us on social media: Linkedin Twitter, Instagram</p>
        
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/cyberwarrior8358/?hl=en" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
          <a href="https://www.linkedin.com/company/98839066/admin/feed/posts/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a> */}
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:webdevmastery@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;