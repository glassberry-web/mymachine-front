import React from 'react'
import PageBanner from '../Components/PageBanner'
import BlogDetail from '../Components/BlogDetail'
import { Link, useLocation } from 'react-router-dom';

const Blog_detail = () => {
    const location = useLocation();
    const { namee } = location.state;
  return (
   <>
   <PageBanner background="black" title={namee} info = "Home"  />
   <BlogDetail />
   </>
  )
}

export default Blog_detail