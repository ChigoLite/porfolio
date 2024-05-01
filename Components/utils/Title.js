import { Box, Typography } from "@mui/material";
import { useGlobalHooks } from "../context";

import {
  FaTimes,
  FaBox,
  FaWindowMaximize,
  FaWindowClose,
} from "react-icons/fa";
import { IconButton } from "@mui/material";
const Title = ({ title }) => {
  const { handleCloseModal, toggleScreen, setToggleScreen } = useGlobalHooks();

  const navStyle = {
    marginRight: "32px",
  };
  //   const navStyle2 = {
  //     position: "absolute",
  //     right: 12,
  //     top: 1,
  //     width: 100,
  //     border: "1px solid #000",
  //     borderRadius: "0 0 20 0",
  //     display: "flex",
  //     justifyContent: "space-evenly",
  //   };

  return (
    <>
      <div className="titleHeader">
        <Box>
          <p className="title">{title}</p>
        </Box>
        <Box sx={!toggleScreen ? navStyle : null}>
          <IconButton onClick={() => setToggleScreen(!toggleScreen)}>
            <FaWindowMaximize />
          </IconButton>
          <IconButton onClick={handleCloseModal}>
            <FaWindowClose />
          </IconButton>
        </Box>
      </div>
    </>
  );
};
export default Title;
