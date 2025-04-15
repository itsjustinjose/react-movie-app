import React from "react";
import { MovieDetailsProps } from "../../types/interfaces";
import { Chip, Paper, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import { StarRate } from "@mui/icons-material";


const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
};

const MovieDetails: React.FC<MovieDetailsProps> = (movie) => {

    return (
        <>
        <Typography variant="h5" component="h3">Overview</Typography> 

        <Typography variant="h6" component="p">{movie.overview}</Typography>

        <Paper component="ul" sx={styles.chipSet}>
            <li>
                <Chip label="Genres" sx={styles.chipLabel} color="primary"></Chip>
            </li>
            {movie.genres.map((g)=>(
                <li key={g.name}>
                    <Chip label={g.name}></Chip>
                </li>
            ))}
        </Paper>
        <Paper component="ul" sx={styles.chipSet}>
            <Chip 
            icon={<AccessTimeIcon/>} 
            label={`${movie.runtime} mins`}>
            </Chip>

            <Chip 
            icon={<MonetizationIcon/>}
            label={`${movie.revenue.toLocaleString()}`}>         
            </Chip>

            <Chip 
            icon={<StarRate/>}
            label={`${movie.vote_average} (${movie.vote_count})`}>
            </Chip>

            <Chip
            label={`Reased: ${movie.release_date}`}></Chip>
        </Paper>
        </>
    );
};

export default MovieDetails;
