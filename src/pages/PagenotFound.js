import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import menuBack from "../images/menuBack.jpg";
import { Link } from "react-router-dom";
function PagenotFound() {
  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${menuBack})`,
          backgroundSize: "cover",
          filter: "brightness(50%)",
        }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack
            flexDirection={"column"}
            gap={1}
            justifyContent={"center"}
            alignItems={"center"}
            height="95vh">
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: "100px", color: "yellow" }}
            />

            <Typography
              sx={{ color: "black", borderBottom: "2px solid black" }}>
              Page not found
            </Typography>
            <Link to={"/"}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "green",
                  fontFamily: " 'Rampart One', cursive",
                  "&:hover": { backgroundColor: "#333" },
                }}>
                {" "}
                back to home
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
}

export default PagenotFound;
