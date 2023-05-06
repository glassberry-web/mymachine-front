import React from 'react'
import ContactAllSections from '../Components/ContactAllSections'
import PageBanner from '../Components/PageBanner'

const Contact = () => {
  return (
    <>
    <PageBanner background="url(assets/img/new/p_bg2.jpg)" title="Contact" info = "Home"  />
      <ContactAllSections />
    </>
  
  )
}

export default Contact