import React, { useState } from 'react'
import { sectionTitleData } from "./data";
import SectionTitle from "./SectionTitle";

const HomeBlog = () => {
    const [title , SetTitle] = useState(sectionTitleData);
  return (
   <>
      <div className="blog-area pt-55 pb-45">
      <div className="container 0">        
        <SectionTitle title={title.filter((data)=> data.id === 5)} />
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b1.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">STUDER S31 Cylindrical grinding machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Adlop</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#"> Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b2.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">EX CELL O XK237 Thread rolling machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Angelia</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#">Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b3.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">Cylindrical centreless grinding machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Iqbal</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#"> Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="single-smblog mb-30">
              <div className="smblog-thum">
                <div className="blog-image blog-image-2 w-img">
                  <a href="#"><img src="assets/img/new/b4.png" alt /></a>
                </div>
                <div className="blog-tag">
                  <a href="#">New</a>
                </div>
              </div>
              <div className="smblog-content smblog-content-2">
                <h6><a href="#">WMW UPW 25x100 Thread rolling machine</a></h6>
                <span className="author mb-10">posted by <a href="#">Jenny</a></span>
                <div className="smblog-foot pt-15">
                  <div className="post-readmore">
                    <a href="#"> Read More <span className="icon" /></a>
                  </div>
                  <div className="post-date">
                    <a href="#">Jan 24, 2022</a>
                  </div>
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

export default HomeBlog