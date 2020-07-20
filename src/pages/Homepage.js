import React from 'react'
import {Link} from "react-router-dom"

import '../main.css'


import hero from '../images/hero_image.svg'
import icon1 from '../images/trend.svg'
import demoview from '../images/demov.GIF'
import nyse from '../images/nyse.svg'

const Homepage = () => {
    return (<div>
        <div className="container">
      <img src={hero} alt="hero graphic" className="heroimg" />
       <h1>Sentiment Analysis For Individual Traders</h1>
       <p className="subhead">Get the latest Sentiment Analysis of Stocks from Financial News, Markets and Social Media.</p>

       <Link to={`/demo`}><button className="button-demo">LIVE DEMO</button></Link> 
     
    </div>
    <div className="blue-container">
     <div className="container">
       <ul>
         <li>
           <img src={icon1} alt="icon 1"/>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </li>
         <li>
           <img src={icon1} alt="icon 2"/>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </li>
         <li>
           <img src={icon1} alt="icon 3"/>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         </li>
       </ul>

     </div>
   </div>
   <div className="container">
   <div className="demoContainer">
     <h2>Live Demo</h2>
     <img src={demoview} alt="demoview"/>
   </div>
   </div>

   <div className="gray-container">
     <div className="container">
       <div className="democta">
          <h2>View our live demo now!</h2>
          <Link to={`/demo`}className="cta2">LIVE DEMO</Link>
        </div>
       </div> 

   </div>
   <div className="container">
   <div className="imgcont">
     <h2>We have over 2,000 stocks in the Database from more than 100 stock exhanges</h2>
     <ul>
       <li>
         <img src={nyse} alt="nyse"/>
       </li>
       <li>
         <img src={nyse} alt="nyse2"/>
       </li>
       <li>
         <img src={nyse} alt="nyse2"/>
       </li>
       <li>
         <img src={nyse} alt="nyse2"/>
       </li>
     </ul>
      </div>
   </div>
   </div>
    );
}

export default Homepage