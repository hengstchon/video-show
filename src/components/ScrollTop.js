import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Zoom, useScrollTrigger } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    right: theme.spacing(2),
    bottom: theme.spacing(2)
  }
}));

export default () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  return (
    <Zoom in={trigger}>
      <Fab
        size="small"
        onClick={() => window.scrollTo(0, 0)}
        color="secondary"
        className={classes.root}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};
