
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FantasyMovie, CastMember } from "../types/interfaces";
import FantasyMovieForm from "../components/fantasyMovieForm";
import { Alert, Snackbar, Typography, Container } from "@mui/material";

const FantasyMoviePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FantasyMovie>({
    title: "",
    overview: "",
    genres: [],
    releaseDate: "",
    runtime: 0,
    productionCompanies: "",
    cast:  [] as CastMember[],
    poster: null,
    magicSystem: "",
    mythicalCreatures: [],
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real app: await createFantasyMovie(formData);
      console.log("Fantasy Movie Created:", formData);
      setSnackbarMessage("Fantasy movie created successfully!");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setSnackbarMessage("Failed to create fantasy movie");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Create Your Fantasy Movie
      </Typography>
      
      <FantasyMovieForm 
        formData={formData} 
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity={snackbarMessage.includes("success") ? "success" : "error"}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default FantasyMoviePage;