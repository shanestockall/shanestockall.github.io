import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// React icons
import { FaTwitter, FaInstagram} from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import IntroPortrait from './IntroPortrait.jsx';

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Hi, I'm Shane.</h2>
              <IntroPortrait />
              <h4>
                My first exposure to photography was in college, where I took a course on film photography.
                After learning the ins and outs of a camera on manual mode, I decided to pick up a small Canon Rebel and began photographing my surroundings. 
                From there, a fun way to pass time turned into a hobby and then into a passion. 
                Throughout my foray into photography, I've built up experience photographing people, couples, events, landscapes, and just about anything I found in my apartment.
                If you like my style and want to collaborate - reach out! 
              </h4>
              <Button href='mailto:shanestockall@gmail.com' target='_blank' justIcon link className={classes.margin5}>
                <GrMail/>
              </Button>
              <Button href='https://www.instagram.com/shanestockall' target='_blank' justIcon link className={classes.margin5}>
                <FaInstagram/>
              </Button>
              <Button href='https://www.twitter.com/shanestockall' target='_blank' justIcon link className={classes.margin5}>
                <FaTwitter/>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
