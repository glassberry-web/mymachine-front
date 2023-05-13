import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="col-lg-6 col-sm-6 contactdiv">
        <div className="basic-login">
          <h5>Send message to us</h5>
          <form action="#">
            <input id="user" type="text" placeholder="Enter Username" />

            <input id="emai" type="text" placeholder="Email address..." />

            <input
              id="user"
              type="password"
              placeholder="Enter password..."
            />

            <input
              id="userphone"
              type="text"
              placeholder="Enter phone number..."
            />

            <a href="login.html" className="tp-in-btn w-100">
              Submit
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
