import React, { createContext, useState , useRef  } from 'react'

const AppContext = createContext();

function Context({children}) {
    const [loginData,setLoginData] = useState({
        email:"",
        password:"",
        state:false
    })
    const [signUpData,setSignUpData] = useState({
      fname:"",
      lname:"",
      email:"",
      phoneno:"",
      password:"",
      confirmPassword:""
    })
    const [contactData,setContactData] = useState({
      fname:"",
      lname:"",
      email:"",
      phoneno:"",
      query:""
    })
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const phonenoRef = useRef();
    const queryRef = useRef();
    const [title,setTitle] = useState(null);
    const [img,setImg] = useState(null);
    const [content,setContent] = useState(null);
    const value= {loginData,setLoginData,signUpData,setSignUpData,contactData,setContactData,setTitle,title,img,setImg,content,setContent,fnameRef,lnameRef,emailRef,phonenoRef,queryRef};
  return (<AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
  )
}

export default Context
export {AppContext};