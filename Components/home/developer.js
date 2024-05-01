import React from "react";

import Typography from "@mui/material/Typography";
import { Button, Paper, Container, Box } from "@mui/material";
import Title from "@/Components/utils/Title";
import developerImg from "@/Components/assets/developer.jpg";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import { useGlobalHooks } from "../context";

const Developer = () => {
  const { toggleScreen } = useGlobalHooks();

  return (
    <div>
      <Title title="developer" />
      <Container sx={{ marginTop: 10 }}>
        <Paper
          sx={{
            p: 2,
            marginTop: 5,
            margin: "auto",
            height: "auto",
            width: "auto",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={6}>
            <Grid item>
              <Image
                src={developerImg}
                width={!toggleScreen ? 300 : 150}
                height={!toggleScreen ? 300 : 150}
                objectFit="cover"
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    sx={{ fontFamily: "sans_BoldItalic" }}
                    variant="body1"
                    component="div"
                  >
                    Hey there! I'm Cornelius Chigozie, known as{" "}
                    <span
                      style={{
                        fontFamily: "sans_bold",
                        fontWeight: 600,
                        fontSize: "30px",
                        color: "#e7bb78",
                      }}
                    >
                      ChigoLite
                    </span>{" "}
                    in the coding world. As a passionate Full Stack Developer, I
                    bring a dynamic blend of creativity and technical expertise
                    to every project I undertake.{" "}
                  </Typography>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ fontFamily: "sans_Bold", textAlign: "center" }}
                  >
                    Expertise:
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ fontWeight: 600 }}
                    color="text.secondary"
                  >
                    With a focus on the MERN stack, I craft seamless web
                    applications from front to back. My proficiency spans across
                    MongoDB, Express.js, React.js, and Node.js, ensuring robust
                    and efficient solutions.
                    <br />
                    I thrive on pushing boundaries and exploring new
                    technologies. From trendy frameworks to cutting-edge tools,
                    I'm always eager to incorporate the latest advancements into
                    my projects.
                    <br />
                    No challenge is too big for me to tackle. Whether it's
                    debugging complex code or architecting scalable systems, I
                    approach each obstacle with a strategic mindset and a
                    passion for finding elegant solutions.
                    <br />I excel in team environments, fostering open
                    communication and collaboration to drive projects forward. I
                    believe in the power of teamwork to elevate ideas and
                    deliver exceptional results.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="primary" variant="contained">
                    <Typography
                      sx={{ color: "white", fontFamily: "sans_italic" }}
                    >
                      View CV
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Developer;
