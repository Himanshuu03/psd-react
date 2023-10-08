import React from 'react'
import {GiCheckMark} from 'react-icons/gi'
import '../App.css'

function Ticker() {
  return (
    <div>
        <div className="tiker" id="tiker-check">
        <div className="tiker-content">
          <h3>
            Lorem ipsum dolor sitamet conse ctetur adipi sicing elit sed doni.
          </h3>
          <div className="tiker-content-part">
            <GiCheckMark className='icons2'/>
            <p>
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
              rutrum neque.
            </p>
          </div>
          <div className="tiker-content-part">
          <GiCheckMark className='icons2'/>
            <p>
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
              rutrum neque.
            </p>
          </div>
          <div className="tiker-content-part">
          <GiCheckMark className='icons2'/>
            <p>
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
              rutrum neque.
            </p>
          </div>
        </div>
        <div className="tiker-photo"></div>
      </div>
    </div>
  )
}

export default Ticker