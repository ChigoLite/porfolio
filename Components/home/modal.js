import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGlobalHooks } from "../context";

import {
  FaTimes,
  FaBox,
  FaWindowMaximize,
  FaWindowClose,
} from "react-icons/fa";
import { IconButton } from "@mui/material";
import Developer from "./developer";
import Education from "../education";
import Projects from "./projects";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
  bgcolor: "background.paper",
  overFlow: "scroll",

  p: 4,
};

export default function ModalComponent({}) {
  const [toggleScreen, setToggleScreen] = React.useState(false);
  const { open, handleCloseModal, developer, education, projects } =
    useGlobalHooks();
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={toggleScreen ? style : style2}>
          <Box sx={toggleScreen ? navStyle2 : navStyle}>
            <IconButton onClick={() => setToggleScreen(!toggleScreen)}>
              <FaWindowMaximize />
            </IconButton>
            <IconButton onClick={handleCloseModal}>
              <FaWindowClose />
            </IconButton>
          </Box>
          {developer && <Developer />}
          {education && <Education />}
          {projects && <Projects />}
        </Box>
      </Modal>
    </div>
  );
}

const navStyle = {
  position: "absolute",
  right: "11%",
  top: 1,
  width: 100,
  border: "1px solid #000",
  borderRadius: "0 0 20 0",
  display: "flex",
  justifyContent: "space-evenly",
};
const navStyle2 = {
  position: "absolute",
  right: 12,
  top: 1,
  width: 100,
  border: "1px solid #000",
  borderRadius: "0 0 20 0",
  display: "flex",
  justifyContent: "space-evenly",
};
