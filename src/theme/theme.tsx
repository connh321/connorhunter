"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";

/**
 * Material-UI theme configuration.
 */
const theme = createTheme({
  typography: {
    fontFamily: "'Lato', Helvetica",
    allVariants: {
      color: "rgba(255, 255, 255, 0.87)",
    },
    button: {
      fontFamily: "'Lato', Helvetica",
      textTransform: "none",
      hover: "transparent !important",
      active: "transparent !important",
    },
  },
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.87)",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
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
