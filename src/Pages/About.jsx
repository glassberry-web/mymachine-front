import React from 'react'
import Abouthero from '../Components/Abouthero'
import Aboutteam from '../Components/Aboutteam'
import PageBanner from '../Components/PageBanner'

const About = () => {
  return (
    <>
    <PageBanner background="url(assets/img/new/p_bg2.jpg)" title="About" info = "Home"  />
    <Abouthero />
    <Aboutteam />
    </>
  )
}

export default About