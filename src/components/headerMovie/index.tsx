import React from "react";
import { MovieDetailsProps } from "../../types/interfaces";
import { IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) =>{
    return (
        <Paper component="div" sx={styles.root}>
            <IconButton aria-label="go back">
                <ArrowBackIcon color="primary" fontSize="large"/>
            </IconButton>

            <Typography variant="h4" component="h3">
                {movie.title}{"  "}
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
