import React from "react";
import { condetails } from "./data";

const ConDetails = () => {
  return (
    <>
      <section className="banner__area pt-70 pb-10">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 text-center">
              <h4 className="conde">Our Contact Details</h4>
            </div>
            {condetails .map((contact) => (
              <div className="col-xl-4 col-md col-lg-4 col-md-6" key={contact.id}>
                <div className="banner__item p-relative w-img mb-30">
                  <div className="banner__img bgblack">
                    <a href="">
                      <img src="assets/image/offer2.png" alt=""  className="vishid"/>
                    </a>
                  </div>
                  <div className="banner__content banner__content_one">
                    <h6 style={{ color: "#fcbe00" }}>
                      {" "}
                      {contact.icon} 
                      <a className="ml1rem">{contact.type}</a>
                    </h6>
                    <a href={contact.dir} className="afs">{contact.detail}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConDetails;
