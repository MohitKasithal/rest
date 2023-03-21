import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "black",
          padding: { xs: 1, sm: 2 },
          color: "#fff",
        }}>
        <Box
          sx={{
            my: 1,
            "& svg": {
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}>
          <InstagramIcon sx={{ color: "pink" }} />
          <YouTubeIcon sx={{ color: "red" }} />
          <TwitterIcon color="info" />
          <GitHubIcon color="warning" />
        </Box>
        <Typography
          component={"h6"}
          variant={"h6"}
          sx={{
            color: "green",
            fontSize: { xs: "10px", sm: "20px" },
          }}>
          All rights Reserver &copy; ABCD
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
