import React from 'react'
import CompanyLogo from '../Components/CompanyLogo'
import { FaUserCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div>
        <CompanyLogo/>
        <form className='sign-up-form'>
        <FaUserCircle className='login-icons'/>
        <h1 className='login-header'>Sign Up</h1>


        <Link to="/">
        <button className='Contact-submit'>
            Submit
        </button>
        </Link>
         <p className='already-login'>Already a member ? <span className='already-login-signup links'>
            <Link to="/login">Login</Link>
         </span>
         </p>
        </form>
    </div>
  )
}

export default Signup