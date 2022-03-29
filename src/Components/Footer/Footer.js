import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div className='footer-container-bg' id="contact">
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>About Clinic</Link>
            <Link to='/'>About Doctors</Link>
            <Link to='/photo-gallery'>Photo Gallery</Link>
            <Link to='/Faq'>FAQ</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Our services</h2>
            <Link to='/'>General Denstistry</Link>
            <Link to='/'>Cosmetics</Link>
            <Link to='/'>Surgical</Link>
            <Link to='/'>Kids Denstistry</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 className='footer-topicsname'>Videos</h2>
            <Link to='/video-gallery'>Clinic Video</Link>
            <Link to='/video-gallery'>Lab Video</Link>
            <Link to='/video-gallery'>Hospital video</Link>
            <Link to='/video-gallery'>Surgical</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact us</h2>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;9891116408</Link>
            <Link to='/'><i className="fas fa-map-marked-alt"/>&nbsp;H-520, Govindpuram<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near GDA Market<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gaziabaad</Link>
            <Link to='/'><i className="fas fa-map-marked-alt"/>&nbsp;C-120, Janakpuri,<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main Market<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gaziabaad</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='images/logo4.png' alt='logo-footer'/>
            </Link>
          </div>
          
          <small className='website-rights'><a href="https://www.softgenics.in"style={{textDecoration:'none'}}>SoftGenic@gmail.com©2022</a></small>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Footer;