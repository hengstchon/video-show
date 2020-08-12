import React, { useState, useEffect } from "react";
import { Container, useMediaQuery, CssBaseline } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";

import Navigation from "./Navigation";
import Content from "./Content";
import ScrollTop from "./ScrollTop";

export default () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: indigo[700]
      },
      secondary: {
        main: orange[700]
      }
    }
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: indigo[300]
      },
      secondary: {
        main: orange[300]
      }
    }
  });

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <Navigation
          darkMode={darkMode}
          handleClickDarkMode={handleClickDarkMode}
        />
        <Content />
      </Container>
      <ScrollTop />
    </ThemeProvider>
  );
};
