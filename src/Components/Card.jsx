import React, { useContext } from 'react'
import '../App.css'
import { AppContext } from '../contextapi/Context'
import { useNavigate } from 'react-router-dom';

function Card({heading,srcc,content}) {
  const {setTitle,setImg,setContent} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
        <div className="card">
            <img src={srcc} alt="img"/>
            <h1>{heading}</h1>
            <p>{content}</p>
            <p><button
            onClick={()=>{
              setTitle(`${heading}`);
              setImg(`${srcc}`);
              setContent(`${content}`)
              navigate("/blogs/readMore")
            }}
            >Read More...</button></p>
        </div>
    </div>
  )
}

export default Card