import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useLocation} from  "react-router-dom"

import {FaCalendar} from "react-icons/fa"
import moment from 'moment'
const LatestBlog = () => {
    const [data, setData] = useState([])
    const location = useLocation();
    const currentBlogId = location.state?.id;
  
    const fetchData = () => {
        // fetch("https://api.mymachinestore.in/api/latestblog")
        fetch("https://api.mymachinestore.in/latestblog")
      
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(data => {
            const filteredData = data.filter(blog => blog._id !== currentBlogId);
            setData(filteredData);
          })
      }
      
      useEffect(() => {
        fetchData()
      }, [currentBlogId])
  return (
    <>
    <div className="col-xl-12 col-lg-12">
        <div className="news-sidebar pl-10">
          <div className="row">
            
            <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title smb">Related Blogs</h6>
                <div className="n-sidebar-feed">
                  <div className='row'>
                  {
                             data.map((blogtype)=>(
                  <div className="col-xl-4" key={blogtype._id}>
                                <div className="single-smblog mb-30">
                                    <div className="smblog-thum">
                                        <div className="blog-image w-img">
                                            <Link to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}><img src={blogtype.blog_image} alt={blogtype.blog_name} /></Link>
                                        </div>
                                        {/* <div className="blog-tag blog-tag-2">
                                            <Link to={blogtype.link}>{blogtype.type}</Link>
                                        </div> */}
                                    </div>
                                    <div className="smblog-content smblog-content-3">
                                    <h6><Link to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}>{blogtype.blog_name}</Link></h6>
                                       
                                        <div className="smblog-foot pt-15">
                                            <div className="post-readmore">
                                            <Link className='blogbtn' to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}> Read More <span className="icon"></span></Link>
                                            </div>
                                            <div className="post-date date">
                                            <Link to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}><FaCalendar className="custom-icon1" /> {moment(`${blogtype.Publish_Date }`).format('MMMM DD, YYYY')}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                   </div> 
                      ))
                    }  
                  </div>
                </div>
              </div>
            </div>        
           
            
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestBlog