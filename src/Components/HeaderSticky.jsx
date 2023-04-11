import React from 'react'

const HeaderSticky = () => {
  return (
   <>
 {/* Header Responsive */}
<div className="header-fixed d-lg-none">
  <div className="blog-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 pt-2 pb-2 text-center">
          <img src="assets/image/slider/category.png" />
          <h6 className="text-light pt-1">Categories</h6>
        </div>
        <div className="col-3 pt-2 pb-2 text-center">
          <img src="assets/image/slider/brandicon.png" />
          <h6 className="text-light pt-1">Brands</h6>
        </div>
        <div className="col-3 pt-2 pb-2 text-center">
          <img src="assets/image/slider/laundry.png" />
          <h6 className="text-light pt-1">Machines</h6>
        </div>
        <div className="col-3 pt-2 pb-2 text-center">
          <img src="assets/image/slider/form.png" />
          <a data-bs-toggle="modal" data-bs-target="#mymodal"><h6 className="text-light pt-1">Enquiry</h6></a>
        </div>              
      </div>
    </div>
  </div> 
</div>
{/* Header Responsive */}


   </>
  )
}

export default HeaderSticky