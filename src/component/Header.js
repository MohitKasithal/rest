import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Link } from "react-router-dom";

function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  function handleDrawerToggle() {
    setMenuOpen(!MenuOpen);
  }

  //  drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant={"h6"}
        component="div"
        sx={{ flexGrow: 1, alignItems: "center" }}>
        <RoomServiceIcon sx={{ color: "green", fontSize: 40 }} />
        <Divider />
      </Typography>
      <ul className="nav-menu-drawer">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}>
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant={"h6"}
              component="div"
              sx={{ flexGrow: 1, alignItems: "center" }}>
              <RoomServiceIcon
                sx={{ color: "green", marginTob: 0, fontSize: 40 }}
              />
              EverGreen
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={MenuOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 200,
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
}

export default Header;
