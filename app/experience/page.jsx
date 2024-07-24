import { WorkEx } from "@/Components/home/workEx";
import { Container, Paper } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="homepage">
        <div className="info">
          <p className="info_name">Work Experience</p>
          <p className="info_text1">Detailed Work Experience.</p>
        </div>
      </div>
      <div className="landingpage">
        <Container>
          <Paper>
            <WorkEx />
          </Paper>
          <Paper>
            <h3 className="info_name">Frontend Developer at Crisabem Tech</h3>
            <p className="info_text1">
              During my IT as frontend developer at Crisabem Tech, I:
            </p>
            <ul style={{ marginTop: "24px" }}>
              <li>
                Developed responsive and dynamic user interfaces using React.
              </li>
              <li>
                Utilized MUI and TailwindCSS for modern and efficient UI
                designs.
              </li>
              <li>
                Integrated applications with backend services using RESTful
                APIs.
              </li>
              <li>
                Worked with Next.js for server-side rendering and static site
                generation.
              </li>
              <li>
                Collaborated with designers to ensure seamless user experience.
              </li>
              <li>
                Maintained code quality through code reviews and best practices.
              </li>
              <li>Implemented state management using Redux.</li>
              <li>
                Explored React Native for cross-platform mobile application
                development.
              </li>
            </ul>
          </Paper>
          <Paper>
            <div>
              <h3 className="info_name">Technical Skills</h3>
              <p className="info_text1">
                I am proficient with the following technologies:
              </p>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native (Beginner)</li>
                <li>MUI</li>
                <li>TailwindCSS</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Next.js</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Socket.IO</li>
                <li>AWS (Beginner)</li>
                <li>Docker</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Page;
