import React, { useContext, useState } from 'react'
import Header from '../Components/Navbar'
import { FaUserCircle } from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Footer from '../Components/Footer'
import { AppContext } from '../contextapi/Context'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const {loginData,setLoginData} = useContext(AppContext);
  const [login,setLogin] = useState(false);

  function handleChange(event){
    setLoginData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] : event.target.value 
      }
    })
  }

  function handleClick(){
    if(loginData.email !== "" && loginData.password !== ""){
      toast.success("Login From Filled");
      setLogin(true);
    }
    else{
      toast.warn("Fill All The Details");
    }
  }
  const navigate = useNavigate();
  return (
    <div className="back">
    <div className='l-c'>
      <Header/>

      <div className='main-login-header'>
      <form className='login-form'
      onSubmit={(event)=>{
        event.preventDefault();
      }}
      >
      <FaUserCircle className='login-icons'/>
      <h1 className='login-header'>Login</h1>
      <div className='login-password login'>
      <label className='Contact-label'>
            Company Email<sup className='asterick'>*</sup>
      </label>
      <br/><br/>
      <input type='email' placeholder='name@company.com' className='Contact-label-input' name="email" value={loginData.email}
      required
      onChange={handleChange}
      />
      </div>

      <div className='login-password login'>
      <label className='Contact-label'>
            Password<sup className='asterick'>*</sup>
      </label>
      <br/><br/>
      <input type='password' placeholder='' className='Contact-label-input'name="password" value={loginData.password}
      required
      onChange={handleChange}
      />
      </div>


      <button className='Contact-submit login-password-btn'
      type='submit'
      onClick={handleClick}
      >
            Submit
      </button>

      <p className='already-login'>Create new account <span className='already-login-signup links'>
        <Link to="/sign-up">
         Signup
        </Link>
        </span></p>
      </form>
      </div>
    </div>
    {
      login ?(
    <section className="login-c-s">
            <h2>Login Data</h2>
            <h3>Email :</h3>
            <p>{loginData.email}</p>
            <button className='Contact-submit-close login-password-btn'
            onClick={()=>{
              setLogin(false);
            }}
            >
              Close
            </button>
            <button className='Contact-submit login-password-btn'
            onClick={()=>{
              toast.success("Login From Submitted")
              navigate("/")
            }}
            >
              Submit Data
            </button>
        </section>
      ):(
        <div></div>
      )
    }
      <Footer/>
    </div>
  )
}

export default Login