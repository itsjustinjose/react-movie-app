import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  languageFilter, 
} from "../components/movieFilterUI";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Pagination from "../components/pagination";

// Filtering setup
const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const languageFiltering = {
  name: "language",
  value: "all", 
  condition: languageFilter,
};

const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["discover", currentPage],
    () => getMovies(currentPage),
    { keepPreviousData: true }
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    languageFiltering, 
  ]);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1], filterValues[2]]
        : type === "genre"
        ? [filterValues[0], changedFilter, filterValues[2]]
        : [filterValues[0], filterValues[1], changedFilter]; 
    setFilterValues(updatedFilterSet);
  };

  const movies = data?.results || [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => <AddToFavouritesIcon {...movie} />}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        languageFilter={filterValues[2].value} 
      />
      <Pagination
        currentPage={currentPage}
        totalPages={data?.total_pages || 1}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default HomePage;
