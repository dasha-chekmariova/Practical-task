import React from 'react';
import { MovieInfo } from './MovieInfo';
import films from '../../../data/Films.json';

const MovieList = () => {
  return (
    <div className="movie">
      {films.map((movie, index) => (
        <MovieInfo key={index} title={movie.Title} imageUrl={movie.Images[0]} />
      ))}
    </div>
  );
}

export default MovieList;