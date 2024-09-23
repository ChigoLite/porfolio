import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Box sx={{ width: "100%", marginTop: "12px", background: "#1c1c47" }}>
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
                sx={{
                  color: "black",
                  fontFamily: "sans_bold",
                  paddingTop: "12px",
                  fontSize: "1.5rem",
                }}
              >
                Contact
              </Typography>
              <div className="contacts">
                <div>
                  <a href="https://github.com/ChigoLite">GitHub</a>
                </div>
                <div>
                  <a href={`mailto:chrystnelson@gmail.com`}>Email</a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/aka-cornelius-489835252">
                    LinkedIn
                  </a>
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
                    paddingTop: "12px",
                    fontSize: "1.5rem",
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
                    paddingTop: "12px",
                    fontSize: "1.5rem",
                  }}
                >
                  Projects
                </Typography>
                <Typography component="div">
                  <a href="https://chat-up-beta.vercel.app/">Chat-up</a>
                </Typography>
                <Typography component="div">
                  <a href="https://learner-x.vercel.app/">Learner-x</a>
                </Typography>
                <Typography component="div">
                  <a href="https://e-commerce-brown-eta.vercel.app/">
                    Best Vendor
                  </a>
                </Typography>
                <Typography component="div">
                  <a href="https://ken-s-art.vercel.app/">Ken's Art</a>
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
                fontFamily: "sans_italic",
                fontSize: "12px",
                color: "white",
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
