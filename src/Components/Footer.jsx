import React, { useState } from 'react'
import {AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
import {FaYoutubeSquare} from 'react-icons/fa'
import {BiLinkAlt} from 'react-icons/bi'
import '../App.css'

function Footer() {
  const [linker,setLinker] = useState(false);
  return (
    <div>
        <div className="footer" id="tiker-footer">
        <div className="footer-side-one">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <h1 className="first-footer">ULTRA</h1>
              <h1 className="second-footer">PREMIUN</h1>
            </div>
            <p>Psdfreebies.com</p>
          </div>
          <div className="footer-text">
            <p>
              Vero eos et accusamus et iusto odio dignissiomos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quasoa molestias excepturi sintal occaecati cupiditate
              non provident simolique sunt.
            </p>
          </div>
          <div className="footer-icon">
            <AiFillFacebook className='icons3'/>
            <AiFillTwitterSquare className='icons3'/>
            <AiFillLinkedin className='icons3'/>
            <FaYoutubeSquare className='icons4'/>
          </div>
        </div>
        <div className='linker'
        >
        <BiLinkAlt 
        onClick={()=>{
          setLinker(!(linker));
        }}
        />
        </div>
        <div className={
          `footer-side-two ${linker ? "active" :""}`
        }
        >
          <div 
          className ={
            "quick-links"
          }
          >
            <p>Quick Links</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Company</li>
              <li>Our-Services</li>
              <li>Service</li>
              <li>Location</li>
              <li>Recent News</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Company</li>
              <li>Our Services</li>
              <li>Service</li>
              <li>Location</li>
              <li>Recent News</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Company</li>
              <li>Our Services</li>
              <li>Service</li>
              <li>Location</li>
              <li>Recent News</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="end">
        <p className="copy-right">© 2015 HIMANSHU.COM. All Rights Reseverd</p>
      </div>
    </div>
  )
}

export default Footer