import React from 'react';
import './MovieInfo.scss';

export const MovieInfo = ({ title, imageUrl }) => (
  <div className="movie-info">
    <h2 className='movie-title'>{title}</h2>
    <img src={imageUrl} alt={title} className='movie-img'/>
  </div>
);
