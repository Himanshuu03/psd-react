import React, { createContext, useState } from 'react'

const AppContext = createContext();

function Context({children}) {
    const [loginData,setLoginData] = useState({
        email:"",
        password:"",
        state:false
    })

    const value= {loginData,setLoginData};
  return (<AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
  )
}

export default Context
export {AppContext};