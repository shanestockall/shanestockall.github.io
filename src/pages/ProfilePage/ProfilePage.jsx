import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Places from "@material-ui/icons/Landscape";
import Things from "@material-ui/icons/Devices";
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/shane.jpg";

import people1 from "assets/img/examples/people/DSC00424.jpg";
import people2 from "assets/img/examples/people/DSC00949.jpg";
import people3 from "assets/img/examples/people/DSC01744-Edit.jpg";
import people4 from "assets/img/examples/people/DSC04465.jpg";
import people5 from "assets/img/examples/people/DSC05921.jpg";
import people6 from "assets/img/examples/people/DSC04419.jpg";
import places1 from "assets/img/examples/places/DSC00297.jpg";
import places2 from "assets/img/examples/places/DSC00356-Edit.jpg";
import places3 from "assets/img/examples/places/DSC02995-Edit.jpg";
import places4 from "assets/img/examples/places/DSC05366.jpg";
import places5 from "assets/img/examples/places/DSC09707.jpg";
import places6 from "assets/img/examples/places/DSC06261.jpg";
import things1 from "assets/img/examples/things/DSC02510.jpg";
import things2 from "assets/img/examples/things/DSC02648.jpg";
import things3 from "assets/img/examples/things/DSC00392full.jpg";
import things4 from "assets/img/examples/things/IMG_7613.jpg";
import things5 from "assets/img/examples/things/IMG_7546.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        <Parallax small filter image={require("assets/img/examples/places/DSC05377.jpg")} />
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
                      <h6>Developer • Photographer • Human</h6>
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
              <div className={classes.description}>
                <p>
                  I'm a full-time software engineer who enjoys taking photos on the side. Below, you'll find a small sample of my work. For my full portfolio, visit my gallery.
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "People",
                        tabIcon: Person,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={people1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={people2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={people3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={people4}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={people5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={people6}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Places",
                        tabIcon: Places,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={places1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={places2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={places3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={places4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={places5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={places6}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Things",
                        tabIcon: Things,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={things1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={things2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={things3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={things4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={things5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
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

export default withStyles(profilePageStyle)(ProfilePage);
