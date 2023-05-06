import React from 'react'
import CompaniesComponent from '../Components/CompaniesComponent'
import PageBanner from '../Components/PageBanner'

const Companies = () => {
  return (
    <>
     <PageBanner background="url(assets/img/new/companies.jpg)" title="Companies" info = "Home" />
    <CompaniesComponent />
    </>
   
  )
}

export default Companies