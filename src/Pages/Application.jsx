import React from 'react'
import ApplicationComponent from '../Components/ApplicationComponent'
import PageBanner from '../Components/PageBanner'

const Application = () => {
  return (
    <>
    <PageBanner title="Application" info = "Home" />
    <ApplicationComponent />
    </>
  )
}

export default Application