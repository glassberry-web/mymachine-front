import React from 'react'
import { useState, useEffect } from 'react';
import ProDetailContent from './ProDetailContent';
import DOMPurify from 'isomorphic-dompurify';
import {useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { gettabView,setTab_view } from '../Redux/products/TabSlice';


const ProductAdditional = () => {
    const [data, setData] = useState([]);
    const location = useLocation();
    const tabview = useSelector(gettabView);
    const dispatch = useDispatch()
  const { id } = location.state;
  console.log("additipon=>", id);
    const fetchData = () => {
        fetch("http://194.31.53.145:5000/productcontent")
        // fetch("http://194.31.53.145:5000/api/productcontent")
          .then(response => {
            console.log(response);
            return response.json();
          })
          .then(data => {
            setData(data)
            console.log("prodetail=>", data)
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])

   
  return (
   <>
  
  {/* product-details-des-start */}
  <div className="product-details-des mt-40 mb-60 detaildiv">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="product__details-des-tab navmb1rem">
            <ul className="nav nav-tabs resflexnowrap" id="productDesTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button  className={tabview ? "nav-link active" : "nav-link"}  onClick={() => dispatch(setTab_view(true))} id="des-tab" data-bs-toggle="tab" data-bs-target="#des" type="button" role="tab" aria-controls="des" aria-selected="true">Description </button>
              </li>
              <li className="nav-item" role="presentation">
                <button  className={tabview ? "nav-link" : "nav-link active"} id="aditional-tab" data-bs-toggle="tab"   onClick={() => dispatch(setTab_view(false))}data-bs-target="#aditional" type="button" role="tab" aria-controls="aditional" aria-selected="false">Additional information</button>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="prodductDesTaContent">
        {
            tabview ?(
        <div className="tab-pane fade active show" id="des" role="tabpanel" aria-labelledby="des-tab">
                 {
                    data.length > 0 && 
                    data.map((detail) =>(
                       id === detail._id ? (
                           <ProDetailContent HTML = {
                               DOMPurify.sanitize(detail.product_content)
                           } /> 
                        ) : ""
                        )
                       )
                 }
                 
        </div>      
            ) : (
                <div className="tab-pane fade active show" id="aditional" role="tabpanel" aria-labelledby="aditional-tab">
                <div className="product__desc-info">
                    {
                       data.length > 0 &&
                       data.map((detail)=>(
                        id === detail._id ? (
                            <ul>
                            <li>
                              <h6>Model Name</h6>
                              <span>{detail.modalNum}</span>
                            </li>
                            <li>
                              <h6>Control System</h6>
                              <span>Fully Automatic</span>
                            </li>
                            <li>
                              <h6>Sub-Category</h6>
                              <span>{detail.subCategory}</span>
                            </li>

                            <li>
                              <h6>Machine Dimensions</h6>
                              <span>{detail.dimensions}</span>
                            </li>
                            <li>
                              <h6>Machine Power</h6>
                              <span>{detail.power}</span>
                            </li>
                           
                            <li>
                              <h6>X/Y axis positioning Accuracy</h6>
                              <span>{detail.position}</span>
                            </li>
                           
                          </ul>
                        ):""
                       )) 
                    }                   
                 
                </div>
              </div>
            )
                //  data.length > 0 && 
                //  data.map((detail) =>(
                //     id === detail._id ? (
                //         <ProDetailContent HTML = {
                //             DOMPurify.sanitize(detail.product_content)
                //         } /> 
                //      ) : ""
                //      )
                //     )
                  
            }
          
          {/* <div className="product__details-des-wrapper">
            <p className="des-text mb-15">A fully automatic brick making machine is a machine that produces high-quality brick and paver block with no need for manual work all production process is fully automatic and controlled by a PLC Unit these machines are one of the most important technology in the brick making industry today. Automatic brick making machines are widely used in construction sites and are used in the making of Color Pavers, Interlocking Pavers, Paving blocks, and other concrete blocks. These machines are designed by a team of experienced professionals, who have years of experience in their domain. It is assembled with hydraulic cylinders and an electric control panel. It is widely used in the building construction industry, Road Development, Government projects, and industrial brick making businesses.</p>                          
            {/*     <div class="features-des-image text-center">
                          <img src="assets/image/mac/b1.png" alt="">
                      </div> */}
            {/* <div className="product-des-section mb-50">
              <h5 className="des-section mb-30 ">The Advantages of Fully Automatic Brick Making Machine
              </h5>
              <p> Machine is designed to work 24 hours. This machine is very fast and has a high production capacity through special servo motors. By changing the mold, the machine can produce any type of Concrete Paving Blocks, Hollow Blocks, Insulated Bricks,, Different Curbstones, Asmolen, and Chimney Blocks With the height between 2cm and 40 cm. Daily capacity (8 hours) 700 m² Paving Blocks / 10.000 Pieces Concrete Hollow Blocks.</p>
            </div> */}
            {/* <div className="row">
              <div className="col-xl-6">
                <div className="des-single mb-30 text-center">
                  <div className="features-des-image text-center">
                    <img src="assets/image/mac/b2.png" alt />
                  </div>
                  <h5 className="des-section mt-40">A high degree of automation</h5>
                  <p>PLC electric control system is applied to the machine, and it fully controls all the procedures. The advanced fault diagnosis device will check and correct the errors automatically.</p>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="des-single text-center mb-30">
                  <div className="features-des-image">
                    <img src="assets/image/mac/b4.png" alt />
                  </div>
                  <h5 className="des-section text-center mt-40">Easy operation</h5>
                  <p>It adopts the inverter control stacker system, which ensures smooth and secure running. All the production processes, from feeding to stacking, are completed by the fully automatic production line control system.</p>
                </div>
              </div>
            </div> */}
            {/* <p className="des-text mb-5">when the automatic brick machine comes into operation, the host machine is running all the time. While other engines run intermittently. The intermittent running ensures low energy consumption. The machine adopts a heavy-duty design and high-strength steel materials with advanced thermal treatment. The whole machine and the molds are hard-wearing. The advanced technology applied to the machines prolongs the service life.</p> */}
          
        
        </div>
        {/* <div className="tab-pane fade" id="aditional" role="tabpanel" aria-labelledby="aditional-tab">
          <div className="product__desc-info">
            <ul>
              <li>
                <h6>Control System</h6>
                <span>Fully Automatic</span>
              </li>
              <li>
                <h6>Weight</h6>
                <span>11.000 Kg</span>
              </li>
              <li>
                <h6>Machine Dimensions</h6>
                <span>220 cm / 750 cm / 250 cm</span>
              </li>
              <li>
                <h6>Production Capacity</h6>
                <span>100-120 Pallets / Hour</span>
              </li>
              <li>
                <h6>External Chassis Dimensions</h6>
                <span>150 x 200 x 6 mm Closed Profile</span>
              </li>
              <li>
                <h6>Vibration Force</h6>
                <span>42.500 Kg</span>
              </li>
              <li>
                <h6>Lower Vibrator Motor Power</h6>
                <span>7.5 Kw x 2 Pieces</span>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
          <div className="product__details-review">
            <div className="row">
              <div className="col-xl-12">
                <div className="product__details-comment ">
                  <div className="comment-title mb-20">
                    <h3>Add a review</h3>
                  </div>
                  <div className="comment-rating mb-20">
                    <ul>
                      <li><a href="#"><i className="fas fa-star" /></a></li>
                      <li><a href="#"><i className="fas fa-star" /></a></li>
                      <li><a href="#"><i className="fas fa-star" /></a></li>
                      <li><a href="#"><i className="fas fa-star" /></a></li>
                      <li><a href="#"><i className="fas fa-star" /></a></li>
                    </ul>
                  </div>
                  <div className="comment-input-box">
                    <form action="#">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                          <div className="comment-input">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                          <div className="comment-input">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <textarea placeholder="Your review" className="comment-input comment-textarea" defaultValue={""} />
                        </div>
                        <div className="col-xxl-12">
                          <div className="comment-submit">
                            <button type="submit" className="cart-btn">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  {/* </div> */}
  {/* product-details-des-end */}


    </>
  )
}

export default ProductAdditional