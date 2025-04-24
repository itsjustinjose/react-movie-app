import React from "react";
import { useQuery } from "react-query";
import PageTemplate from '../components/templateMovieListPage';
import { getPopularMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavourites from "../components/cardIcons/addToFavourites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { BaseMovieProps } from "../types/interfaces";

const PopularMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<BaseMovieProps[], Error>(
    'popularMovies',
    getPopularMovies,
    {
      staleTime: 5 * 60 * 1000, // 5 minutes cache
      cacheTime: 60 * 60 * 1000, // 1 hour cache
    }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  const movies = data || [];

  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie: BaseMovieProps) => {
        return (
          <>
            <AddToFavourites {...movie} />
            <AddToPlaylistIcon {...movie} />
          </>
        );
      }}
    />
  );
};

export default PopularMoviesPage;