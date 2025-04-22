import React from "react";
import { Grid } from "@mui/material";
import { BaseMovieListProps } from "../../types/interfaces";
import Movie from "../movieCard/";


const MovieList: React.FC<BaseMovieListProps> = ({movies, action}) =>{
    const movieCards = movies.map((m)=>(
        <Grid key={m.id} item xs={12} sm={4} md={4} lg={3} xl={2}>
            <Movie key={m.id} movie={m} action={action}/>
        </Grid>
    ));
    return movieCards;
}

export default MovieList;