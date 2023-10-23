import React, { createContext, useState } from 'react'

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
    const [title,setTitle] = useState(null);
    const [img,setImg] = useState(null);
    const [content,setContent] = useState(null);
    const value= {loginData,setLoginData,signUpData,setSignUpData,contactData,setContactData,setTitle,title,img,setImg,content,setContent};
  return (<AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
  )
}

export default Context
export {AppContext};