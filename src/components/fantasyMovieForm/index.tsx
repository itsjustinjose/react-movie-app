import React from "react";
import { FantasyMovie, CastMember } from "../../types/interfaces";
import { TextField, Button, Grid, Paper, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface FantasyMovieFormProps {
  formData: FantasyMovie;
  setFormData: React.Dispatch<React.SetStateAction<FantasyMovie>>;
  onSubmit: (e: React.FormEvent) => void;
}

const FantasyMovieForm: React.FC<FantasyMovieFormProps> = ({ 
  formData, 
  setFormData,
  onSubmit
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCastChange = (index: number, field: keyof CastMember, value: string) => {
    setFormData(prev => {
      const newCast = [...prev.cast];
      newCast[index] = { ...newCast[index], [field]: value };
      return { ...prev, cast: newCast };
    });
  };

  const addCastMember = () => {
    setFormData(prev => ({
      ...prev,
      cast: [...prev.cast, { name: "", role: "", description: "" }]
    }));
  };

  const removeCastMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      cast: prev.cast.filter((_, i) => i !== index)
    }));
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          {/* Basic Movie Info */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Overview"
              name="overview"
              value={formData.overview}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Fantasy-Specific Fields */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Genre"
              name="genre"
              value={formData.magicSystem}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Release Date"
              name="releaseDate"
              value={formData.mythicalCreatures.join(",")}
              onChange={(e) => {
                const creatures = e.target.value.split(",").map(c => c.trim());
                setFormData(prev => ({ ...prev, mythicalCreatures: creatures }));
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Run Time"
              name="runTIme"
              value={formData.magicSystem}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Production Company"
              name="productionCompanyg"
              value={formData.mythicalCreatures.join(",")}
              onChange={(e) => {
                const creatures = e.target.value.split(",").map(c => c.trim());
                setFormData(prev => ({ ...prev, mythicalCreatures: creatures }));
              }}
            />
          </Grid>


          {/* Cast Members */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Cast Members
            </Typography>
            {formData.cast.map((member, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={member.name}
                    onChange={(e) => handleCastChange(index, "name", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="Role"
                    value={member.role}
                    onChange={(e) => handleCastChange(index, "role", e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Description"
                    value={member.description}
                    onChange={(e) => handleCastChange(index, "description", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  <IconButton onClick={() => removeCastMember(index)}>
                    <RemoveIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button 
              startIcon={<AddIcon />} 
              onClick={addCastMember}
              variant="outlined"
            >
              Add Cast Member
            </Button>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              fullWidth
              size="large"
            >
              Create Fantasy Movie
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FantasyMovieForm;