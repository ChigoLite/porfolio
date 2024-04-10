import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  CardContent,
  Grid,
  Card,
} from "@mui/material";
import { ProjectsInfo } from "./projectInfo";
import Image from "next/image";
const Projects = () => {
  return (
    <>
      <Box
        sx={{
          background: "#9999ff",
          width: 100,
          height: 40,
          position: "absolute",
          left: 0,
          top: 1,
          color: "white",
        }}
      >
        <Typography variant="h4 " component="h2" sx={{}}>
          Projects
        </Typography>
      </Box>
      <Container>
        <Box mt={2}>
          <Box m={3} sx={{ textAlign: "center" }}>
            <p>Explore some of my personal project.</p>
          </Box>
          <Grid container spacing={2}>
            {ProjectsInfo.map((project, index) => {
              return (
                <Grid key={index} item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Paper
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Image
                          src={project.img.Lms}
                          width={160}
                          height={120}
                          objectFit="cover"
                          alt={project.name}
                        />
                        <Typography>{project.name}</Typography>
                      </Paper>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
