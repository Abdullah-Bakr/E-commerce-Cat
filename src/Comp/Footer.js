import React from "react";
import "../scss/comp/footer.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const copydate = new Date();
  return (
    <div className="footer">
      <div className="container">
        <div className="contains">
          <div>
            <p>
              © Copyright {copydate.getFullYear()} Bella - All Rights Reserved
            </p>
          </div>
          <div className="communication">
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
