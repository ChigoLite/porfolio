import React from "react";
import styles from "./home.module.css";
import { Typography, Box, Stack } from "@mui/material";
import { FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#e7d8c2",
          width: "100%",
          left: 0,
          bottom: 0,
          marginTop: 6,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontFamily: "sans_Bold", textAlign: "center" }}
        >
          {" "}
          Let's Connect
        </Typography>
        <Stack direction="row">
          <a className="link_cont" href="#">
            <FaFacebook className="link" />
          </a>

          <a className="link_cont" href="#">
            <FaTwitter className="link" />
          </a>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
