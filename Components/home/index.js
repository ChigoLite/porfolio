import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Main = () => {
  const navItems = ["Home", "About", "Contact"];
  return (
    <div className="homepage">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MUI
            </Typography>
            <Box>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="info">
        <p className="info_name">
          hi, I'm <span>aka cornelius</span> , a software enginner.
        </p>
        <p className="info_text1">
          passionate about creating software solution and operations.
        </p>
        <p className="info_text2">explore my portfolio to see my work.</p>
        hello world
      </div>
    </div>
  );
};

export default Main;
