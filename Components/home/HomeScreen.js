import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import logo from "./assets/logo2.png";
import project from "./assets/project.jpg";
import man from "./assets/man.png";
import educationpng from "./assets/education.png";
import email from "./assets/email-us.png";
import styles from "./home.module.css";
import Modal from "./modal";
import myLogo from "../../Components/frontpage/assets/logo.jpeg";
import { useGlobalHooks } from "../context";
const HomeScreen = () => {
  const {
    handleOpenAbout,
    handleOpenDeveloper,
    handleOpenEducation,
    handleOpenProject,
  } = useGlobalHooks();
  return (
    <>
      <Modal />
      <div>
        <span>
          <Image src={myLogo} width={80} />
        </span>
      </div>
      <main className="icon_container">
        <Box sx={{ flexGrow: 1, margin: 0, marginTop: "10px" }}>
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Box sx={{ width: "100% ", marginLeft: 2, marginTop: 5 }}>
                <Grid container spacing={6}>
                  <Grid item xs={6} md={6} onClick={handleOpenProject}>
                    <div className={styles.icon_avatar}>
                      <Image src={project} alt="projects" width={80} />
                    </div>
                  </Grid>
                  <Grid item xs={6} md={6} onClick={handleOpenDeveloper}>
                    <div className={styles.icon_avatar}>
                      <Image src={man} alt="user" width={60} />
                    </div>
                  </Grid>
                  <Grid item xs={6} md={6} onClick={handleOpenEducation}>
                    <div className={styles.icon_avatar}>
                      <Image src={educationpng} alt="education" width={80} />
                    </div>
                  </Grid>
                  <Grid item xs={6} md={6} onClick={handleOpenAbout}>
                    <div className={styles.icon_avatar}>
                      <Image src={email} alt="contact us" width={100} />
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6} md={8}>
              <div className="icon_banner">
                <Image src={logo} width={400} />
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default HomeScreen;
