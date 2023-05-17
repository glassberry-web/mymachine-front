import React from 'react'
import ContactAllSections from '../Components/ContactAllSections'
import PageBanner from '../Components/PageBanner'

const Contact = () => {
  return (
    <>
    {/* <PageBanner background="url(assets/img/new/consliderr.jpg)" backgroundPosition="" title="" info = ""  /> */}
    <img src="assets/img/new/conslider.jpg" className='w-100'/>
      <ContactAllSections />
    </>
  
  )
}

export default Contact