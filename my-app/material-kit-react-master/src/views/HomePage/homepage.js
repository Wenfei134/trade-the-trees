import React from "react";
import "../../assets/css/trial.css"
import GitHub from '@material-ui/icons/GitHub';
import Language from '@material-ui/icons/Language';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MenuBook from '@material-ui/icons/MenuBook';
import Description from '@material-ui/icons/Description';
import PersonOutline from '@material-ui/icons/PersonOutline';

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
/*
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
*/
import { withStyles } from '@material-ui/core/styles';
//const useStyles = makeStyles(styles);

const StyledButton = withStyles({
    root: {
        background: "#764E28",
        borderRadius: "48px",
        marginLeft: "20px",
        padding: "10px 18px",
    }
  })(Button);

const StyleForIcon = {
    width: "60px",
    height: "60px",
    color: "#FDFE9A"
};

export default function Components(props){
    return (
        <div>
            <div class='acorns'>100 <img></img></div>
            <div><img></img></div>
            <StyledButton>
                <PersonOutline style={StyleForIcon}/>
            </StyledButton>
            <div className='character1'></div>
            <div className='menu'>
                <StyledButton>
                    <AttachMoney style={StyleForIcon}/>
                </StyledButton>
                <StyledButton>
                    <ShoppingCart style={StyleForIcon}/>
                </StyledButton>
                <StyledButton>
                    <Language style={StyleForIcon}/>
                </StyledButton>
                <StyledButton>
                    <GitHub style={StyleForIcon}/>
                </StyledButton>
                <StyledButton>
                    <MenuBook style={StyleForIcon}/>
                </StyledButton>
                <StyledButton>
                    <Description style={StyleForIcon}/>
                </StyledButton>
            </div>

        </div>
    )
};
/*
function components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
      <div>
        <Header
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Material Kit React.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
  
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
        <Footer />
      </div>
    );
  }
  



*/

