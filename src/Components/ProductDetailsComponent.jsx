import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import { getpopup } from "../Redux/products/PopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from '../Redux/products/PopupSlice';
import ProductEnquiryForm from "./ProductEnquiryForm";

const ProductDetailsComponent = () => {
  const location = useLocation();
  const { id } = location.state;
  console.log("productdetail=>", id);
  const [data, setData] = useState([]);
  const popup = useSelector(getpopup);
  const dispatch = useDispatch();

  const fetchData = () => {
    fetch("http://localhost:5000/fetch")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* product-details-start */}
      <div className="product-details">
        <div className="container">
          {data.length > 0 &&
            data.map((detail) =>
              id === detail._id ? (
                <div className="row">
                  <div className="col-xl-6">
                    <div className="product__details-nav d-sm-flex align-items-start justify-content-center">
                      <div className="product__details-thumb">
                        <div className="tab-content" id="productThumbContent">
                          <div
                            className="tab-pane fade show active"
                            id="thumbOne"
                            role="tabpanel"
                            aria-labelledby="thumbOne-tab"
                          >
                            <div className="product__details-nav-thumb w-img proimg detailimg">
                              <ReactImageMagnify
                                {...{
                                  smallImage: {
                                    alt: "Wristwatch by Ted Baker London",
                                    isFluidWidth: true,
                                    imageClassName: "proimg",
                                    src: `http://localhost:5001/${detail.image}`,
                                  },
                                  largeImage: {
                                    src: `http://localhost:5001/${detail.image}`,
                                    width: 2000,
                                    height: 1800,
                                  },
                                  isHintEnabled: true,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="product__details-content">
                      <h6>{detail.product_name}</h6>
                      <div className="pd-rating mb-10">
                        {detail.shortDiscription}
                      </div>

                      <div className="features-des mb-20 mt-10">
                        <ul>
                          <li>
                            <a className="adet" href="">
                              <RxDotFilled />
                              <span className="spandet">Model-No:</span>
                              {detail.modalNum}
                            </a>
                          </li>
                          <li>
                            <a className="adet" href="">
                              <RxDotFilled />
                              <span className="spandet">Category:</span>
                              {detail.category}
                            </a>
                          </li>
                          <li>
                            <a className="adet" href="">
                              <RxDotFilled />
                              <span className="spandet">Brand:</span>
                              {detail.brand}
                            </a>
                          </li>

                          <li>
                            <a className="adet" href="">
                              <RxDotFilled />
                              <span className="spandet">Color:</span>
                              {detail.colour}
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <hr />
                      <div className="product-tag-area mt-15">
                        <div className="product_info">
                          <span className="sku_wrapper">
                            <span className="title spandet">SKU:</span>
                            <span className="adet">{detail.skuNum}</span>
                          </span>
                          <span className="posted_in">
                            <span className="title spandet">Supplier:</span>
                            <a href="#" className="adet">
                              {detail.supplier}
                            </a>
                           
                          </span>
                          <span className="tagged_as">
                            <span className="title  spandet">Weight:</span>
                            <a href="#" className="adet">
                              {detail.weight}
                            </a>
                           
                          </span>
                        </div>
                      </div> */}
                      <div class="cart-option mb-15">
                                <div class="product-quantity">
                              
                                </div>
                                <a href="" class="cart-btn"  onClick={()=>dispatch(setShow(["true", id]))}>Enquire Now</a>
                            </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          {/* <div className="col-xl-6">
        <div className="product__details-nav d-sm-flex align-items-start">
          <ul className="nav nav-tabs flex-sm-column justify-content-between" id="productThumbTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="thumbOne-tab" data-bs-toggle="tab" data-bs-target="#thumbOne" type="button" role="tab" aria-controls="thumbOne" aria-selected="true">
                <img src="assets/img/product/nav/product-nav-1.jpg" alt />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="thumbTwo-tab" data-bs-toggle="tab" data-bs-target="#thumbTwo" type="button" role="tab" aria-controls="thumbTwo" aria-selected="false">
                <img src="assets/img/product/nav/product-nav-2.jpg" alt />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="thumbThree-tab" data-bs-toggle="tab" data-bs-target="#thumbThree" type="button" role="tab" aria-controls="thumbThree" aria-selected="false">
                <img src="assets/img/product/nav/product-nav-3.jpg" alt />
              </button>
            </li>
          </ul>
          <div className="product__details-thumb">
            <div className="tab-content" id="productThumbContent">
              <div className="tab-pane fade show active" id="thumbOne" role="tabpanel" aria-labelledby="thumbOne-tab">
                <div className="product__details-nav-thumb w-img">
                  <img src="assets/img/product/nav/product-nav-big-1.jpg" alt />
                </div>
              </div>
              <div className="tab-pane fade" id="thumbTwo" role="tabpanel" aria-labelledby="thumbTwo-tab">
                <div className="product__details-nav-thumb w-img">
                  <img src="assets/img/product/nav/product-nav-big-3.jpg" alt />
                </div>
              </div>
              <div className="tab-pane fade" id="thumbThree" role="tabpanel" aria-labelledby="thumbThree-tab">
                <div className="product__details-nav-thumb w-img">
                  <img src="assets/img/product/nav/product-nav-big-2.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="product__details-content">
          <h6>Samsung Galaxy A12, 32GB, Black – (Locked)</h6>
          <div className="pd-rating mb-10">
            <ul className="rating">
              <li><a href="#"><i className="fal fa-star" /></a></li>
              <li><a href="#"><i className="fal fa-star" /></a></li>
              <li><a href="#"><i className="fal fa-star" /></a></li>
              <li><a href="#"><i className="fal fa-star" /></a></li>
              <li><a href="#"><i className="fal fa-star" /></a></li>
            </ul>
            <span>(01 review)</span>
            <span><a href="#">Add your review</a></span>
          </div>
          <div className="price mb-10">
            <span>$216.00</span>
          </div>
          <div className="features-des mb-20 mt-10">
            <ul>
              <li><a href="product-details.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
              <li><a href="product-details.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
              <li><a href="product-details.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
              <li><a href="product-details.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
            </ul>
          </div>
          <div className="product-stock mb-20">
            <h5>Availability: <span> 940 in stock</span></h5>
          </div>
          <div className="cart-option mb-15">
            <div className="product-quantity mr-20">
              <div className="cart-plus-minus p-relative"><input type="text" defaultValue={1} /><div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
            </div>
            <a href="cart.html" className="cart-btn">Add to Cart</a>
          </div>
          <div className="details-meta">
            <div className="d-meta-left">
              <div className="dm-item mr-20">
                <a href="#"><i className="fal fa-heart" />Add to wishlist</a>
              </div>
              <div className="dm-item">
                <a href="#"><i className="fal fa-layer-group" />Compare</a>
              </div>
            </div>
            <div className="d-meta-left">
              <div className="dm-item">
                <a href="#"><i className="fal fa-share-alt" />Share</a>
              </div>
            </div>
          </div>
          <div className="product-tag-area mt-15">
            <div className="product_info">
              <span className="sku_wrapper">
                <span className="title">SKU:</span>
                <span className="sku">DK1002</span>
              </span>
              <span className="posted_in">
                <span className="title">Categories:</span>
                <a href="#">iPhone</a>
                <a href="#">Tablets</a>
              </span>
              <span className="tagged_as">
                <span className="title">Tags:</span>
                <a href="#">Smartphone</a>, 
                <a href="#">Tablets</a>
              </span>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
      <ProductEnquiryForm show={popup}/>
      {/* product-details-end */}
    </>
  );
};

export default ProductDetailsComponent;
