import React from 'react';
import { MovieInfo } from './MovieInfo';
import film from '../../../data/Film.json';

const MovieList = () => {
  return (
    <div className="movie">
      {film.map((movie, index) => (
        <MovieInfo key={index} title={movie.Title} imageUrl={movie.Images[0]} />
      ))}
    </div>
  );
}

export default MovieList;