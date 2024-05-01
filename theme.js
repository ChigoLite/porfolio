"use client";
import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#9999ff",
      light: "#9f9fe2",
      dark: "#1c1c47",
      contrastText: "#c0c0d4",
    },
    secondary: {
      main: "#e7bb78",
      light: "#e7d8c2",
      dark: "#362915",
      contrastText: "#eeece8",
    },
  },
});

export default Theme;
