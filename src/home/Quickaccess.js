import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
const Quickaccess = () => {
  return (
    <Box
      sx={{
        marginTop: "12px",
        width: "100%",
        maxWidth: 360,
        background: "#cccccc",
      }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon fontSize="large" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>P</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
};

export default Quickaccess;
