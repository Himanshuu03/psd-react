import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AppContext } from '../contextapi/Context';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const {fnameRef,lnameRef,emailRef,queryRef,phonenoRef} = useContext(AppContext);
    const [contact,setContact] = useState(false); 
    const [varr,setVarr] = useState(false);

  function clickHandler() {
    if (
        fnameRef.current.value &&
        lnameRef.current.value &&
        emailRef.current.value &&
        phonenoRef.current.value &&
        queryRef.current.value
      ) {
        toast.success("Contact Form is Filled");
        setContact(true);
        setVarr(!varr);
      } else {
        toast.warn("Form is invalid. Please fill in all required fields.")
        setContact(false);
      }
  }

  return (
    <div className='back'>
      <div className='Contact-form-conatainer'>
        <Navbar path="/contact-us" />
        <header className="page-header">
          <h1>Contact Us</h1>
        </header>
        <form className='Contact-us-form' onSubmit={(event) => {
          event.preventDefault();
        }}>
          <h1 className='Contact-head'>Talk with our sales team</h1>
          <p className='Contact-head-2'>Fields marked with an asterisk (<span className='asterisk'>*</span>) are required</p>
          <div className='Contact-us-label'>
            <div>
              <label className='Contact-label'>
                First Name<sup className='asterick'>*</sup>
              </label>
              <br /><br />
              <input
                type='text'
                placeholder='e.g., Himanshu'
                className='Contact-label-input'
                name='fname'
                ref={fnameRef}
              />
            </div>

            <div>
              <label className='Contact-label'>
                Last Name<sup className='asterick'>*</sup>
              </label>
              <br /><br />
              <input
                type='text'
                placeholder='Jangra'
                className='Contact-label-input'
                name='lname'
                ref={lnameRef}
              />
            </div>
          </div>
          <div className='Contact-us-label'>
            <div>
              <label className='Contact-label'>
                Company Email<sup className='asterick'>*</sup>
              </label>
              <br /><br />
              <input
                type='email'
                placeholder='name@company.com'
                className='Contact-label-input'
                name='email'
                ref={emailRef}
              />
            </div>

            <div>
              <label className='Contact-label'>
                Phone No.<sup className='asterick'>*</sup>
              </label>
              <br /><br />
              <input
                type="tel"
                placeholder='+91-930XXXXXX0'
                className='Contact-label-input'
                name='phoneno'
                ref={phonenoRef}
              />
            </div>
          </div>
          <p className='Contact-label'>What would you like to discuss?<sup className='asterick'>*</sup></p>
          <textarea
            placeholder='Tell us about your Query?'
            className='Contact-textarea'
            name='query'
            ref={queryRef}
          />
          <div className='Contact-submit-btn'>
            <button
              type='submit'
              className='Contact-submit'
              onClick={clickHandler}
            >
              Submit
            </button>
          </div>
        </form>
      {
      contact ?(
    <section className="login-c-s">
            <h2>Contact Us Data</h2>
            <h3>Name :</h3>
            <p>{fnameRef.current.value} {lnameRef.current.value}</p>
            <h3>Email :</h3>
            <p>{emailRef.current.value}</p>
            <h3>Phone No :</h3>
            <p>{phonenoRef.current.value}</p>
            <h3>Query :</h3>
            <p>{queryRef.current.value}</p>
            <button className='Contact-submit-close login-password-btn'
            onClick={()=>{
              setContact(false);
            }}
            >
              Close
            </button>
            <button className='Contact-submit login-password-btn'
            onClick={()=>{
                fnameRef.current.value = '';
                lnameRef.current.value = '';
                emailRef.current.value = '';
                phonenoRef.current.value = '';
                queryRef.current.value = '';
                setContact(false);
                toast.success("Query has been submitted")
            }}
            >
              Submit Data
            </button>
        </section>
      ):(
        <div></div>
      )
    }
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
