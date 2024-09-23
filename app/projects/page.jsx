import {
  Container,
  Box,
  Stack,
  Chip,
  Paper,
  Grid,
  Fab,
  Typography,
  Divider,
  Button,
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
        <Paper sx={{ marginTop: 3 }}>
          {ProjectsInfo.map((project) => {
            return (
              <Box key={project.name}>
                <hr />

                <a className="projectLink" href={project.link}>
                  {project.name}
                </a>
                <p style={{ paddingLeft: 4, marginTop: 3 }}>
                  {project.category}
                </p>
                <div className="langs">
                  {project.language.map((lang) => {
                    return (
                      <div key={lang}>
                        <hr />
                        <Divider>
                          <Button sx={{ display: "block" }} variant="outlined">
                            {lang}
                          </Button>
                        </Divider>
                      </div>
                    );
                  })}
                </div>
              </Box>
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
            <Button variant="contained" color="tertiary">
              <a href="https://github.com/ChigoLite/">
                <Typography
                  sx={{ fontFamily: "sans_BoldItalic", color: "white" }}
                >
                  Check Github
                </Typography>
              </a>
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default Projects;
