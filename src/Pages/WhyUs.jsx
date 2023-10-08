import React from 'react'
import '../App.css'

function WhyUs() {
  return (
    <div>
        <div className="why-us" id="tiker-check2">
        <h1>Why us?</h1>
        <div className="why-us-content">
          <p>
            Vici nisi etiam orci faucibus felis justo sem cras viverra sociis
            rutrum neque.
          </p>
          <p>
            Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a
            ante metus vidi
          </p>
          <p>massa. Aenean eleitend.</p>
        </div>
      </div>
      <div className="why-us-2">
        <div className="why-us-2-content">
          <div className="card-why-us-2">
            <div className="why-us-2-img">
              <img src={require('../Assests/share.png')} alt='pp'/>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                laborum, doloremque mollitia perspiciatis omnis tenetur maxime
                nemo neque, veniam repudiandae minus consectetur blanditiis quia
                quae eaque odit? Ratione, doloremque placeat!
              </p>
            </div>
          </div>

          <div className="card-why-us-2 border-card">
            <div className="why-us-2-img">
              <img src={require('../Assests/think.png')} alt='pp'/>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                laborum, doloremque mollitia perspiciatis omnis tenetur maxime
                nemo neque, veniam repudiandae minus consectetur blanditiis quia
                quae eaque odit? Ratione, doloremque placeat!
              </p>
            </div>
          </div>
          <div className="card-why-us-2">
            <div className="why-us-2-img">
              <img src={require('../Assests/clock.png')} alt='pp' />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                laborum, doloremque mollitia perspiciatis omnis tenetur maxime
                nemo neque, veniam repudiandae minus consectetur blanditiis quia
                quae eaque odit? Ratione, doloremque placeat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs