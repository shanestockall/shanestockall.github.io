import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Root from "./Root/Root.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import ContactPage from "./ContactPage/ContactPage.jsx";
import GalleryPage from "./GalleryPage/GalleryPage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={ProfilePage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/" component={Root} />
    </Switch>
  </Router>
);
