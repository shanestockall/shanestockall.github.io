import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import { GrMail } from "react-icons/gr";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import profile from "assets/img/faces/shane.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand="Shane Stockall"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/examples/places/DSC01151-Pano-Edit.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Shane Stockall</h3>
                      <p> Like my work and want to collaborate? Reach out on any of the following:</p>
                      <Button href='https://www.twitter.com/shanestockall' target='_blank' justIcon link className={classes.margin5}>
                        <FaTwitter/>
                      </Button>
                      <Button href='https://www.instagram.com/shanestockall' target='_blank' justIcon link className={classes.margin5}>
                        <FaInstagram/>
                      </Button>
                      <Button href='https://www.facebook.com/shane.stockall' target='_blank' justIcon link className={classes.margin5}>
                        <FaFacebook/>
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <Button href='mailto:shanestockall@gmail.com' target='_blank' justIcon link className={classes.margin5}>
                      <GrMail/>
                    </Button>
                    <Button href='https://www.linkedin.com/in/shanestockall' target='_blank' justIcon link className={classes.margin5}>
                      <FaLinkedin/>
                    </Button>
                    <Button href='https://www.github.com/shanestockall' target='_blank' justIcon link className={classes.margin5}>
                      <FaGithub/>
                    </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ContactPage);
