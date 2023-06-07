import React from 'react'

const BlogContent = (props) => {
    const {HTML} = props
  return (
    <>
    <span dangerouslySetInnerHTML={{ __html: HTML}} className="news-detalis-content">   
</span> 
    </>
  )
}

export default BlogContent