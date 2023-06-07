import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
    <div className="fotter-area bgdark">
      <div className="footer__top pt-40 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="footer__widget">
                <div className="footer__widget-title mb-20">
                  <h4>About The MyMachineStore</h4>
                </div>
                <div className="footer__widget-content">
                  <p className="footer-text mb-35">Our mission statement is to provide the absolute best customer experience available in the  industry without exception.</p>
                  <div className="footer__widget-title mb-20">
                    <h4>Follow Us</h4>
                  </div>
                  <div className="cta-social">
                    <div className="social-icon">
                      <a href ="https://www.facebook.com/mymachinestore?mibextid=ZbWKwL" target='_blank' className="facebook"><FaFacebookF/></a>
                      <a href="https://instagram.com/mymachinestore?igshid=MzNlNGNkZWQ4Mg==" target='_blank' className="twitter"><FaInstagram/></a>
                      <a href="https://www.youtube.com/@mymachinestore1875" target='_blank' className="youtube"><FaYoutube/></a>
                      <a href="https://www.linkedin.com/company/mymachinestore/" target='_blank' className="linkedin"><FaLinkedinIn/></a>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-md-1">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h4>Quick Links</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                    <li><Link to='/about'>About Us</Link></li>
                      <li><Link to="/machines" href>Machines</Link></li>
                      <li><Link to="/companies" href>Companies</Link></li>
                      <li><Link to="/blogs" href>Blogs</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-md-1">
              <div className="footer__widget text-left">
                <div className="footer__widget-title">
                  <h4>Applications</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><Link to='/gymequipment'>Gym Equipment</Link></li>
                      <li><Link to="/furniture" href>Furniture</Link></li>
                      <li><Link to="/automobile" href>Automobile</Link></li>
                      <li><Link to="/textile" href>Textile</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h4>Support</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><Link to="/contact" href="#">Product Support</Link></li>
                      <li><Link to="/compare" href="#">Compare</Link></li>
                      <li><Link to="/terms" href="#">Terms &amp; Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content pt-20 bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="copy-right-area text-center">
                  <p>Copyright © <span>My Machine Store</span> All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer