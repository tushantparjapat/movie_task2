import React from 'react';
import  '../App.css';
const Movie_card = ({ movie }) => {
  return (
    

    <div className="card" >
   <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
   <div className="card-body">
    <p className="card-text">{movie.Title}</p>
    <p className="card-text">{movie.Year}</p>
  </div>
</div>
    
  );
};

export default Movie_card;