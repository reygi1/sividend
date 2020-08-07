import React from "react";
import { Link } from "react-router-dom";
import "office-ui-fabric-react/dist/css/fabric.css";
import "./Demo.css";

import demologo from "../../images/demologo.svg";
import Navigation from "../../components/Navigation";
import DemoMessage from "../../components/DemoMessage";
import DemoContainer from "../../components/Demo/DemoContainer";

const Demo = () => {
  return (
    <div className="demo-body">
      <DemoMessage />
      <div className="demo-header">
        <Link to={`/demo`}>
          <img src={demologo} alt="demologo" />
        </Link>

        <section className="homepage-demo">
          {" "}
          <Link to={`/`}>BACK TO HOMEPAGE</Link>
        </section>
      </div>
      <div className="demo-container">
        <aside>
          {" "}
          <Navigation />
        </aside>

        <div className="demo-cont">
          <DemoContainer />
        </div>
      </div>
    </div>
  );
};

export default Demo;
