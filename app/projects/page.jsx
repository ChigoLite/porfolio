import {
  Container,
  Box,
  Stack,
  Chip,
  Paper,
  Grid,
  Fab,
  Typography,
} from "@mui/material";
import { ProjectsInfo } from "@/Components/home/projectInfo";

const Projects = () => {
  return (
    <>
      <div className="">
        <div className="info">
          <p className="info_name">my projects</p>
          <p className="info_text1">
            I'm excited to share my project with you, a labor of love that
            showcase my skills and passion.
          </p>
        </div>
      </div>
      <Box className="landingpage">
        <Container>
          {ProjectsInfo.map((project) => {
            return (
              <Paper sx={{ marginTop: 3 }} key={project.name}>
                <a className="projectLink" href={project.link}>
                  {project.name}
                </a>
                <p style={{ paddingLeft: 4, marginTop: 3 }}>
                  {project.category}
                </p>
                <Grid container rowSpacing={1} columnGap={2}>
                  {project.language.map((lang) => {
                    return (
                      <Grid key={lang} xs={4} sm={4} md={3}>
                        <Chip key={lang} label={lang} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Paper>
            );
          })}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              textTransform: "capitalize",
              marginTop: "12px",
            }}
          >
            <Fab variant="extended" color="primary">
              <a href="https://github.com/ChigoLite/">
                <Typography
                  sx={{ fontFamily: "sans_BoldItalic", color: "white" }}
                >
                  Check Github
                </Typography>
              </a>
            </Fab>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Projects;
