import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import logo from "./assets/logo2.png";
import project from "./assets/project.jpg";
import man from "./assets/man.png";
import education from "./assets/education.png";
import email from "./assets/email-us.png";

const Icon = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <main className="icon_container">
        <Box sx={{ flexGrow: 1, margin: 0 }}>
          <h1>ChigoLite</h1>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <Box sx={{ width: "100% ", marginLeft: 3, marginTop: 8 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <div className="icon_avater">
                        <Image src={project} alt="projects" width={80} />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <div className="icon_avater">
                        <Image src={man} alt="user" width={80} />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <div className="icon_avater">
                        <Image src={education} alt="education" width={80} />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>
                      <div className="icon_avater">
                        <Image src={email} alt="contact us" width={100} />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>hello</Item>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Item>hello</Item>
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

export default Icon;
