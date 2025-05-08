import React, { MouseEvent, useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext"; // Use the correct ActorsContext
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ActorProps } from "../../types/interfaces"; // Ensure ActorProps is defined

const AddToActorFavouritesIcon: React.FC<ActorProps> = (actor) => {
  const context = useContext(ActorsContext);

  if (!context) {
    throw new Error("AddToActorFavouritesIcon must be used within an ActorsContextProvider");
  }

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(actor); // Add the actor to favorites
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorFavouritesIcon;