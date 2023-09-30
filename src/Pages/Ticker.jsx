import React from 'react'
import {GiCheckMark} from 'react-icons/gi'
import '../App.css'

function Ticker() {
  return (
    <div>
        <div class="tiker" id="tiker-check">
        <div class="tiker-content">
          <h3>
            Lorem ipsum dolor sitamet conse ctetur adipi sicing elit sed doni.
          </h3>
          <div class="tiker-content-part">
            <GiCheckMark className='icons2'/>
            <p>
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
              rutrum neque.
            </p>
          </div>
          <div class="tiker-content-part">
          <GiCheckMark className='icons2'/>
            <p>
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
              rutrum neque.
            </p>
          </div>
          <div class="tiker-content-part">
          <GiCheckMark className='icons2'/>
            <p>
              Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
              rutrum neque.
            </p>
          </div>
        </div>
        <div class="tiker-photo"></div>
      </div>
    </div>
  )
}

export default Ticker