import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="col-lg-6 col-sm-6 contactdiv">
     
        <div className="basic-login">
          
          <h5>Send message to us</h5>
         
          <form action="#">
          <div className="row">
            <div className="col-lg-6">
            <input id="name" type="text" placeholder="Enter name" />
            </div>

            <div className="col-lg-6">
            <input id="email" type="text" placeholder="Enter email" />
            </div>

            {/* <input
              id="useyyyr"
              type="password"
              placeholder="Enter password..."
              autoComplete="off"
            /> */}

           <div className="col-lg-6">
            <input id="phone" type="text" placeholder="Enter number" />
            </div>
            <div className="col-lg-6">
            <input id="city" type="text" placeholder="Enter city" />
            </div>

            <div className="col-lg-12">
            <textarea id="subject" type="text" rows="4" cols="50" placeholder="Enter message" />
            </div>
            <div className="col-lg-12 text-center">
            <a href="login.html" className="tp-in-btn w-50">
              Submit
            </a>
            </div>
            </div>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default ContactForm;
