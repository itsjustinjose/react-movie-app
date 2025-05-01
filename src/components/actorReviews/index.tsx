import React from "react";
import { ActorDetailsProps } from "../../types/interfaces";
import Typography from "@mui/material/Typography";

const ActorReviews: React.FC<ActorDetailsProps> = (actor) => {
    return (
        <Typography variant="h5" component="p">
            Reviews for {actor.name} would appear here.
        </Typography>
    );
};

export default ActorReviews;