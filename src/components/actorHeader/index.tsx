import React from "react";
import Typography from "@mui/material/Typography";
import { ActorProfile } from "../../types/interfaces";

interface ActorHeaderProps extends ActorProfile {}

const ActorHeader: React.FC<ActorHeaderProps> = (props) => {
    return (
        <div>
            <Typography variant="h3" component="h1">
                {props.name}
            </Typography>
            <Typography variant="h6" component="p">
                {props.birthday} - {props.deathday || "Present"}
            </Typography>
            <Typography variant="body1" component="p">
                {props.biography}
            </Typography>
            {/* Add more details as needed */}
        </div>
    );
};

export default ActorHeader;