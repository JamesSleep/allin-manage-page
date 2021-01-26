import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Company from "../Routes/Company";
import User from "../Routes/User";
import Estimate from "../Routes/Estimate";
import ShopRequest from "../Routes/ShopRequest";
import Story from "../Routes/Story";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/Company" exact component={Company} />
        <Route path="/Estimate" component={Estimate} />
        <Route path="/ShopRequest" component={ShopRequest} />
        <Route path="/Story" component={Story} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
)