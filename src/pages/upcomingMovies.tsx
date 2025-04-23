import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavourites from "../components/cardIcons/addToFavourites";

const UpcomingMovies: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<BaseMovieProps[], Error>(
    'upcomingMovies',
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data || [];

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie: BaseMovieProps) => {
        return <AddToFavourites {...movie} />;
      }}
    />
  );
};

export default UpcomingMovies;