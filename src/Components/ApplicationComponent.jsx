import React from 'react'
import { Link } from 'react-router-dom';

const ApplicationComponent = () => {
  return (
    <>
      {/* news-detalis-area-start */}
      <div className="blog-area mt-75 mb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                <div className="col-xl-3">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <Link to="/gymEquipment">
                          <img src="assets/image/app2.png" alt />
                        </Link>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <Link to="/gymEquipment">Gym Equipment</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href>
                          <img src="assets/image/app3.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href>Furniture</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href>
                          <img src="assets/image/automobile.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href>Automobile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href="#">
                          <img src="assets/image/process.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href="#">Process Equipment</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 mt-20">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href>
                          <img src="assets/image/agriculture.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href>Agricultural</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 mt-20">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href>
                          <img src="assets/image/textile.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href>Textile</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 mt-20">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href>
                          <img src="assets/image/chemical.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href>Chemical process</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 mt-20">
                  <div className="single-smblog mb-30">
                    <div className="smblog-thum">
                      <div className="blog-image w-img">
                        <a href>
                          <img src="assets/image/semi.png" alt />
                        </a>
                      </div>
                      <div className="blog-tag blog-tag-2">
                        <a href>Semiconductor</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news-detalis-area-end  */}
    </>
  );
}

export default ApplicationComponent