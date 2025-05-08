import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TVSeriesProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';

const styles = {
  card: { 
    maxWidth: 345, 
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)'
    }
  },
  media: { 
    height: 500,
    objectFit: 'cover'
  },
  content: {
    padding: '16px',
    height: '100%'
  }
};

interface TVSeriesCardProps {
  tvSeries: TVSeriesProps;
}

const TVSeriesCard: React.FC<TVSeriesCardProps> = (props) => {
  const { tvSeries } = props;

  return (
    <Card sx={styles.card}>
      <Link to={`/tv/${tvSeries.id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          sx={styles.media}
          image={
            tvSeries.poster_path
              ? `https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`
              : img
          }
          title={tvSeries.name}
          component="img"
        />
        <CardContent sx={styles.content}>
          <Typography variant="h5" component="h2" gutterBottom>
            {tvSeries.name}
          </Typography>
          <Typography variant="subtitle1" component="p" color="text.secondary">
            {tvSeries.first_air_date && new Date(tvSeries.first_air_date).getFullYear()}
          </Typography>
          <Typography variant="subtitle2" component="p" sx={{ mt: 1 }}>
            Rating: {tvSeries.vote_average.toFixed(1)}/10
          </Typography>
          {tvSeries.overview && (
            <Typography 
              variant="body2" 
              component="p" 
              sx={{ 
                mt: 2,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {tvSeries.overview}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export default TVSeriesCard;