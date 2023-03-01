import React from "react";
import ConDetails from "./ConDetails";
import ContactForm from "./ContactForm";
import Googlemap from "./Googlemap";
import Imagesec from "./Imagesec";

const ContactAllSections = () => {
  return (
    <>
      <div className="account-area mt-90 mb-50">
        <div className="container">
          <div className="row">
            <Imagesec />
            <ContactForm />
            <ConDetails />
            <Googlemap />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAllSections;
