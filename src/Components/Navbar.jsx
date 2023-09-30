import React from 'react'
import {HiClock,HiMailOpen} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../App.css';

function Navbar() {
  return (
    <div>
        <div className="main-header">
          <div className="main-header-part-1">
            <div>
              <HiMailOpen className='icons'/>
              <p className="icon-name">Pinar@gmail.com</p>
            </div>
            <div className="header-border">
              <BsFillTelephoneFill className='icons'/>
              <p className="icon-name">85 26 37 48 59</p>
            </div>
            <div>
               <HiClock className='icons'/>
              <p className="icon-name">Mon - Sat : 9AM - 6PM</p>
            </div>
          </div>
          <div className="main-header-part-2">
            <div className="hidden">
              <i
                className="fa fa-caret-square-o-down"
                aria-hidden="true"
              ></i>
            </div>
            <div className='links'>LOGIN</div>
            <div className="nav-border links">
              <Link to="/contact-us">
               SUPPORT
              </Link>
              </div>
            <div className='links'>LANGUAGES</div>
          </div>
        </div>
        <div className="nav"> 
          <div className="nav-logo">
            <div className="nav-logo-text">
              <h1 className="first-nav">ULTRA</h1>
              <h1 className="second-nav">PREMIUN</h1>
            </div>
            <p>Psdfreebies.com</p>
          </div>
          <div className="nav-content">
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
              </li>
              <li>
                <Link to="/slider">
                Slider
                </Link>
              </li>
              <li>
                <Link>
                Galleries
                </Link>
              </li>
              <li>
                <Link>
                Pages
                </Link>
              </li>
              <li>
                <Link>
                Blogs
                </Link>
              </li>
              <li>
                <Link to='/contact-us'>
                Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar