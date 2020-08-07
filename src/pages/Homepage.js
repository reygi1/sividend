import React from 'react'
import {Link} from "react-router-dom"

import '../main.css'


import hero from '../images/hero_image.svg'
import icon1 from '../images/trend.svg'
import demoview from '../images/demov.GIF'
import nyse from '../images/nyse.svg'
import idea from '../images/idea.svg'
import cloud from '../images/cloud.svg'
import nasdaq from '../images/nasdaq.svg'

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
       <ul className="ul-blue">
         <li>
           <img src={icon1} alt="icon 1" id="icc11"/>
           <p>Get accurate financial data for more than 6,000 tickers. Everything you need is in our dashboard. Sentiment Analysis, Financials, Market Data and Charts.
           </p>
         </li>
         <li>
           <img src={idea} alt="icon 2"/>
           <p>Validate your trading ideas from our indicators. Get updated data every 24 hours on each ticker from our proprietary Sentiment Algorithm.
           </p>
         </li>
         <li>
           <img src={cloud} alt="icon 3"/>
           <p>You have everything in our platform. No need to download anything. The software is hosted on our website, check the demo to try it now.
           </p>
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
     <h2>We have over 6,000 stocks from the two biggest exchanges in the world</h2>
     <ul>
       <li>
         <img src={nyse} id="nyse" alt="nyse"/>
       </li>
       <li>
         <img src={nasdaq} id="nasdaq" alt="nasdaq"/>
       </li>
     </ul>
      </div>
   </div>
   </div>
    );
}

export default Homepage