import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

const createThrottle = (callback, delay, thisArg) => {
  let lastInvokeTime = Date.now();
  const _delay = Number(delay) || 200;
  return (...args) => {
    const now = Date.now();
    if (now - _delay <= lastInvokeTime) {
      return;
    }
    lastInvokeTime = now;
    callback.call(thisArg, ...args);
  };
};

const useStyles = makeStyles({
  root: {
    position: "fixed",
    right: "3%",
    bottom: "3%",
    width: 50,
    height: 50,
    opacity: 0.8
  }
});

export default () => {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const listener = createThrottle(() => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== visible) {
        setVisible(shouldShow);
      }
    }, 500);
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [visible]);

  return (
    visible && (
      <IconButton
        color="secondary"
        className={classes.root}
        onClick={() => window.scrollTo(0, 0)}
      >
        <svg fill="currentColor" viewBox="0 0 24 24" width="100%">
          <path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"></path>
        </svg>
      </IconButton>
    )
  );
};
