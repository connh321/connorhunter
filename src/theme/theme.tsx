"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";

/**
 * Material-UI theme configuration.
 */
const theme = createTheme({
  typography: {
    fontFamily: "'Lato', Helvetica",

    button: {
      fontFamily: "'Lato', Helvetica",
      textTransform: "none",
      hover: "transparent !important",
      active: "transparent !important",
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#191f2b",
    },
    background: {
      default: "#E7E7E7",
    },
    text: {
      primary: "#191F2B",
      secondary: "#ffffff",
    },
  },
});

/**
 * Props for the ThemeRegistry component.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * ThemeRegistry component wraps the application with Material-UI ThemeProvider.
 *
 * @param {Props} props - Component props.
 * @param {React.ReactNode} props.children - The children elements to render inside the theme provider.
 * @returns {React.JSX.Element} The themed application wrapper.
 */
const ThemeRegistry = ({ children }: Props): React.JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeRegistry;
