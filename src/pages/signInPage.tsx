import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import { signIn } from "../api/auth-api";
import { SignInFormData } from "../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  },
  paper: {
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  submitButton: {
    marginTop: "1rem",
    padding: "12px",
    fontWeight: "bold",
  },
};

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      await signIn(formData);
      navigate("/"); // Redirect to home after successful sign-in
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Box sx={styles.root}>
      <Paper sx={styles.paper} elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign In
        </Typography>
        
        {error && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={styles.submitButton}
          >
            Sign In
          </Button>
        </form>

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Link href="/signup" color="primary">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignInPage;