import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

import logow from "../images/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <Link to={`/`}>
            <img src={logow} className="logow" alt="logow" />
          </Link>
          <hr />
          <ul className="footer-links">
            <li>
              <Link to={`/terms`}>Terms of Service</Link>
            </li>
            <li>
              <Link to={`/privacy`}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contacts</Link>
            </li>
          </ul>
          <p>© 2020 Sividend. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
