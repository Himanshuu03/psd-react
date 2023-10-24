import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import "../App.css";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



function Footer() {
  const [linker, setLinker] = useState(false);
  return (
    <div>
      <div className="footer" id="tiker-footer">
        <div className="footer-side-one">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <h1 className="first-footer">ULTRA</h1>
              <h1 className="second-footer">PREMIUN</h1>
            </div>
            <p>Ultrapremiun.com</p>
          </div>
          <div className="footer-text">
            <p>
              Transform your online presence with Ultra Premiun. We're
              here to turn your ideas into reality. Contact us today, and let's
              get started on your project. Your success is our priority.
            </p>
          </div>
          <div className="footer-icon">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <AiFillFacebook className="icons3"/>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <AiFillTwitterSquare className="icons3" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <AiFillLinkedin className="icons3" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutubeSquare className="icons4" />
            </a>
            
          </div>
        </div>
        <div className="linker">
          <BiLinkAlt
            onClick={() => {
              setLinker(!linker);
            }}
          />
        </div>
        <div className={`footer-side-two ${linker ? "active" : ""}`}>
          <div className={"quick-links"}>
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
                </li>
              <li>
                <Link to="/galleries">
                About
                </Link>
                </li>
              <li>
                <Link to='/slider'>
                Company
                </Link>
                </li>
              <li>
              <Link to="/pages">
                Our Services
                </Link>
              </li>
              <li>
              <Link to="/pages">
                Service
                </Link>
              </li>
              <li
              onClick={()=>{
                toast.success("Currently physically present in India.");
              }}
              >Location</li>
              <li>
                <Link to="/blogs">
                Recent News
                </Link>
                </li>
              <li>
                <Link to="/contact-us">
                Contact us
                </Link>
                </li>
            </ul>
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
                </li>
              <li>
                <Link to="/galleries">
                About
                </Link>
                </li>
              <li>
                <Link to='/slider'>
                Company
                </Link>
                </li>
              <li>
              <Link to="/pages">
                Our Services
                </Link>
              </li>
              <li>
              <Link to="/pages">
                Service
                </Link>
              </li>
              <li
              onClick={()=>{
                toast.success("Currently physically present in India.");
              }}
              >Location</li>
              <li>
                <Link to="/blogs">
                Recent News
                </Link>
                </li>
              <li>
                <Link to="/contact-us">
                Contact us
                </Link>
                </li>
            </ul>
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
                </li>
              <li>
                <Link to="/galleries">
                About
                </Link>
                </li>
              <li>
                <Link to='/slider'>
                Company
                </Link>
                </li>
              <li>
              <Link to="/pages">
                Our Services
                </Link>
              </li>
              <li>
              <Link to="/pages">
                Service
                </Link>
              </li>
              <li
              onClick={()=>{
                toast.success("Currently physically present in India.");
              }}
              >Location</li>
              <li>
                <Link to="/blogs">
                Recent News
                </Link>
                </li>
              <li>
                <Link to="/contact-us">
                Contact us
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="end">
        <p className="copy-right">© 2015 HIMANSHU.COM. All Rights Reseverd</p>
      </div>
    </div>
  );
}

export default Footer;
