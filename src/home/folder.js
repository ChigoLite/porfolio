import { FolderSpecialRounded, VerifiedUserSharp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const folder = () => {
  return (
    <div className="folderCont">
      <div className="folders">
        <div>
          <FolderSpecialRounded color="primary" />
          <h4>projects</h4>
        </div>
        <div>
          <h4>skills</h4>
        </div>
        <div>
          <VerifiedUserSharp />
          <h4>about</h4>
        </div>
        <div>
          <h4>contacts</h4>
        </div>
        <div>
          <h4>education</h4>
        </div>
        <div>
          <h4>bio</h4>
        </div>
      </div>
    </div>
  );
};

export default folder;
