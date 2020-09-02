/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="about-tooltip"
          title="Want to learn more about me? Click here!"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/about"
            className={classes.navLink}
          >
            About Me
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="gallery-tooltip"
          title="Click here to explore my work."
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/gallery"
            className={classes.navLink}
          >
            Gallery
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="contact-tooltip"
          title="Let's chat!"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="/contact"
            className={classes.navLink}
          >
            Contact
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
