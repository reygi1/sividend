import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './Demo.css';

import Navigation from '../../components/Navigation';

const Demo = () => {
 
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm1 ms-xl1">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl11">
          <div className="ms-Grid-row">
a
          </div>
          <div className="ms-Grid-row">

          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Demo;