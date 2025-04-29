import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails, getActorImages } from "../../api/tmdb-api";
import Spinner from "../../components/spinner";
import ActorHeader from "../../components/actorHeader";
import ActorDetails from "../../components/actorDetailsPage";
import ActorImages from "../../components/actorImages";
import Grid from "@mui/material/Grid";
import { ActorDetailsProps, ActorImagesProps } from "../types/interfaces";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams();
  const actorId = parseInt(id || "");

  const { data: actor, isLoading: isActorLoading, error: actorError } = 
    useQuery<ActorDetailsProps, Error>(
      ["actor", actorId],
      () => getActorDetails(actorId)
    );

  const { data: images, isLoading: isImagesLoading, error: imagesError } = 
    useQuery<ActorImagesProps, Error>(
      ["actorImages", actorId],
      () => getActorImages(actorId)
    );

  if (isActorLoading || isImagesLoading) return <Spinner />;

  if (actorError) return <div>Error loading actor: {actorError.message}</div>;
  if (imagesError) return <div>Error loading images: {imagesError.message}</div>;

  return (
    <>
      {actor && <ActorHeader {...actor} />}
      <Grid container spacing={2} style={{ padding: "2rem" }}>
        <Grid item xs={12} md={8}>
          {actor && <ActorDetails {...actor} />}
        </Grid>
        <Grid item xs={12} md={4}>
          {images && <ActorImages {...images} />}
        </Grid>
      </Grid>
    </>
  );
};

export default ActorDetailsPage;