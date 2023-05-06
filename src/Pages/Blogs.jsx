import React from 'react'
import BlogHero from '../Components/BlogHero'
import PageBanner from '../Components/PageBanner'

const Blogs = () => {
  return (
    <>
     <PageBanner background="url(assets/img/new/p_bg2.jpg)" title="Blog" info = "Home"  />
     <BlogHero />
    </>
  )
}

export default Blogs