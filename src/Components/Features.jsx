import React, { useState } from "react";
import SubSection from "./SubSection";
import { sectionTitleData, topSubData } from "./data";
import SectionTitle from "./SectionTitle";
import { FaRegEye, FaCircle } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";

const Features = () => {
  const [title, SetTitle] = useState(sectionTitleData);
  return (
    <>
      <section className="featured light-bg pt-90 pb-45">
        <div className="container">
          <SectionTitle title={title.filter((data) => data.id === 1)} />
          <div className="row">
          <div className="col-xl-6 col-lg-12">            
              <div className="single-features-item single-features-item-d b-radius mb-20">
                <div className="row  g-0 align-items-center">
                  <div className="col-md-6">
                    <div className="features-thum">
                      <div className="features-product-image w-img">
                        <a href="#">
                          <img
                            src="assets/image/top-searched-product/product1.png"
                            alt
                          />
                        </a>
                      </div>
                     
                      <div className="product-action">
                        <a
                          href="#"
                          className="icon-box icon-box-1"
                          data-bs-toggle="modal"
                          data-bs-target="#productModalId"
                        >
                          
                          <FaRegEye />
                          <FaRegEye />
                        </a>                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product__content product__content-d">
                      <h6>
                        <a href="#">GCC C180II</a>
                      </h6>                     
                      <div className="features-des mb-25">
                        <ul>
                          <li>
                            <a href="#">                             
                              Work Area - 18 x 12 in.</a>
                          </li>
                          <li>
                            <a href="#">                        
                              Drive - Closed Loop DC Servo Control
                            </a>
                          </li>
                          <li>
                            <a href="#">                             
                              Dimentions - 30.7 X 29.1 X 16.1 in.
                            </a>
                          </li>
                          <li>
                            <a href="#">                              
                              Maximum Motor Speed - 40 IPS
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-option">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#modalone"
                          className="cart-btn-2 w-100 mr-10"
                        >
                          enquire now
                        </a>
                        <a href="#" className="transperant-btn">
                          <i className="fal fa-heart" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            
            <SubSection />
          {/* </div> */}
        
        </div>
        </div>
      </section>
    </>
  );
};

export default Features;
