import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import aboutim from '../images/aboutim.svg'

 
const About = () => {
 
  return <div> 
<h1 style={{textAlign: "center"}}>About Us</h1>
<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">We Provide Data For The Financial Market</h2>
        <p className="font-italic text-muted mb-4">
          We specialize in stock data for individual traders. Our interface is user-friendly and intuitive. Search for a company name or ticker and you have everything you need in a single page.
          Financial Data, Sentiment Data and Charts. We are offering a free demo on our website to show the product. The demo is just the first version of the product and doesn't include 
          every feature that we implemented.
          Our mission is to provide a simplier and friendlier interface for new traders that need data from sentiment analysis.
          </p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={aboutim} alt="" className="img-fluid mb-4 mb-lg-0" /></div>
    </div>
  </div>
</div>

</div>
}
 
export default About;