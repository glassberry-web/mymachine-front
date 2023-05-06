import React from 'react'

const PageBanner = (props) => {
    const { title, info, background} = props
  return (
    <>
     <div className="page-banner-area page-banner-height" style={{backgroundImage: background}} data-background="assets/img/new/p_bg2.jpg">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className={`page-banner-content ${title.length > 20 ? "text-start" : "text-center"}`}>
          <h1 style={{color: '#ffffff'}}>{title}</h1>
          <h6 style={{color: '#fcbe00'}}>{info} &gt; {title} </h6>
          {/*  <p>A wonderful serenity has taken possession of my entire soul, like these <br> sweet mornings of spring which I enjoy with my whole heart.</p> */}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default PageBanner