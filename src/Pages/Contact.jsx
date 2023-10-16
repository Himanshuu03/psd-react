import React, { useContext } from 'react'
import "../App.css"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { AppContext } from '../contextapi/Context'

function Contact() {
    const {contactData,setContactData} = useContext(AppContext);
    function changeHandle(event){
        setContactData((prevData)=>{
          return{
            ...prevData,
            [event.target.name] :event.target.value
          }
        })
      }
  return (
    <div className='back'>
            <div className='Contact-form-conatainer'>
            <Navbar path="/contact-us"/>
            <header className="page-header">
        <h1>Contact Us</h1>
    </header>
                <form className='Contact-us-form' onSubmit={(event)=>{
                    event.preventDefault();
                }}>
                    <h1 className='Contact-head'>Talk with our sales team</h1>
                    <p className='Contact-head-2'>Feild mark with an asterick(<span className='asterick'>*</span>) are required</p>
                    <div className='Contact-us-label'>
                            <div>
                            <label className='Contact-label'>
                                First Name<sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type='text' placeholder='e.g.,Himanshu' className='Contact-label-input'
                            name='fname' value={contactData.fname} onChange={changeHandle}
                            />
                            </div>

                            <div>
                            <label className='Contact-label'>
                                <span>Last Name</span><sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type='text' placeholder='Jangra' className='Contact-label-input'
                            name='lname' value={contactData.lname} onChange={changeHandle}
                            />
                            </div>
                    </div>
                    <div className='Contact-us-label'>
                            <div>
                            <label className='Contact-label'>
                                Company Email<sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type='email' placeholder='name@company.com' className='Contact-label-input'
                            name='email' value={contactData.email} onChange={changeHandle}
                            />
                            </div>

                            <div>
                            <label className='Contact-label'>
                                Phone No.<sup className='asterick'>*</sup>
                            </label>
                            <br/><br/>
                            <input type="tel" placeholder='+91-930XXXXXX0' className='Contact-label-input'
                            name='phoneno' value={contactData.phoneno} onChange={changeHandle}
                            />
                            </div>
                    </div>
                    <p className='Contact-label'>What would you like to discuss?<sup className='asterick'>*</sup></p>
                    <textarea placeholder='Tell us about your Query?' className='Contact-textarea'
                    name='query' value={contactData.query} onChange={changeHandle}
                    />
                    <div className='Contact-submit-btn'>
                    <button type='submit' className='Contact-submit'
                    onClick={()=>{
                        if(contactData.query !== "" && contactData.fname !== "" && contactData.lname !== "" && contactData.phoneno !== "" && contactData.email !== "" ){
                            alert(`Query submitted name :-> ${contactData.fname} ${contactData.lname} and the query :-> "${contactData.query}"`)
                        }
                        else{
                            alert("You missed the feild");
                        }
                        console.log(contactData);
                    }}
                    >
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