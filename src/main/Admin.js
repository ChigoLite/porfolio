import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useGlobalHooks } from "../utils/context";
const Admin = () => {
  const { handleAdmin } = useGlobalHooks();
  return (
    <div className="adminOverlay">
      <div className="adminCont">
        <div className="closenav" onClick={handleAdmin}>
          <CloseOutlinedIcon fontSize="large" />
        </div>
        <h2>Adminn</h2>
      </div>
    </div>
  );
};

export default Admin;
