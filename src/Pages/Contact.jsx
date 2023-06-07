import React from 'react'
import ContactAllSections from '../Components/ContactAllSections'
import PageBanner from '../Components/PageBanner'

const Contact = () => {
  return (
    <>
    {/* <PageBanner background="url(assets/img/new/consliderr.jpg)" backgroundPosition="" title="" info = ""  /> */}
    <img src="assets/img/new/conta.jpg" className='w-100 resnone'/>
    <img src="assets/img/new/resconta.png" className='w-100 disnone'/>
      <ContactAllSections />
    </>
  
  )
}

export default Contact