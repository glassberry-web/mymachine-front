import React from 'react'
import PageBanner from '../Components/PageBanner';
import ProductDetailsComponent from '../Components/ProductDetailsComponent';
import RelatedProducts from '../Components/RelatedProducts';
import TopMost from '../Components/TopMost';
import ProductAdditional from '../Components/ProductAdditional';
import { useLocation } from 'react-router-dom';


const ProductDetails = () => {
  const location = useLocation();
  const { id, namee } = location.state; 
  console.log("productdetailmain=>", namee);
  
  return (
   <>
   <PageBanner background="url(../assets/img/new/p_bg2.jpg)" title={namee} info = "Home" />
   <ProductDetailsComponent namee = {namee} />
   <ProductAdditional />
   {/* <RelatedProducts  /> */}
   
   </>
  )
}

export default ProductDetails