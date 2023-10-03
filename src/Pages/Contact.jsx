import React from 'react'
import "../App.css"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
            <div className='Contact-form-conatainer'>
            <Navbar path="/contact-us"/>
            <h1 className='b-c-h'>Contact Us</h1>
                <form className='Contact-us-form'>
                    <h1 className='Contact-head'>Talk with our sales team</h1>
                    <p className='Contact-head-2'>Feild mark with an asterick(<span className='asterick'>*</span>) are required</p>
                    <div className='Contact-us-label'>
                            <div>
                            <label className='Contact-label'>
                                First Name<sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type='text' placeholder='e.g.,Himanshu' className='Contact-label-input'/>
                            </div>

                            <div>
                            <label className='Contact-label'>
                                <span>Last Name</span><sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type='text' placeholder='Jangra' className='Contact-label-input'/>
                            </div>
                    </div>
                    <div className='Contact-us-label'>
                            <div>
                            <label className='Contact-label'>
                                Company Email<sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type='email' placeholder='name@company.com' className='Contact-label-input'/>
                            </div>

                            <div>
                            <label className='Contact-label'>
                                Phone No.<sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type="tel" placeholder='+91-930XXXXXX0' className='Contact-label-input'/>
                            </div>
                    </div>
                    <p className='Contact-label'>What would you like to discuss?<sup className='asterick'>*</sup></p>
                    <textarea placeholder='Tell us about your Query?' className='Contact-textarea'/>
                    <div className='Contact-submit-btn'>
                    <button type='submit' className='Contact-submit'>
                        Submit
                    </button>
                    </div>
                </form>
            </div>
            <Footer/>
    </div>
  )
}

export default Contact