import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetailsPage";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid";
import { ActorDetailsProps } from "../types/interfaces";

const ActorDetailsPage: React.FC = () => {
    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery<ActorDetailsProps, Error>(
        ["actor", id],
        () => getActorDetails(parseInt(id || ""))
    );

    if (isLoading) return <Spinner />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            {actor && <ActorHeader {...actor} />}
            <Grid container spacing={2} style={{ padding: "2rem" }}>
                <Grid item xs={12}>
                    {actor && <ActorDetails {...actor} />}
                </Grid>
            </Grid>
        </>
    );
};

export default ActorDetailsPage;