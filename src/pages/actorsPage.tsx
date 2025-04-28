import React from "react";
import { useQuery } from "react-query";
import ActorListPageTemplate from "../components/actorListPageTemplate";
import { getActorsList } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { ActorProps } from "../types/interfaces";

const ActorsPage: React.FC = () => {
    const { 
        data: actors, 
        error, 
        isLoading, 
        isError 
    } = useQuery<ActorProps[], Error>(
        "popularActors",
        getActorsList,
        {
            staleTime: 5 * 60 * 1000,
            cacheTime: 24 * 60 * 60 * 1000,
        }
    );

    if (isLoading) return <Spinner />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <ActorListPageTemplate
            title="Popular Actors"
            actors={actors || []}
        />
    );
};

export default ActorsPage;