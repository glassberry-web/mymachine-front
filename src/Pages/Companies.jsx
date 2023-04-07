import React from 'react'
import CompaniesComponent from '../Components/CompaniesComponent'
import PageBanner from '../Components/PageBanner'

const Companies = () => {
  return (
    <>
     <PageBanner title="Machines" info = "Home" />
    <CompaniesComponent />
    </>
   
  )
}

export default Companies