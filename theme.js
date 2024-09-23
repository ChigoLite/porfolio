"use client";
import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#21897E",
      light: "#3BA99C",
      dark: "#1c1c47",
      contrastText: "69D1C5",
    },
    secondary: {
      main: "#8980F5",
      light: "#7EBCE6",
      dark: "#362915",
      contrastText: "#eeece8",
    },
    tertiary: {
      main: "#7EBCE6",
      dark: "#362915",
      contrastText: "#eeece8",
    },
  },
});

export default Theme;
