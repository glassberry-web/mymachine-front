import React from 'react'

const Application_detailcontent = (props) => {
    const {HTML} = props
  return (
    <>
    <span dangerouslySetInnerHTML={{ __html: HTML}} className="product__details-des-wrapper">   
</span> 
    </>
  )
}

export default Application_detailcontent