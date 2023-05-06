import React from 'react'
import ApplicationComponent from '../Components/ApplicationComponent'
import PageBanner from '../Components/PageBanner'

const Application = () => {
  return (
    <>
    <PageBanner background="url(assets/img/new/p_bg2.jpg)" title="Application" info = "Home" />
    <ApplicationComponent />
    </>
  )
}

export default Application