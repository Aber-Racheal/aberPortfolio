import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <h3>Racheal Aber</h3>
          <p>Nairobi, Kenya</p>
          <p>Email: rachealaberr@gmail.com</p>
          <p>Phone: +256787635823</p>
        </div>
        <div className="footer-right">
          <p>Connect with me:  </p>
          <a href='https://github.com/Aber-Racheal'><img src='/github.png' alt='icon'></img></a> <a href='https://www.behance.net/aberracheal'><img src='/behance .png' alt='icon'></img></a>
          <div className="social-icons">
            <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
         
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RachealAber Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
