import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DOMPurify from 'isomorphic-dompurify';
import moment from 'moment'
import BlogContent from './BlogContent';
import {RiAdminFill} from "react-icons/ri"
import {FaCalendar} from "react-icons/fa"
import LatestBlog from './LatestBlog';

const BlogDetail = () => {
    const [data, setData] = useState([])
    const location = useLocation();
    const { id } = location.state;
    console.log("additipon=>", id);
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
  <div className="news-detalis-area mt-70">
  <div className="container containrblog">
    <div className="row">
        
      <div className="col-xl-12 col-lg-12 text-center">
        {
         data.map((blogtype)=>(
            id === blogtype._id ? (
        <div className="">
            <div className="news-thumb">
            <img src={blogtype.blog_bannerimage} alt="blog" className="img-fluid" />
          </div>
          <ul className="blog-meta mt-20 mb-20">
           
            <li><a href="#"><RiAdminFill className="custom-icon" />{blogtype.Publish_By}</a></li>
            <li><a href="#"><FaCalendar className="custom-icon" />{moment(`${blogtype.Publish_Date }`).format("Do MMMM YYYY")}</a></li>
          </ul>         
          
          <div>
            <BlogContent HTML = {
            DOMPurify.sanitize(blogtype.blog_content) }/> 
          </div>
          
         
         
         
        </div> 
        ):""))}  
             
           
      </div>   
      
         <LatestBlog />
      
    </div>
  </div>
</div>

   </>
  )
}

export default BlogDetail