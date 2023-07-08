import React, { useEffect, useState } from "react";
import { topSubData, latestSubData } from "./data";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa"
import axios from "axios";

const SubSection = () => {
  const [user , setUser] = useState()
  async function fetchData() {
    try {
      const response = await axios.get("http://194.31.53.145/api/fetch")
      setUser(response.data)
      console.log(setUser);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
      <div className="col-xl-6 col-lg-12">
        {user && user.map((top) => (
          <div className="row">
             {/* {top.map((pro) => ( */}
            <div className="col-md-6">             
                <div className="single-features-item b-radius mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="#">
                            <img src={top.image} alt="mymachinestore" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product__content product__content-d">
                        <h6>
                          <a href="#">{top.product_name}</a>
                        </h6>
                        {/* <div className="rating mb-5">
                          <ul>
                            {pro.star.map((stars) => (
                              <li>
                                <a href="#">{stars}</a>
                              </li>
                            ))}                           
                          </ul>                         
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
        {/* ))} */}

             <div className="col-md-6">
              <div className="single-features-item b-radius mb-20">
                <div className="row  g-0 align-items-center">
                  <div className="col-6">
                    <div className="features-thum">
                      <div className="features-product-image w-img">
                        <a href="#">
                          <img
                            src={top.image}
                            alt="mymachinestore"
                          />
                        </a>
                      </div>
                     
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product__content product__content-d">
                      <h6>
                        <a href="#">{top.product_name}</a>
                      </h6>
                      {/* <div className="rating mb-5">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-star" />
                            </a>
                          </li>
                        </ul>
                       
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">  */}
            {/* <div className="single-features-item b-radius mb-20">
              <div className="row  g-0 align-items-center">
                <div className="col-6">
                  <div className="features-thum">
                    <div className="features-product-image w-img">
                      <a href="#">
                        <img
                          src="assets/image/top-searched-product/G3015X-B7-One.png"
                          alt
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="product__content product__content-d">
                    <h6>
                      <a href="#">G3015X-B7</a>
                    </h6>
                    <div className="rating mb-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SubSection;



