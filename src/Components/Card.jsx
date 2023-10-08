import React from 'react'
import '../App.css'

function Card({heading,srcc}) {
  return (
    <div>
        <div className="card">
            <img src={srcc} alt="img"/>
            <h1>{heading}</h1>
            <p>uper slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Read More...</button></p>
        </div>
    </div>
  )
}

export default Card