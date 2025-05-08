export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface ListedMovie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;

}
export type FilterOption = "title" | "genre" | "rating";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface Review {
  id: string;
  content: string;
  author: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface Review {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  movieId: number;
}

export interface ActorProps {
  id: number;
  name: string;
  profile_path?: string;
  popularity: number;
  known_for_department: string;
  gender: number;
  known_for: {
    id: number;
    title?: string;
    name?: string;
    poster_path?: string;
    media_type: string;
  }[];
}

export interface ActorListProps {
  actors: ActorProps[];
}

export interface ActorListTemplateProps {
  title: string;
  actors: ActorProps[];
  action?: (m: ActorProps) => React.ReactNode;
}

export interface DiscoverActors {
  page: number;
  total_pages: number;
  total_results: number;
  results: ActorProps[];
}

export interface ActorProfile {
  id: number;
  imdb_id: string;
  birthday: string;
  deathday: string | null;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string | null;
  adult: boolean;
  homepage: string | null;
}

export interface ActorProfileForImages {
  id: number;
  profiles: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}

export interface ActorDetailsProps {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string | null;
  imdb_id: string;
  homepage: string | null;
  popularity: number;
  known_for_department: string;
  also_known_as: string[];
  gender: number;
}

export interface ActorImagesProps {
  profiles: {
    file_path: string;
    aspect_ratio: number;
    height: number;
    width: number;
  }[];
}

export interface ActorPageProps {
  actor: ActorDetailsProps;
  images: ActorImagesProps;
}

// src/types/interfaces.ts
export interface CastMember {
  name: string;
  role: string;
  description: string;
}

export interface FantasyMovie {
  title: string;
  overview: string;
  genres: string[];
  releaseDate: string;
  runtime: number;
  productionCompanies: string;
  cast: CastMember[];
  poster: string | null;
  magicSystem: string;
  mythicalCreatures: string[];
}

export interface TVSeriesProps {
  id: number;
  name: string;
  poster_path?: string;
  vote_average: number;
  first_air_date: string;
  overview: string;
  backdrop_path?: string;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  original_name: string;
  popularity: number;
  vote_count: number;
}

export interface TVSeriesListProps {
  tvSeries: TVSeriesProps[];
}

export interface TVSeriesListTemplateProps {
  title: string;
  tvSeries: TVSeriesProps[];
  action?: (m: TVSeriesProps) => React.ReactNode;
}

export interface DiscoverTVSeries {
  page: number;
  total_pages: number;
  total_results: number;
  results: TVSeriesProps[];
}

export interface TVSeriesDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  last_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  vote_average: number;
  vote_count: number;
  status: string;
  tagline: string;
  genres: {
    id: number;
    name: string;
  }[];
  created_by: {
    id: number;
    name: string;
    profile_path: string | null;
  }[];
  networks: {
    id: number;
    name: string;
    logo_path: string | null;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }[];
}

export interface TVSeriesImages {
  backdrops: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  posters: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  logos: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string | null;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}

export interface TVSeriesCredits {
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    character: string;
    credit_id: string;
    order: number;
  }[];
  crew: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
  }[];
}

export interface TVSeriesPageProps {
  tvSeries: TVSeriesDetails;
  images: TVSeriesImages;
  credits: TVSeriesCredits;
}

export interface SignInFormData {
  username: string;
  password: string;
}

export interface SignInResults {
  message: string;
  token: string;
}


