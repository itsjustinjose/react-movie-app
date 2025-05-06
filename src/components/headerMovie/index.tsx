import React from "react";
import { BaseMovieProps, MovieDetailsProps } from "../../types/interfaces";
import { IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
  root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: { backgroundColor: "rgb(255, 0, 0)" }, 
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  
  let favMovies: BaseMovieProps[] = [];
  try {
    favMovies = JSON.parse(localStorage.getItem('favourites') || "[]");
  } catch (error) {
    console.error("Error parsing favourites from localStorage", error);
  }


  const favMovie = favMovies.some((favmovie) => favmovie.id === movie.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large"/>
      </IconButton>
      
      { favMovie ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      ) : null }

      <Typography variant="h4" component="h3">
        {movie.title}{" "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="large"/>
        </a>
        <br/>
        <span>{`${movie.tagline}`}</span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large"/>
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
