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
  const { ProjectTab, handleClose, AboutTab, EduTab } = useGlobalHooks();
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
          <Link href="/projects">
            <ListItem>
              <ListItemButton
                onClick={() => {
                  ProjectTab();
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <FaFolder style={{ fontSize: "32px" }} />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <ListItem>
            <ListItemButton
              onClick={() => {
                EduTab();
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
                AboutTab();
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
