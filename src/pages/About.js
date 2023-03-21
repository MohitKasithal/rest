import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import abt3 from "../images/abt3.jpg";
function About() {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${abt3})`,
          backgroundSize: "cover",
          filter: "brightness(70%)",
          width: "100%",
        }}>
        <Stack sx={{ width: { xs: "auto", md: 900 }, margin: "auto" }}>
          <Box
            sx={{
              textAlign: "center",
              // height: { xs: "auto", sm: "91vh" },
              color: "black",
              fontSize: { xs: "auto", sm: 20 },
              padding: 1,
              fontWeight: 700,
              paddingTop: 5,
            }}>
            <Typography
              variant="h3"
              sx={{ color: "green", fontWeight: "bold" }}>
              ABOUT US!
            </Typography>
            <br />
            <Typography
              variant="h5"
              sx={{
                color: "green",
                fontWeight: "bold",
                textDecoration: "underline",
              }}>
              Our Mission
            </Typography>
            <br />
            <br />
            <p>
              A good restaurant mission statement clearly defines your
              restaurant's goals. It also explains why your restaurant exists,
              and what makes it different. This will typically relate to the
              dining experience, how you will ensure absolute guest satisfaction
              or broader issues like the environment,
            </p>
            <br />

            <Typography
              variant="h5"
              sx={{
                color: "green",
                fontWeight: "bold",
                textDecoration: "underline",
              }}>
              History!
            </Typography>
            <br />
            <p>
              A good restaurant mission statement clearly defines your
              restaurant's goals. It also explains why your restaurant exists,
              and what makes it different. This will typically relate to the
              dining experience, how you will ensure absolute guest satisfaction
              or broader issues like the environment,
            </p>
            <br />
            <p>
              Every day, before dawn, without fail, each store begins to grind
              up soybeans, roll out the dough for the oven baked bun and light
              the stoves to begin frying the deep fried crullers. Over the years
              the weary individuals working the grave yard shifts, the
              foreigners visiting LA, and those getting ready to go to work stop
              by our restaurants to enjoy hot, freshly ground soy milk, made to
              order dishes such as fried daikon cake and egg crepes or our many
              styles of rice rolls, filling up their stomachs and their hearts.
              We take pride in the faces of our satisfied customers leaving the
              restaurant after having taken respite from their busy lives to
              truly enjoy a traditional meal reminding them of our cultural
              heritage.
            </p>
            <br />
            <p>
              To remain true to our customers, we have forgone the use of a
              centralized kitchen like many restaurants we see that prepares
              semi-ready foods only to be heated up and served to their
              customers. We honor the customers by providing them with the
              freshest, most delicious, and authentic meal experience possible.
            </p>
            <br />

            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Thanks for visiting....
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Footer />
    </>
  );
}

export default About;
