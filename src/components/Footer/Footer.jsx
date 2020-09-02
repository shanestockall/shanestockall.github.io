/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Shane Stockall
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                className={classes.block}
              >
                About Me
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/gallery"
                className={classes.block}
              >
                Gallery
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact"
                className={classes.block}
              >
                Contact
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <a href="mailto:shanestockall@gmail.com">
            All photos and this website made by me. 
          </a>
          <p>
            Built with GatsbyJS.
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
