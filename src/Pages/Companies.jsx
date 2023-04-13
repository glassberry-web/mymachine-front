import React from 'react'
import CompaniesComponent from '../Components/CompaniesComponent'
import PageBanner from '../Components/PageBanner'

const Companies = () => {
  return (
    <>
     <PageBanner title="Companies" info = "Home" />
    <CompaniesComponent />
    </>
   
  )
}

export default Companies