"use client";

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
import { FaFolder, FaBook } from "react-icons/fa";
import { useGlobalHooks } from "@/Components/context";
import Link from "next/link";
const Quickaccess = () => {
  const {
    handleClose,
    handleOpenAbout,
    handleOpenProject,
    handleOpenDeveloper,
    handleOpenEducation,
  } = useGlobalHooks();
  return (
    <Box
      sx={{
        marginTop: "12px",
        width: "100%",
        maxWidth: 360,
        background: "#cccccc",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => {
                handleOpenProject();
                handleClose();
              }}
            >
              <ListItemIcon>
                <FaFolder style={{ fontSize: "32px" }} />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton
              onClick={() => {
                handleOpenEducation();
                handleClose();
              }}
            >
              <ListItemIcon>
                <FaBook style={{ fontSize: "32px" }} />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <Divider />
          <ListItem>
            <ListItemButton
              onClick={() => {
                handleOpenAbout();
                handleClose();
              }}
            >
              <ListItemAvatar>
                <Avatar>P</Avatar>
              </ListItemAvatar>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
};

export default Quickaccess;
