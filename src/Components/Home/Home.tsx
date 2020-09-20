import React from "react";
import Header from "./Components/Header.jsx";
import {
  createStyles,
  withStyles,
  Box,
  Button,
} from "@material-ui/core";

const styles = (Theme) => createStyles({
  root: {
    width: "100vw",
    height: "100vh",
    "@global": {
      scrollBehaviour: "smooth",
      "*::-webkit-scrollbar": {
        width: "10px !important",
      },
      "*::-webkit-scrollbar-thumb": {
        background: "linear-gradient(#108dc7, #ef8e38)",
        borderRadius: "5px",
      },
    },
  },
  container: {
    height: "100vh",
    overflow: "auto",
    background:
      "linear-gradient(217deg, rgba(30, 171, 215,.8), rgba(30, 171, 215,0) 70.71%),linear-gradient(127deg, rgba(242, 103, 31,.8), rgba(242, 103, 31,0) 70.71%),linear-gradient(336deg, rgba(242, 103, 31,.8), rgba(242, 103, 31,0) 70.71%);",
  },
});



const HomePage = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
        </Box>
        <Header />
      </div>
    </div>
  );
};

export default withStyles(styles)(HomePage);