import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HeroSection() {
  return (
    // <div className="hero-container">
    //   {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
    //   <div className="hero-btns">
    //   </div>
    // </div>
    <Container className="carousel-container" maxWidth="md">
      <div>&emsp;</div>
      <div className="multi-carousel">
        <Carousel
          responsive={responsive}
          className="carousel"
          swipeable={false}
          draggable={false}
          showDots={true}
        >
          <div className="div1">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </Container>
  );
}

export default HeroSection;
