import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./main.css";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Demo from "./pages/Demo/Demo";
import Contact from "./pages/Contact";
import TermsofService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/demo" component={DemoContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  );
}

const DemoContainer = () => (
  <div className="body">
    <Route path="/demo">
      <Demo />
    </Route>
    <Footer />
  </div>
);

const DefaultContainer = () => (
  <div className="body">
    <Header />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/terms">
        <TermsofService />
      </Route>
      <Route path="/privacy">
        <PrivacyPolicy />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
