import {HiClock,HiMailOpen} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../App.css';
import { useContext, useState } from 'react';
import { AppContext } from '../contextapi/Context';
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
function Navbar({path}) {
  const {loginData} = useContext(AppContext);
  const check = loginData.state;
  const [hamBurger,setHamBurger] = useState(false);
  function hamHandler(){
    setHamBurger(!hamBurger);
  }
  return (
    <div>
        <div className="main-header">
          <div className="main-header-part-1">
            <div>
            <a href='mailto:himanshu32428@gmail.com'>
              <HiMailOpen className='icons'/>
              </a>
              <p className="icon-name">
                <a href='mailto:himanshu32428@gmail.com'>
                himanshu@gmail.com
                </a>
                </p>
            </div>
            <div className="header-border">
              <a href='tel:+4733378901'>
              <BsFillTelephoneFill className='icons'/>
              </a>
              <a href="tel:+919306748005">
              <p className="icon-name">85 26 37 48 59</p>
              </a>
            </div>
            <div>
               <HiClock className='icons' onClick={()=>{
                toast.warn("Services timming are Mon - Sat : 9AM - 6PM")
               }}/>
              <p className="icon-name" onClick={()=>{
                toast.warn("Services timming are Mon - Sat : 9AM - 6PM")
               }}>Mon - Sat : 9AM - 6PM</p>
            </div>
          </div>
          <div className="main-header-part-2">
            <div className="hidden">
              <i
                className="fa fa-caret-square-o-down"
                aria-hidden="true"
              ></i>
            </div>
            <div className='links'>
              <Link to="/login">
                {
                  check ? "LOGOUT" : "LOGIN"
                }
              </Link>
              </div>
            <div className="nav-border links">
              <Link to="/contact-us">
               SUPPORT
              </Link>
              </div>
            <div className='links'
            onClick={()=>{
              toast.warn("Current language is English")
            }}
            >LANGUAGES</div>
          </div>
        </div>
        <div className="nav"> 
          <div className="nav-logo">
            <div className="nav-logo-text">
              <h1 className="first-nav">ULTRA</h1>
              <h1 className="second-nav">PREMIUN</h1>
            </div>
            <p>Ultrapremiun.com</p>
          </div>
          <div className='Bars'>
            {
              hamBurger ?(
                <ImCross onClick={hamHandler}/>
              ):(
                <FaBars onClick={hamHandler}/>
              )
            }
          </div>
          <div className="nav-content">
            <ul className={
              `nav-ham ${hamBurger ? "actives" :""}`
            }>
              <li>
                <Link to="/" style={
                  {
                    color: `${path ===  "/" ? "blue":"black"}`
                  }
                }
                >
                Home
                </Link>
              </li>
              <li>
              <Link to="/slider" style={{color: `${path === "/slider" ? "blue":"black"}`}}
                >
                Slider
                </Link>
              </li>
              <li>
              <Link to="/galleries" style={{color: `${path === "/galleries" ? "blue":"black"}`}}
                >
                Galleries
                </Link>
              </li>
              <li>
              <Link to="/pages" style={{color: `${path === "/pages" ? "blue":"black"}`}}

                >
                Pages
                </Link>
              </li>
              <li>
              <Link to="/blogs" style={{color: `${path === "/blogs" ? "blue":"black"}`}}
                >
                Blogs
                </Link>
              </li>
              <li>
              <Link to="/contact-us" style={{color: `${path === "/contact-us" ? "blue":"black"}`}}
                >
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