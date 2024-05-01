import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGlobalHooks } from "../context";
import styles from "./home.module.css";

import Developer from "./developer";
import Education from "../education";
import Projects from "./projects";
import Footer from "./footer";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,

  maxHeight: "300px",
  overflow: "scroll",
};
const style2 = {
  position: "absolute",
  top: 0,
  left: 0,
  // transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  maxWidth: "100%",

  bgcolor: "background.paper",
  overflow: "scroll",
};

export default function ModalComponent({}) {
  const { open, developer, education, projects, toggleScreen } =
    useGlobalHooks();
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={toggleScreen ? style : style2}>
          {developer && <Developer />}
          {education && <Education />}
          {projects && <Projects />}
          <Footer />
        </Box>
      </Modal>
    </div>
  );
}
