import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment'




const BlogHero = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        // fetch("http://localhost:5000/api/clientBlogList")
         fetch("http://localhost:5000/clientBlogList")
      
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
    <div className="blog-area mt-45 mb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="row">
                           {
                             data.map((blogtype)=>(
                                <div className="col-xl-4" key={blogtype._id}>
                                <div className="single-smblog ressmblog mb-30">
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
                                        <span className="author mb-10">posted by <Link to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}>{blogtype.Publish_By|| ""}</Link></span>
                                        <p>{blogtype.blog_shortdiscription.slice(0, 150)} </p>
                                        <div className="smblog-foot pt-15">
                                            <div className="post-readmore">
                                            <Link className='blogbtn' to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}> Read More <span className="icon"></span></Link>
                                            </div>
                                            <div className="post-date">
                                            <Link to={`/blog/${blogtype.blog_name.replace(/,?\s+/g, '-').toLowerCase()}`} state={{id:`${blogtype._id}`, namee:`${blogtype.blog_name}`}}>{moment(`${blogtype.Publish_Date }`).format('MMMM DD, YYYY')}</Link>
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
    </>
  )
}

export default BlogHero