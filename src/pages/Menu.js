import React from "react";
import Footer from "../component/Footer";
import menuBack from "../images/menuBack.jpg";
import { menuList } from "../data";
import Header from "../component/Header";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
function Menu() {
  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${menuBack})`,
          backgroundSize: "cover",
          filter: "brightness(70%)",
        }}>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {menuList.map((menu) => (
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px", backgroundSize: "cover" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href={`${menu.recipe}`}
                    target={"_blank"}
                    size="small">
                    Recipe
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Menu;
