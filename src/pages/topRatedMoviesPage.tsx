import React from "react";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavourites from "../components/cardIcons/addToFavourites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { BaseMovieProps } from "../types/interfaces";

const TopRatedMoviesPage: React.FC = () => {
  const { 
    data: movies, 
    error, 
    isLoading, 
    isError 
  } = useQuery<BaseMovieProps[], Error>(
    "topRatedMovies",
    getTopRatedMovies,
    {
      staleTime: 5 * 60 * 1000,  // 5 minutes cache
      cacheTime: 24 * 60 * 60 * 1000,  // 24 hours cache
    }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies || []}
      action={(movie: BaseMovieProps) => (
        <>
          <AddToFavourites {...movie} />
          <AddToPlaylistIcon {...movie} />
        </>
      )}
    />
  );
};

export default TopRatedMoviesPage;