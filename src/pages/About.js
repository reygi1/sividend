import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

 
const About = () => {
 
  return <div> 
<h1 style={{textAlign: "center"}}>About Us</h1>
<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
    </div>
  </div>
</div>

</div>
}
 
export default About;