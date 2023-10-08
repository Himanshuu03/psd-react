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
    const value= {loginData,setLoginData,signUpData,setSignUpData};
  return (<AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
  )
}

export default Context
export {AppContext};