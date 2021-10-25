import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import SignUp from "./components/Sign-up/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./MainRouter.css";

function MainRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default MainRouter;
