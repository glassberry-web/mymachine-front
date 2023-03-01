import React from 'react'
import { blogcon } from './data'

const BlogHero = () => {
  return (
    <>
    <div className="blog-area mt-80 mb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="row">
                           {
                             blogcon.map((blogtype)=>(
                                <div className="col-xl-4" key={blogtype.id}>
                                <div className="single-smblog mb-30">
                                    <div className="smblog-thum">
                                        <div className="blog-image w-img">
                                            <a href="blog-details.html"><img src={blogtype.image} alt="" /></a>
                                        </div>
                                        <div className="blog-tag blog-tag-2">
                                            <a href={blogtype.link}>{blogtype.type}</a>
                                        </div>
                                    </div>
                                    <div className="smblog-content smblog-content-3">
                                        <h6><a href="blog-details.html">{blogtype.title}</a></h6>
                                        <span className="author mb-10">posted by <a href="#">Adlop</a></span>
                                        <p>{blogtype.desc}</p>
                                        <div className="smblog-foot pt-15">
                                            <div className="post-readmore">
                                                <a href={blogtype.image}> Read More <span className="icon"></span></a>
                                            </div>
                                            <div className="post-date">
                                                <a href={blogtype.link}>{blogtype.date}</a>
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