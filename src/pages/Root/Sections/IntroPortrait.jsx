import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/shane.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.space50} />
          <div id="images">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} className={classes.marginLeft}>
                <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
              </GridItem>
            </GridContainer>
            <GridContainer />
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
