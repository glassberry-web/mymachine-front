import React, { useEffect, useState } from 'react'
import { sectionTitleData } from "./data";
import SectionTitle from "./SectionTitle";
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment';

const HomeBlog = () => {
    const [title , SetTitle] = useState(sectionTitleData);
    const [data, setData] = useState([])
    const fetchData = () => {
      // fetch("https://api.mymachinestore.in/api/clientBlogList")
       fetch("https://api.mymachinestore.in/clientBlogList")
  
        .then(response => {
          console.log(response);
          return response.json()
        })
        .then(data => {
          setData(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
  return (
   <>
      <div className="blog-area pt-55 pb-45">
      <div className="container 0">        
        <SectionTitle title={title.filter((data)=> data.id === 5)} />
        <div className="row">
          {
             data.length > 0 && (data.map((blog,i) =>(
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-6">            
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <Link to={`/blog/${blog.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blog._id}`, namee:`${blog.blog_name}`}}><img src={blog.blog_image} alt={blog.name} /></Link>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2 rescen">
                <h6><Link to={`/blog/${blog.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blog._id}`, namee:`${blog.blog_name}`}}>{blog.blog_name}</Link></h6>
                <span className="author mb-10">posted by <Link to={`/blog/${blog.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blog._id}`, namee:`${blog.blog_name}`}}>{blog.Publish_By}</Link></span>
                <div className="smblog-foot pt-15 respt0">
                  <div className="post-readmore">
                  <Link to={`/blog/${blog.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blog._id}`, namee:`${blog.blog_name}`}}> Read More <span className="icon" /></Link>
                  </div>
                  <div className="post-date">
                    <Link to={`/blog/${blog.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blog._id}`, namee:`${blog.blog_name}`}}>{moment(`${blog.Publish_Date}`).format('MMMM DD, YYYY')}</Link>
                  </div>
                </div>
              </div>
            </div>       
            
          </div>
             )))
          }
          
        </div>
      </div>
    </div>
   </>
  )
}

export default HomeBlog