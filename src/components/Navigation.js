import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  IconButton,
  Toolbar,
  Slide,
  useScrollTrigger
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import { CATGORY } from "../config";

const useStyles = makeStyles({
  toolBar: {
    justifyContent: "space-between"
  }
});

export default ({ darkMode, handleClickDarkMode }) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <Tabs value={value} onChange={handleChange} variant="scrollable">
            {CATGORY.map(({ label, catName }) => (
              <Tab key={catName} label={label} component={Link} to={catName} />
            ))}
          </Tabs>
          <IconButton onClick={handleClickDarkMode}>
            {darkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
