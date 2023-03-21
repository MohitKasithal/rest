import React from "react";
import contimg from "../images/contImg.jpg";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${contimg})`,
          backgroundSize: "cover",
          filter: "brightness(70%)",
          width: "100%",
        }}>
        <Box sx={{ height: { xs: "91vh", sm: "91vh" } }}>
          <Box
            sx={{
              p: { xs: 1, sm: 3 },
              "& h4": { fontWeight: "bold", mb: 2 },
            }}>
            <Typography variant="h4">Contact us !</Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
              beatae ducimus magni nobis culpa praesentium velit expedita quae,
              corrupti, pariatur inventore laboriosam consectetur modi impedit
              error, repudiandae obcaecati doloribus.
            </p>
          </Box>
          <Box
            sx={{
              m: 3,
              width: { xs: "auto", sm: "500px", md: 600 },
            }}>
            <TableContainer component={Paper} sx={{ bgcolor: "#333" }}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "black", color: "white" }}
                      align="center">
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ color: "#fff" }}>
                      <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                      1800-00-0000 (tollfree)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#fff" }}>
                      <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                      help@myrest.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#fff" }}>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Contact;
