import { Container, Box, Stack, Chip, Paper } from "@mui/material";
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
                <a className="projectLink" href="#">
                  {project.name}
                </a>
                <p style={{ paddingLeft: 4 }}>{project.category}</p>
                <Stack direction="row" spacing={2}>
                  {project.language.map((lang) => {
                    return <Chip key={lang} label={lang} />;
                  })}
                </Stack>
              </Paper>
            );
          })}
        </Container>
      </Box>
    </>
  );
};
export default Projects;
