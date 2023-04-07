import React from 'react'
import PageBanner from '../Components/PageBanner';
import ProductDetailsComponent from '../Components/ProductDetailsComponent';
import RelatedProducts from '../Components/RelatedProducts';
import TopMost from '../Components/TopMost';
import ProductAdditional from '../Components/ProductAdditional';


const ProductDetails = () => {
  
  return (
   <>
   <PageBanner title="ProductDetails" info = "Home"  />
   <ProductDetailsComponent />
   <ProductAdditional />
   {/* <RelatedProducts  /> */}
   
   </>
  )
}

export default ProductDetails