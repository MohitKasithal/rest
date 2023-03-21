import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import banner from "../images/banner.jpg";
function Home() {
  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          height: "92vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            color: "#fff",
          }}>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              fontSize: { xs: 20, sm: 35 },
              fontFamily: " 'Rampart One', cursive",
            }}>
            I WAS FOODIE...{" "}
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              fontSize: { xs: 20, sm: 35 },
              fontFamily: " 'Rampart One', cursive",
            }}>
            {" "}
            AND
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              fontSize: { xs: 20, sm: 35 },
              fontFamily: " 'Rampart One', cursive",
            }}>
            {" "}
            I CONTINUE TO BE A FOODIE
          </Typography>

          <IconButton sx={{ marginTop: 2 }}>
            <Link to={"/menu"}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "green",
                  fontFamily: " 'Rampart One', cursive",
                  "&:hover": { backgroundColor: "#333" },
                }}>
                {" "}
                Order Now
              </Button>
            </Link>
          </IconButton>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
