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
  Fab,
  Divider,
} from "@mui/material";
import Portfolio from "../assets/Portfolio.jpg";
import { FaGithub, FaLinkedin, FaLiraSign } from "react-icons/fa";
import Image from "next/image";
import { WorkEx } from "./workEx";
import { ProjectsInfo } from "./projectInfo";
import Link from "next/link";
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
        {/* <Container> */}
        <Card>
          <div className="introCont">
            <Paper>
              <CardMedia sx={{ width: 400 }} title="Aka Cornelius">
                <Box
                  sx={{
                    width: 400,
                    height: 360,
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={Portfolio}
                    width={400}
                    objectFit="cover"
                    objectPosition="contain"
                    alt="cornelius"
                    height={320}
                    layout="responsive"
                  />
                </Box>
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
                  <a href="https://github.com/ChigoLite">
                    <FaGithub style={{ fontSize: "40px", color: "black" }} />
                  </a>
                </Button>
                <Button size="large">
                  <a href="https://www.linkedin.com/in/aka-cornelius-489835252">
                    <FaLinkedin style={{ fontSize: "40px", color: "blue" }} />
                  </a>
                </Button>
              </CardActions>
            </Paper>

            <Paper
              sx={{
                display: "flex",
                alignItem: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "sans_regular",
                  padding: 5,
                  lineHeight: "32px",
                }}
              >
                Hello! I'm{" "}
                <span
                  style={{
                    color: "#9999ff",
                    fontFamily: "sans_BoldItalic",
                    fontSize: "1.5rem",
                  }}
                >
                  {" "}
                  Cornelius{" "}
                </span>
                , a passionate Fullstack Developer proficient in the MERN stack.
                Currently, I'm pursuing my studies at Enugu State University.
                Over the past few years, I've been consulted by and collaborated
                with various tech companies, successfully delivering a range of
                projects. My expertise extends to small-scale DevOps tasks,
                ensuring seamless integration and deployment. I'm committed to
                leveraging technology to create impactful and efficient
                solutions
              </Typography>
            </Paper>
          </div>
        </Card>

        <Paper>
          <h3 className="workEx">my work experience</h3>
          <WorkEx />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              textTransform: "capitalize",
              marginTop: "12px",
            }}
          >
            <Button variant="contained" size="large" color="tertiary">
              <Link href="/experience">
                <Typography
                  sx={{ fontFamily: "sans_BoldItalic", color: "white" }}
                >
                  View in Details.
                </Typography>
              </Link>
            </Button>
          </Box>
        </Paper>
        <Box>
          <Paper sx={{ paddingLeft: 3, marginTop: 3 }}>
            <h3>Highlighted Projects</h3>
            {result.map((project) => {
              return (
                <Box key={project.name}>
                  <hr />
                  <a className="projectLink" href={project.link}>
                    {project.name}
                  </a>
                  <p style={{ paddingLeft: 4 }}>{project.category}</p>
                  <div className="langs">
                    {project.language.map((lang) => {
                      return (
                        <div key={lang}>
                          <hr />
                          <Divider>
                            <Button
                              sx={{ display: "block" }}
                              variant="outlined"
                            >
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
                <Link href="/projects">
                  <Typography
                    sx={{ fontFamily: "sans_BoldItalic", color: "white" }}
                  >
                    view all projects.
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Paper>
        </Box>
        {/* </Container> */}
      </div>
    </>
  );
};

export default Landingpage;
