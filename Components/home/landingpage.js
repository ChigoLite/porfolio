import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Paper,
  CardContent,
  CardActions,
  Button,
  Container,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import developer from "../assets/developer.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { WorkEx } from "./workEx";
import { ProjectsInfo } from "./projectInfo";
const Landingpage = () => {
  let result = ProjectsInfo.reduce((acc, user) => {
    if (user.rank >= 20) {
      acc.push(user);
    }
    return acc;
  }, []);
  return (
    <>
      <div className="landingpage">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexFlow: "column",
                }}
              >
                <CardMedia sx={{ width: 400 }} title="Aka Cornelius">
                  <Image
                    src={developer}
                    width={400}
                    objectFit="cover"
                    objectPosition="center"
                    height={300}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    sx={{ fontFamily: "sans_bold" }}
                    variant="h5"
                    component="div"
                  >
                    Aka Cornelius
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "sans_regular" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    chrystnelson@gmail.com
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">
                    <FaGithub style={{ fontSize: "40px" }} />
                  </Button>
                  <Button size="large">
                    <FaLinkedin style={{ fontSize: "40px" }} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper sx={{ width: 440 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{
                      textTransform: "Capitalize",
                      textAlign: "center",
                      fontFamily: "sans_bold",
                      fontWeight: 600,
                    }}
                  >
                    developer overview
                  </Typography>
                  <Typography sx={{ padding: 8, fontFamily: "sans_regular" }}>
                    Hello! I'm{" "}
                    <span
                      style={{
                        color: "#9999ff",
                        fontFamily: "sans_BoldItalic",
                      }}
                    >
                      {" "}
                      Cornelius{" "}
                    </span>
                    , a passionate Fullstack Developer proficient in the MERN
                    stack. Currently, I'm pursuing my studies at Enugu State
                    University. Over the past few years, I've been consulted by
                    and collaborated with various tech companies, successfully
                    delivering a range of projects. My expertise extends to
                    small-scale DevOps tasks, ensuring seamless integration and
                    deployment. I'm committed to leveraging technology to create
                    impactful and efficient solutions
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          <h3 className="workEx">my work experience</h3>
          <Paper>
            <WorkEx />
          </Paper>
          <Box>
            <h3>Highlighted Projects</h3>
            {result.map((project) => {
              return (
                <Paper key={project.name}>
                  <a className="projectLink" href="#">
                    {project.name}
                  </a>
                  <p>{project.category}</p>
                  <Box>
                    {project.language.map((lang) => {
                      return (
                        <Stack>
                          <Chip label={lang} />
                        </Stack>
                      );
                    })}
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Landingpage;
