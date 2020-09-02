import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import IntroHeader from "./Sections/IntroHeader.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Shane Stockall"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/examples/places/DSC05362.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Shane Stockall</h1>
                  <h3 className={classes.subtitle}>
                    Software developer turned photographer
                  </h3>
                  <h6>
                    Portraits | Weddings | Travel | Product
                  </h6>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <IntroHeader />
          <SectionCarousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
