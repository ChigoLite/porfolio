import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Box sx={{ width: "100%", marginTop: "12px", background: "#9999ff" }}>
        <Container>
          <Box
            className="contactBox"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              alignSelf: "center",
              position: "relative",
            }}
          >
            <Box>
              <Typography
                className="contactName"
                gutterButtom
                sx={{
                  color: "black",
                  fontFamily: "sans_bold",
                }}
              >
                Contact
              </Typography>
              <div className="contacts">
                <div>
                  <a href="#">GitHub</a>
                </div>
                <div>
                  <a href={`mailto:chrystnelson@gmail.com`}>Email</a>
                </div>
                <div>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </Box>
            <Box
              className="pages"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box className="general">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans_bold",
                    marginTop: "12px",
                  }}
                >
                  General
                </Typography>
                <div>
                  <Link href="/projects">Projects</Link>
                </div>
                <div>
                  <Link href="/">Home</Link>
                </div>
                <div>
                  <Link href="/experience">Experience</Link>
                </div>
              </Box>
              <Box className="projects">
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "sans_bold",
                    marginTop: "12px",
                  }}
                >
                  Projects
                </Typography>
                <Typography component="div">
                  <a href="#">Chat-up</a>
                </Typography>
                <Typography component="div">
                  <a href="#">Learner-x</a>
                </Typography>
                <Typography component="div">
                  <a href="#">Best Vendor</a>
                </Typography>
                <Typography component="div">
                  <a href="#">Ken;s Art</a>
                </Typography>
                <Typography component="div">
                  <a href="#">Viral Blog</a>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              color="inherit"
              variant="h5"
              sx={{
                textAlign: "center",
                textTransform: "capitalize",
                fontFamily: "sans_BoltItalic",
              }}
            >
              made with <span style={{ color: "red" }}> ❤ </span> by cornelius
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
