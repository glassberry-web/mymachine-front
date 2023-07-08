import React, { useEffect, useState } from "react";

import { getAllProducts, setSearchTerm , getsearch } from "../Redux/products/productSlice";
import { filterProducts, filterUniqueProducts } from "../Redux/products/FilteredProductslice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link,  useParams, useLocation } from "react-router-dom";
//  import { getAllFilters } from "../Redux/products/FilteredProductslice";
 import { setCategoryFilter } from "../Redux/products/filterSlice";
import { TiThList } from "react-icons/ti";
import { BsFillGridFill } from "react-icons/bs";
import { getgridView } from "../Redux/products/FilteredProductslice";
import { setGrid_view } from "../Redux/products/FilteredProductslice";
import { FaRegEye } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import ProductEnquiryForm from "./ProductEnquiryForm";
import SearchEnquiryForm from "./SearchEnquiryForm";
import { setShow, getpopup } from "../Redux/products/PopupSlice";
import { setSearchShow, getSearchpopup, getAllSearchpopup } from "../Redux/products/SearchPopupSlice";



const SearchResult = ()=>{
  const location = useLocation();
  const debounceSearchTerm = location.state;
  console.log("debounce=>", debounceSearchTerm);
  const searchpopup = useSelector(getSearchpopup);

  const gridview = useSelector(getgridView);
  const [filterTags, setFilterTags] = useState([])
  
  
   const categories =[
    "Engraving Machine", "Fiber leaser cutting machines", "Lease Welding machine", "Sheet metal foaming", "Lease Hardining"
   ]

   const dispatch = useDispatch();
  //  const category = useSelector((state) => state.filters.category);
   const { price, rating, discount, category } = useSelector(state => state.filters)

   const [Values, setCheckedvalues] = useState([]);

  const handleChange = (e) => {
    const {value,checked} = e.target;
    if(checked){
      setCheckedvalues(pre=>[...pre, value]);
    }
   
  };
  

//   useEffect(()=>{
//     const fetchFilters = async ()=>{
//       const res = await axios.get("http://194.31.53.145/api/fetch")
//       .catch((error)=>{
// console.log("err=>", error);
//       });
//       dispatch(filterProducts(res.data))
//     } 
//     fetchFilters();  
//   },[])
 
  
  const products = useSelector(getAllProducts);
  const searchTerm = useSelector(getsearch);
  console.log("searchhi=>", debounceSearchTerm)
  console.log("products==>", products);
  let proarray = Object.values(products);
  console.log("searchh=>", proarray)
  const filteredProducts = proarray.filter(item => 
    item.brand.toLowerCase().includes(debounceSearchTerm.toLowerCase()) ||
    item.product_name.toLowerCase().includes(debounceSearchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(debounceSearchTerm.toLowerCase()) ||
    item.subCategory.toLowerCase().includes(debounceSearchTerm.toLowerCase()) 
  );
  console.log("serfil=>", filteredProducts);
  // dispatch(setSearchTerm(filteredProducts))
  // const filters = useSelector(getAllFilters);
  // console.log("selector==>", filters)
  // let proarray = Object.values(products);

  
  // const filteredDATA = filters.filter((node) =>
  //   filterTags.length > 0
      // ? filterTags.every((filterTag) =>
  //         node.category.includes(filterTag)
  //       )
  //     : filters
  // )
  
  // const filterHandler = (event) => {
  //   if (event.target.checked) {
  //     setFilterTags([...filterTags, event.target.value])
  //   } else {
  //     setFilterTags(
  //       filterTags.filter((filterTag) => filterTag !== event.target.value)
  //     )
  //   }
  // }

  // filter by category

  // const handleFilterCategory = (category) => {
  //   const filterCategory = proarray?.filter(product => product.category === category)
  //   console.log("filtercategory", filterCategory);
  //   dispatch(setCategoryFilter(filterCategory))
  // }
  // filters by category
 

  let renderProducts = "";

  renderProducts = gridview ? (
    filteredProducts.length > 0 ?( filteredProducts.map((product, index) => (
    <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 machine-mb">
                  <div className="product__item product__item-d proalign">
                    <div className="product__thumb fix fix-height">
                      <div className="product-image w-img">
                      <Link to={`/productDetails/${product.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${product._id}`, namee:`${product.product_name}`}}>
                    {/* <img className='pimg' src={`http://15.207.31.23:5001/${product.image}`} alt="product"  /> */}
                    <img className='pimg' src={product.image} alt={product.product_name}  />
                  </Link>
                      </div>
                     
                    </div>
                    <div className="product__content-3">
                      <h6><Link to={`/productDetails/${product.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${product._id}`, namee:`${product.product_name}`}}>{product.product_name}</Link></h6>
                      
                    </div>
                    <div className="product__add-cart-s text-center btnflex">
                    <Link to={`/productDetails/${product.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${product._id}`, namee:`${product.product_name}`}}
                  
                  className="cart-btn-31 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                   
                  
                >
                 Get Details
                </Link>
                      <button type="button" className=" cart-btn-31 cart-btn d-flex  align-items-center justify-content-center w-100"
                       onClick={()=>dispatch(setSearchShow(["true", index]))}
                      >
                        enquire now
                      </button>
                    </div>
                  </div>
                </div>
    ))) : <>
        <div className="sorryflex">
          <img src="../assets/image/sorry.png" alt="404 not found" />
          <div className="srycon">
            <h3 className="sryh3">Sorry, no results found!</h3>
            <p className="sryp">Please check the spelling or try searching for something else</p>
          </div>
        </div>
    </>) :  (
    filteredProducts.length > 0 ? ( filteredProducts.map((product, index) => (
    <div key={index} className="row align-items-center">
    <div className="col-xl-9">
    <div className="single-features-item single-features-item-df b-radius mb-20">
      <div className="row  g-0 align-items-center">
        <div className="col-md-4">
          <div className="features-thum">
            <div className="features-product-image w-img">
              <Link to={`/productDetails/${product.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${product._id}`, namee:`${product.product_name}`}}>
                <img className="pimg" src={product.image} alt={product.product_name} />
              </Link>
            </div>
           
          </div>
        </div>
        <div className="col-md-8">
          <div className="product__content product__content-d">
            <h6 className="textleft proh1">
            <Link to={`/productDetails/${product.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${product._id}`, namee:`${product.product_name}`}}>
                {product.product_name}</Link>
            </h6>
           
            <div className="features-des">
              <ul>
              <li>
                  <a href="">
                    <RxDotFilled/> <span>Model-No:</span>{product.modalNum}
                  </a>
                </li>
                <li>
                  <a href="">
                    <RxDotFilled /><span>Category:</span>{product.category}
                  </a>
                </li>
                <li>
                  <a href="">
                    <RxDotFilled /><span>Brand:</span>{product.brand}
                  </a>
                </li>
               
                <li>
                  <a href="">
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
 
   <div className="stock-btn ">
   <Link to={`/productDetails/${product.product_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${product._id}`, namee:`${product.product_name}`}}
                  
                  className="cart-btn product-modal-sidebar-open-btn mb-20 d-flex align-items-center justify-content-center w-100"
                   
                  
                >
                 Get Details
                </Link>
     <button
       type="button"
       className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
       onClick={()=>dispatch(setSearchShow(["true", index]))}
     >
       enquire now
     </button>
   </div>
  </div>
 </div>
  ))):  <>
  <div className="sorryflex">
    <img src="../assets/image/sorry.png" alt="404 not found" />
    <div className="srycon">
      <h3 className="sryh3">Sorry, no results found!</h3>
      <p className="sryp">Please check the spelling or try searching for something else</p>
    </div>
  </div>
</>)
  // proarray && proarray ?.filter((pro)=> pro.category <= filters.category).map((product, index) => (
  //   <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                 <div className="product__item product__item-d">
  //                   <div className="product__thumb fix fix-height">
  //                     <div className="product-image w-img">
  //                       <a href="">
  //                         <img src={product.image} alt="product" />
  //                       </a>
  //                     </div>
  //                     <div className="product-action">
  //                       <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                         <i className="fal fa-eye" />
  //                         <i className="fal fa-eye" />
  //                       </a>
  //                       <a href="#" className="icon-box icon-box-1">
  //                         <i className="fal fa-heart" />
  //                         <i className="fal fa-heart" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                   <div className="product__content-3">
  //                     <h6><a href="">{product.product_name}</a></h6>
                      
  //                   </div>
  //                   <div className="product__add-cart-s text-center">
  //                     <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                       enquire now
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  // ))
  // (category.length < 0 ) ? (
  //  proarray.map((product, index) => (
  //     <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                   <div className="product__item product__item-d">
  //                     <div className="product__thumb fix fix-height">
  //                       <div className="product-image w-img">
  //                         <a href="">
  //                           <img src={product.image} alt="product" />
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
  //                       <h6><a href="">{product.product_name}</a></h6>
                        
  //                     </div>
  //                     <div className="product__add-cart-s text-center">
  //                       <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                         enquire now
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //   ))
  // ): (
  //   category.map((product, index) => (
  //     <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                   <div className="product__item product__item-d">
  //                     <div className="product__thumb fix fix-height">
  //                       <div className="product-image w-img">
  //                         <a href="">
  //                           <img src={product.image} alt="product" />
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
  //                       <h6><a href="" className="a40">{product.product_name}</a></h6>
                        
  //                     </div>
  //                     <div className="product__add-cart-s text-center">
  //                       <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                         enquire now
  //                       </button>
  //                     </div>
  //                   </div>
  //     </div>
  //   ))
  // );
    // ):(
    //     (product.length > 0) && product.map((product, index) => (
    //   <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
    //                 <div className="product__item product__item-d">
    //                   <div className="product__thumb fix">
    //                     <div className="product-image w-img">
    //                       <a href="">
    //                         <img src={product.image} alt="product" />
    //                       </a>
    //                     </div>
    //                     <div className="product-action">
    //                       <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
    //                         <i className="fal fa-eye" />
    //                         <i className="fal fa-eye" />
    //                       </a>
    //                       <a href="#" className="icon-box icon-box-1">
    //                         <i className="fal fa-heart" />
    //                         <i className="fal fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="product__content-3">
    //                     <h6><a href="">{product.product_name}</a></h6>
                        
    //                   </div>
    //                   <div className="product__add-cart-s text-center">
    //                     <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
    //                       enquire now
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    // ))
    // )
  
    return(
        <>
        <div className="shop-area mb-20 mt-40">
    <div className="container">
      <div className="row"> 
       
        
        <div className="col-xl-12 col-lg-8">  
        {   renderProducts.length  > 0 &&        
          <div className="product-lists-top">
            <div className="product__filter-wrap resnone">
              <div className="row align-items-center">
                <div className="col-xxl-10 col-xl-6 col-lg-6 col-md-6">
                  <div className="product__filter d-sm-flex align-items-center">
                    <div className="product__col">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button  onClick={() => dispatch(setGrid_view(true))}
                                className={gridview ? "nav-link active" : "nav-link"}  id="FourCol-tab" data-bs-toggle="tab" data-bs-target="#FourCol" type="button" role="tab" aria-controls="FourCol" aria-selected="true">
                             <BsFillGridFill /> 
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button   onClick={() => dispatch(setGrid_view(false))}
                                className={gridview ? "nav-link" : "nav-link active"}  id="FiveCol-tab" data-bs-toggle="tab" data-bs-target="#FiveCol" type="button" role="tab" aria-controls="FiveCol" aria-selected="false">
                          <TiThList />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="product__result pl-60" style={{margin:"0 auto"}}>
                      
                   
                    <p className="paradec"><span className="spandec">{renderProducts.length}</span> products are found</p>
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </div>
}
          <div className="tab-content" id="productGridTabContent">
            <div className="tab-pane fade  show active" id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
              <div className="tp-wrapper">
                <div className="row g-0">
                  {
                    renderProducts
                  }
                 
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="FiveCol" role="tabpanel" aria-labelledby="FiveCol-tab">
              <div className="tp-wrapper-2">
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-1.jpg" alt /></a>
                              </div>
                              <div className="product__offer">
                                <span className="discount">-15%</span>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">HMC Machines</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$220.00 - <del> $240.00</del></h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-2.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">Moulding Machines</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$216.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-3.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">Laser Cutting Machine</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$125.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-4.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">Imported Wooden Felt Cushion Chair</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$160.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-5.jpg" alt /></a>
                              </div>
                              <div className="product__offer">
                                <span className="discount">-15%</span>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">Sunhouse Decorative Lights – Imported</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$125.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-6.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">Korea Stainless Steel Pot Set 5 Piecs</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$99</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-7.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">HP Stainless Steel Hot Water Bottle</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$125.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href=""><img src="assets/img/product/sm-8.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="">The North Face Womens Resolve 2 Jack</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href=""><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href=""><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$140.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  {/* <ProductEnquiryForm show={popup} /> */}
  <SearchEnquiryForm show={searchpopup}  debouceSearchTerm={debounceSearchTerm}/>
        </>
    )
}
export default SearchResult
