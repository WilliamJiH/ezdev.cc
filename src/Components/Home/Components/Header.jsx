import React from "react";
import {
  createStyles,
  withStyles,
  Button,
  Box,
} from "@material-ui/core";
import Typed from 'react-typed';

const backgroundVideo = require('../../../img/backgroundVideo.mp4');

const styles = (theme) => createStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    marginTop: "-100vh",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 10,
  },
  navBar: {
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    paddingRight: "-2vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "cneter",
  },
  navLink: {
    padding: "none",
    marginRight: "1vw",
    color: "white",
    fontSize: "1.3em",
    fontWeight: 900,
    textDecoration: "none",
    textTransform: "uppercase",
    "&:hover, &:active": {
      color: "rgba(255,215, 0 ,0.85)",
    },
  },
});


const Header = (props) => {
  const { classes } = props;
  const [pages, setSelected] = React.useState([false, false, false, false]);

  return (
    <div className={classes.root}>
      <video
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
        autoPlay
        src={backgroundVideo}
        muted
        loop
      />
      <div className={classes.content}>
        <div className={classes.navBar}>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: pages[0] ? "gold" : "default", fontFamily: "Tw Cen MT" }}
          >
            home
            </Button>
          <div className={classes.navLink}>|</div>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: pages[1] ? "gold" : "default", fontFamily: "Tw Cen MT" }}
          >
            haohua
            </Button>
          <div className={classes.navLink}>|</div>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: pages[2] ? "gold" : "default", fontFamily: "Tw Cen MT" }}
          >
            blog
            </Button>
          <div className={classes.navLink}>|</div>
          <Button
            disableRipple={true}
            className={classes.navLink}
            style={{ color: pages[3] ? "gold" : "default", fontFamily: "Tw Cen MT" }}
          >
            links
            </Button>
        </div>
        <Typed
          style={{
            marginTop: "32vh",
            color: "white",
            fontSize: "5em",
            fontWeight: "bold"
          }}
          strings={["Hello there,", "Welcome to Haohua's planet"]}
          typeSpeed={70}
          backSpeed={75}
          loop
        />
        <Box
          mt="5vh"
          width="350px"
          fontSize="1.3em"
          color="#FFFFFF"
          textAlign="center"
        >
          Every website is a planet, and this is Haohua's planet. Feel free to
          walk around and explore my planet!
          </Box>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);