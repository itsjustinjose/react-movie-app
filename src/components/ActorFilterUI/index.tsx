import React from "react";
import TextField from "@mui/material/TextField";

interface ActorFilterUIProps {
  onFilterValuesChange: (type: string, value: string) => void;
  nameFilter: string;
}

const ActorFilterUI: React.FC<ActorFilterUIProps> = ({
  onFilterValuesChange,
  nameFilter,
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterValuesChange("name", e.target.value);
  };

  return (
    <div style={{ margin: "1rem", textAlign: "center" }}>
      <TextField
        label="Search by Name"
        variant="outlined"
        value={nameFilter}
        onChange={handleTextChange}
        fullWidth
      />
    </div>
  );
};

export default ActorFilterUI;