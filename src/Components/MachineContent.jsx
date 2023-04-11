import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillGridFill, BsListColumns } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { getpopup, setShow, getSelectedFilter, setFilterShow, getFilterpopup } from '../Redux/products/PopupSlice';
import ProductEnquiryForm from './ProductEnquiryForm'; 
 import { useSelector, useDispatch } from 'react-redux';
 

// import { getAllProducts } from "../Redux/products/productSlice";
import { getgridView } from "../Redux/products/FilteredProductslice";
import { setGrid_view } from "../Redux/products/FilteredProductslice";
import CategoryEnquiryForm from "./CategoryEnquiryForm";

const MachineContent = () => {
  const gridview = useSelector(getgridView);
  const popupp = useSelector(getpopup);
  const popup = useSelector(getFilterpopup);
  // let proarray = Object.values(products)
  // console.log("pro=>", proarray);
  // let renderProducts = "";

  // renderProducts =
  // proarray.length > 0 ? (
  //   proarray.map((product, index) => (
  //     <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                   <div className="product__item product__item-d">
  //                     <div className="product__thumb fix">
  //                       <div className="product-image w-img">
  //                         <a href="product-detail.html">
  //                           <img src={`http://localhost:5001/${product.image}`} alt="product" />
  //                         </a>
  //                       </div>
  //                       <div className="product-action">
  //                         <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                           <i className="fal fa-eye" />
  //                           <i className="fal fa-eye" />
  //                         </a>
  //                         <a href="#" className="icon-box icon-box-1">
  //                           <i className="fal fa-heart" />
  //                           <i className="fal fa-heart" />
  //                         </a>
  //                       </div>
  //                     </div>
  //                     <div className="product__content-3">
  //                       <h6><a href="product-detail.html">{product.product_name}</a></h6>

  //                     </div>
  //                     <div className="product__add-cart-s text-center">
  //                       <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                         enquire now
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //   ))
  // ) : (
  //   <div className="movies-error">
  //     <h3>{products.Error}</h3>
  //   </div>
  // );
  const [data, setData] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  useEffect(() => {
    const fetchMachine = async () => {
      const res = await axios
        .get("https://my-machine-store-restapi.onrender.com/fetch")

        .catch((error) => {
          console.log("err=>", error);
        });
      console.log("machine=>", res.data);
      setData(res.data);
    };
    fetchMachine();
  }, []);

  const machineData = Object.values(data);

  console.log("machineFetch=>", machineData);
  let uniqueCat = [...new Set(machineData.map((cat) => cat.category))];
  console.log("slideruni=>", uniqueCat);

  let uniqueBrand = [...new Set(machineData.map((brand) => brand.brand))];

  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    console.log("index", currentIndex);
    const newChecked = [...Checked];
    console.log("newchecked=>", newChecked);

    if (currentIndex === -1) {
      newChecked.push(value);
      setChecked([...newChecked]);

      console.log("newcheckedin=>", Checked);
    } else {
      newChecked.splice(currentIndex, 1);
      setChecked([...newChecked]);
      console.log("newcheckedout=>", Checked);
    }

    setChecked([...newChecked]);
    console.log("checked=>", Checked);
  };

  // const filteredDATA = machineData.filter((node) =>
  //   filterTags.length > 0
  //  filterTags.every((filterTag) =>
  //         node.category === filterTag
  //       )
  //     :  machineData
  // )
  // console.log("filtereddata" ,filteredDATA);

  // const filterHandler = (event) => {
  //   if (event.target.checked) {
  //     setFilterTags([...filterTags, event.target.value])
  //     console.log("filtertage",filterTags);
  //   } else {
  //     setFilterTags(
  //       filterTags.filter((filterTag) => filterTag !== event.target.value)
  //     )
  //   }
  // }
  const dispatch = useDispatch();
//  const filterProductsByCategory =  machineData
//   .filter(
//     (machine) =>
//       Checked.includes(machine.category)     
//   )
//   console.log("filterProductsByCategory=>",  filterProductsByCategory);
//  const filterProductsByCategoryandBrand =  machineData
//   .filter(
//     (machine) =>
//       Checked.includes(machine.category) ||
//       Checked.includes(machine.brand)
//   ) 
//   console.log("filterProductsByCategoryandBrand=>",  filterProductsByCategoryandBrand);
  let renderProducts = "";

  renderProducts = gridview ? (
    Checked.length > 0 ? (
      machineData
        .filter(
          (machine) =>
            Checked.includes(machine.category) ||
            Checked.includes(machine.brand)
        ).map((product, index)=>(
          <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="product__item product__item-d">
            <div className="product__thumb fix fix-height">
              <div className="product-image w-img">
                <a href="product-detail.html">
                  <img
                    src={`https://my-machine-store-dashboardapi.onrender.com/${product.image}`}
                    alt="product"
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
                   <FaRegEye/>
                  <FaRegEye />
                </a>
               
              </div>
            </div>
            <div className="product__content-3">
              <h6>
                <a href="product-detail.html">{product.product_name}</a>
              </h6>
            </div>
            <div className="product__add-cart-s text-center">
              <button
                type="button"
                onClick={()=>dispatch(setFilterShow(["true", index, product.category]))}
                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
              >
                enquire now
              </button>
            </div>
          </div>
        </div>
        ))
        // filterProductsByCategoryandBrand.length < 0  ?
        // filterProductsByCategory.map((product, index) => (
        //   <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        //     <div className="product__item product__item-d">
        //       <div className="product__thumb fix fix-height">
        //         <div className="product-image w-img">
        //           <a href="product-detail.html">
        //             <img
        //               src={`http://localhost:5001/${product.image}`}
        //               alt="product"
        //             />
        //           </a>
        //         </div>
        //         <div className="product-action">
        //           <a
        //             href="#"
        //             className="icon-box icon-box-1"
        //             data-bs-toggle="modal"
        //             data-bs-target="#productModalId"
        //           >
        //              <FaRegEye/>
        //             <FaRegEye />
        //           </a>
                 
        //         </div>
        //       </div>
        //       <div className="product__content-3">
        //         <h6>
        //           <a href="product-detail.html">{product.product_name}</a>
        //         </h6>
        //       </div>
        //       <div className="product__add-cart-s text-center">
        //         <button
        //           type="button"
        //           className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
        //         >
        //           enquire now
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // )):filterProductsByCategoryandBrand.map((product, index) => (
        //   <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        //     <div className="product__item product__item-d">
        //       <div className="product__thumb fix fix-height">
        //         <div className="product-image w-img">
        //           <a href="product-detail.html">
        //             <img
        //               src={`http://localhost:5001/${product.image}`}
        //               alt="product"
        //             />
        //           </a>
        //         </div>
        //         <div className="product-action">
        //           <a
        //             href="#"
        //             className="icon-box icon-box-1"
        //             data-bs-toggle="modal"
        //             data-bs-target="#productModalId"
        //           >
        //              <FaRegEye/>
        //             <FaRegEye />
        //           </a>
                 
        //         </div>
        //       </div>
        //       <div className="product__content-3">
        //         <h6>
        //           <a href="product-detail.html">{product.product_name}</a>
        //         </h6>
        //       </div>
        //       <div className="product__add-cart-s text-center">
        //         <button
        //           type="button"
        //           className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
        //         >
        //           enquire now
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // )) 
    ) : (
      machineData.map((product, index) => (
        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="product__item product__item-d">
            <div className="product__thumb fix fix-height">
              <div className="product-image w-img">
                <a href="product-detail.html">
                  <img
                    src={`https://my-machine-store-dashboardapi.onrender.com/${product.image}`}
                    alt="product"
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
                  <i className="fal fa-eye" />
                  <i className="fal fa-eye" />
                </a>
                <a href="#" className="icon-box icon-box-1">
                  <i className="fal fa-heart" />
                  <i className="fal fa-heart" />
                </a>
              </div>
            </div>
            <div className="product__content-3">
              <h6>
                <a href="product-detail.html">{product.product_name}</a>
              </h6>
            </div>
            <div className="product__add-cart-s text-center">
              <button
                type="button"
                onClick={()=>dispatch(setShow(["true", index]))}
                className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
              >
                enquire now
              </button>
            </div>
          </div>
        </div>
      ))
    )
  ) : (
    Checked.length > 0 ? (
      machineData
        .filter(
          (machine) =>
            Checked.includes(machine.category) ||
            Checked.includes(machine.brand)
        ).map((product, index)=>(
      <div key={index} className="row align-items-center">
          <div className="col-xl-9">
          <div className="single-features-item single-features-item-df b-radius mb-20">
            <div className="row  g-0 align-items-center">
              <div className="col-md-4">
                <div className="features-thum">
                  <div className="features-product-image w-img">
                    <a href="#">
                      <img src={`https://my-machine-store-dashboardapi.onrender.com/${product.image}`} alt />
                    </a>
                  </div>
                  <div className="product-action">
                    <a
                      href="#"
                      className="icon-box icon-box-1"
                      data-bs-toggle="modal"
                      data-bs-target="#productModalId"
                    >
                      <FaRegEye/>
                      <FaRegEye />
                    </a>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="product__content product__content-d">
                  <h6>
                    <a href="#">{product.product_name}</a>
                  </h6>
                 
                  <div className="features-des">
                    <ul>
                    <li>
                        <a href="product-detail.html">
                          <RxDotFilled/> <span>Model-No:</span>{product.modelnum}
                        </a>
                      </li>
                      <li>
                        <a href="product-detail.html">
                          <RxDotFilled /><span>Category:</span>{product.category}
                        </a>
                      </li>
                      <li>
                        <a href="product-detail.html">
                          <RxDotFilled /><span>Brand:</span>{product.brand}
                        </a>
                      </li>
                     
                      <li>
                        <a href="product-detail.html">
                          <RxDotFilled/><span>Color:</span>{product.colour}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
         <div className="col-xl-3">
         <div className="product-stock mb-15">
           <h5>
             Availability: <span> 940 in stock</span>
           </h5>
           <h6>$125.00</h6>
         </div>
         <div className="stock-btn ">
           <button
             type="button"
             onClick={()=>dispatch(setFilterShow(["true", index, Checked[index]]))}
             className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
           >
             enquire now
           </button>
         </div>
        </div>
       </div>
        )) 
    
  ):machineData.map((product, index)=>(
    <div key={index} className="row align-items-center">
        <div className="col-xl-9">
        <div className="single-features-item single-features-item-df b-radius mb-20">
          <div className="row  g-0 align-items-center">
            <div className="col-md-4">
              <div className="features-thum">
                <div className="features-product-image w-img">
                  <a href="#">
                    <img src={`https://my-machine-store-dashboardapi.onrender.com/${product.image}`} alt />
                  </a>
                </div>
                <div className="product-action">
                  <a
                    href="#"
                    className="icon-box icon-box-1"
                    data-bs-toggle="modal"
                    data-bs-target="#productModalId"
                  >
                    <FaRegEye/>
                    <FaRegEye />
                  </a>
                 
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="product__content product__content-d">
                <h6>
                  <a href="#">{product.product_name}</a>
                </h6>
               
                <div className="features-des">
                  <ul>
                  <li>
                      <a href="product-detail.html">
                        <RxDotFilled/> <span>Model-No:</span>{product.modalNum}
                      </a>
                    </li>
                    <li>
                      <a href="product-detail.html">
                        <RxDotFilled /><span>Category:</span>{product.category}
                      </a>
                    </li>
                    <li>
                      <a href="product-detail.html">
                        <RxDotFilled /><span>Brand:</span>{product.brand}
                      </a>
                    </li>
                   
                    <li>
                      <a href="product-detail.html">
                        <RxDotFilled/><span>Color:</span>{product.colour}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className="col-xl-3">
       <div className="product-stock mb-15">
         <h5>
           Availability: <span> 940 in stock</span>
         </h5>
         <h6>$125.00</h6>
       </div>
       <div className="stock-btn ">
         <button
           type="button"
           onClick={()=>dispatch(setShow(["true", index]))}
           className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
         >
           enquire now
         </button>
       </div>
      </div>
     </div>
      )) 
  )

  // filteredDATA.length > 0 && (
  //   filteredDATA.map((product, index) => (
  //     <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                   <div className="product__item product__item-d">
  //                     <div className="product__thumb fix fix-height">
  //                       <div className="product-image w-img">
  //                         <a href="product-detail.html">
  //                           <img src={`http://localhost:5001/${product.image}`} alt="product" />
  //                         </a>
  //                       </div>
  //                       <div className="product-action">
  //                         <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                           <i className="fal fa-eye" />
  //                           <i className="fal fa-eye" />
  //                         </a>
  //                         <a href="#" className="icon-box icon-box-1">
  //                           <i className="fal fa-heart" />
  //                           <i className="fal fa-heart" />
  //                         </a>
  //                       </div>
  //                     </div>
  //                     <div className="product__content-3">
  //                       <h6><a href="product-detail.html">{product.product_name}</a></h6>

  //                     </div>
  //                     <div className="product__add-cart-s text-center">
  //                       <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                         enquire now
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //   )))
  // ) : (
  //  machineData.map((product, index) => (
  //    <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                  <div className="product__item product__item-d">
  //                    <div className="product__thumb fix fix-height">
  //                      <div className="product-image w-img">
  //                        <a href="product-detail.html">
  //                          <img src={`http://localhost:5001/${product.image}`} alt="product" />
  //                        </a>
  //                      </div>
  //                      <div className="product-action">
  //                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                          <i className="fal fa-eye" />
  //                          <i className="fal fa-eye" />
  //                        </a>
  //                        <a href="#" className="icon-box icon-box-1">
  //                          <i className="fal fa-heart" />
  //                          <i className="fal fa-heart" />
  //                        </a>
  //                      </div>
  //                    </div>
  //                    <div className="product__content-3">
  //                      <h6><a href="product-detail.html">{product.product_name}</a></h6>

  //                    </div>
  //                    <div className="product__add-cart-s text-center">
  //                      <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                        enquire now
  //                      </button>
  //                    </div>
  //                  </div>
  //             </div>
  // ))
  //  );

  return (
    <>
      <div className="shop-area mb-20 mt-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="product-widget mb-30">
                <h5 className="pt-title">Machine categories</h5>
                <div className="widget-category-list mt-20">
                  {uniqueCat.map((category) => (
                    <div className="single-widget-category">
                      <input
                        type="checkbox"
                        id="cat-item-8"
                        checked={
                          Checked.indexOf(category) === -1 ? false : true
                        }
                        onChange={() => handleToggle(category)}
                        name="cat-item"
                      />
                      <label htmlFor="cat-item-3">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-widget mb-30">
                <h5 className="pt-title">Choose Brand</h5>
                <div className="widget-category-list mt-20">
                  {uniqueBrand.map((brand) => (
                    <div className="single-widget-category">
                      <input
                        type="checkbox"
                        id="cat-item-8"
                        checked={Checked.indexOf(brand) === -1 ? false : true}
                        onChange={() => handleToggle(brand)}
                        name="cat-item"
                      />
                      <label>{brand}</label>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="product-widget mb-30">
                <h5 className="pt-title">Special Offers</h5>
                <div className="product__sm mt-20">
                  <ul>
                    <li className="product__sm-item d-flex align-items-center">
                      <div className="product__sm-thumb mr-20">
                        <a href="product-detail.html">
                          <img src="assets/img/product/sm-1.jpg" alt />
                        </a>
                      </div>
                      <div className="product__sm-content">
                        <div className="product__sm-price">
                          <span className="price">Turret Punching Machine</span>
                        </div>
                        <h5 className="product__sm-title">
                          <a href="#">View More</a>
                        </h5>
                      </div>
                    </li>
                    <li className="product__sm-item d-flex align-items-center">
                      <div className="product__sm-thumb mr-20">
                        <a href="product-detail.html">
                          <img src="assets/img/product/sm-2.jpg" alt />
                        </a>
                      </div>
                      <div className="product__sm-content">
                        <div className="product__sm-price">
                          <span className="price">Bending Machine</span>
                        </div>
                        <h5 className="product__sm-title">
                          <a href="#">View More</a>
                        </h5>
                      </div>
                    </li>
                    <li className="product__sm-item d-flex align-items-center">
                      <div className="product__sm-thumb mr-20">
                        <a href="product-detail.html">
                          <img src="assets/img/product/sm-3.jpg" alt />
                        </a>
                      </div>
                      <div className="product__sm-content">
                        <div className="product__sm-price">
                          <span className="price">Shearing Machine</span>
                        </div>
                        <h5 className="product__sm-title">
                          <a href="#">View More</a>
                        </h5>
                      </div>
                    </li>
                    <li className="product__sm-item d-flex align-items-center">
                      <div className="product__sm-thumb mr-20">
                        <a href="product-detail.html">
                          <img src="assets/img/product/sm-4.jpg" alt />
                        </a>
                      </div>
                      <div className="product__sm-content">
                        <div className="product__sm-price">
                          <span className="price">Laser Cutting Machine</span>
                        </div>
                        <h5 className="product__sm-title">
                          <a href="#">View More</a>
                        </h5>
                      </div>
                    </li>
                    <li className="product__sm-item d-flex align-items-center">
                      <div className="product__sm-thumb mr-20">
                        <a href="product-detail.html">
                          <img src="assets/img/product/sm-5.jpg" alt />
                        </a>
                      </div>
                      <div className="product__sm-content">
                        <div className="product__sm-price">
                          <span className="price">VMC Machines</span>
                        </div>
                        <h5 className="product__sm-title">
                          <a href="#">View More</a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="shop-banner mb-30">
                <div className="banner-image">
                  <img
                    className="banner-l"
                    src="assets/image/machine/machinebanner.png"
                    alt
                  />
                </div>
              </div>
              <div className="product-lists-top">
                <div className="product__filter-wrap">
                  <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="product__filter d-sm-flex align-items-center justify-content-between">
                        <div className="product__col">
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                onClick={() => dispatch(setGrid_view(true))}
                                className={gridview ? "nav-link active" : "nav-link"}
                                id="FourCol-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#FourCol"
                                type="button"
                                role="tab"
                                aria-controls="FourCol"
                                aria-selected="true"
                              >
                                <BsFillGridFill />
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                onClick={() => dispatch(setGrid_view(false))}
                                className={gridview ? "nav-link" : "nav-link active"}
                                id="FiveCol-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#FiveCol"
                                type="button"
                                role="tab"
                                aria-controls="FiveCol"
                                aria-selected="false"
                              >
                                <TiThList />
                                {/* <BsListColumns /> */}
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product__result pl-60">
                          {/* <p>Showing 1-20 of 29 relults</p> */}
                          <p className="paradec"><span className="spandec">{renderProducts.length}</span> products are found</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="product__filter-right d-flex align-items-center justify-content-md-end">
                        <div className="product__sorting product__show-no">
                          <select>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                          </select>
                        </div>
                        <div className="product__sorting product__show-position ml-20">
                          <select>
                            <option>Latest</option>
                            <option>New</option>
                            <option>Up coming</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="productGridTabContent">
                <div
                  className="tab-pane fade  show active"
                  id="FourCol"
                  role="tabpanel"
                  aria-labelledby="FourCol-tab"
                >
                  <div className="tp-wrapper">
                    <div className="row g-0">
                      {renderProducts}
                     
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductEnquiryForm show={popupp} />
      <CategoryEnquiryForm show={popup} />
    </>
  );
};
export default MachineContent;
