import React from 'react'
import CompanyLogo from '../Components/CompanyLogo'
import { FaUserCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../App.css'
import Footer from '../Components/Footer'

function Login() {
  return (
    <>
    <div className='l-c'>
      <CompanyLogo/>
      <div className='main-login-header'>
      <form className='login-form'>
      <FaUserCircle className='login-icons'/>
      <h1 className='login-header'>Login</h1>
      <div className='login-password login'>
      <label className='Contact-label'>
            Company Email<sup className='asterick'>*</sup>
      </label>
      <br/><br/>
      <input type='email' placeholder='name@company.com' className='Contact-label-input'/>
      </div>

      <div className='login-password login'>
      <label className='Contact-label'>
            Password<sup className='asterick'>*</sup>
      </label>
      <br/><br/>
      <input type='password' placeholder='' className='Contact-label-input'/>
      </div>

      <Link to="/">
      <button className='Contact-submit login-password-btn'>
            Submit
      </button>
      </Link>
      <p className='already-login'>Create new account <span className='already-login-signup links'>
        <Link to="/sign-up">
         Signup
        </Link>
        </span></p>
      </form>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Login