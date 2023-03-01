import React from 'react'
import { RxDotFilled } from "react-icons/rx";

const Abouthero = () => {
  return (
    <>
    <div className="about-area pt-80 pb-80" style={{backgroundColor: '#ffffff'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-6">
        <div className="about-content wow slideInLeft" data-wow-duration="2s">
          <span>ABOUT Us</span>
          <h4>Welcome to My Machine Store</h4>
          <p className="about-text">Over 5 years My Machine Store helping companies reach their <br /> financial and branding goals.</p>
          <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at industry.</p>
          <p>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
          <ul>
            <li><RxDotFilled /><a href="#" className="aboutli">  External cylindrical grinding machine</a></li>
            <li><RxDotFilled /><a href="#" className="aboutli"> Distance between centres 650 mm</a></li>
            <li><RxDotFilled /><a href="#" className="aboutli">CNC Fanuc 31i-A &amp; Centre height 175 mm</a></li>
            <li><RxDotFilled /><a href="#" className="aboutli"> Travels X/Z – 280/800 mm.</a></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 ">
        <div className="about-image w-img  wow slideInRight" data-wow-duration="2s">
          <img src="assets/img/about/about2.png" alt />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Abouthero