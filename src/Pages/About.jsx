import React from 'react'
import Abouthero from '../Components/Abouthero'
import Aboutteam from '../Components/Aboutteam'
import PageBanner from '../Components/PageBanner'

const About = () => {
  return (
    <>
    <PageBanner title="About" info = "Home"  />
    <Abouthero />
    <Aboutteam />
    </>
  )
}

export default About