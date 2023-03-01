import React from "react";
import { condetails } from "./data";

const ConDetails = () => {
  return (
    <>
      <section className="banner__area pt-70 pb-10">
        <div className="container">
          <div className="row">
            {condetails .map((contact) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={contact.id}>
                <div className="banner__item p-relative w-img mb-30">
                  <div className="banner__img">
                    <a href="">
                      <img src="assets/image/offer2.png" alt="" />
                    </a>
                  </div>
                  <div className="banner__content banner__content_one">
                    <h6 style={{ color: "#fcbe00" }}>
                      {" "}
                      <i className="fal fa-map-marker-alt mr-10"></i>
                      <a href="product-details.html">{contact.type}</a>
                    </h6>
                    <p>{contact.detail}</p>
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
