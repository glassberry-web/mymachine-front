import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
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
                  <h4>About The Store</h4>
                </div>
                <div className="footer__widget-content">
                  <p className="footer-text mb-35">Our mission statement is to provide the absolute best customer experience available in the  industry without exception.</p>
                  <div className="footer__widget-title mb-20">
                    <h4>Follow Us</h4>
                  </div>
                  <div className="cta-social">
                    <div className="social-icon">
                      <a href className="facebook"><FaFacebookF/></a>
                      <a href className="twitter"><FaTwitter/></a>
                      <a href className="youtube"><FaYoutube/></a>
                      <a href className="linkedin"><FaLinkedinIn/></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-md-1">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h4>Customer Service</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><a href>Help Center</a></li>
                      <li><a href>Contact Us</a></li>
                      <li><a href>Report Abuse</a></li>
                      <li><a href>Submit a Dispute</a></li>
                      <li><a href>Policies &amp; Rules</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 offset-md-1">
              <div className="footer__widget text-left">
                <div className="footer__widget-title">
                  <h4>Quick Links</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><Link to='/about'>About Us</Link></li>
                      <li><a href>Career</a></li>
                      <li><a href>Contact Us</a></li>
                      <li><a href>FAQs</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h4>My Account</h4>
                </div>
                <div className="footer__widget-content">
                  <div className="footer__link">
                    <ul>
                      <li><a href="#">Product Support</a></li>
                      <li><a href="#">Compare</a></li>
                      <li><a href="#">Terms &amp; Conditions &amp;</a></li>
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