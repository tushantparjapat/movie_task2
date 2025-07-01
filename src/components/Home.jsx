import React, { useEffect, useState } from 'react';
import Movie_card  from './Movie_card';
import  fetchPopulerMovie from '../api';
import  {fetchSearchMovie} from '../api';
export default  function Home(){
 
   const [movies , setmovie] = useState(null)
   const [Error, setError] = useState("")
   const [query, setquery] = useState("")
   
   
   const loadmovie = async() =>{
     try{
        const res = await fetchPopulerMovie();
        console.log("loadmovie run")
        setmovie(res)
      }
     catch{
      setError("Failed to load movies");
     setmovie([])
     }
   }
   const searchMovie = async() =>{
     try{
        const res = await fetchSearchMovie(query);
        console.log("search run")
        console.log("queary :"+query)
        console.log(res)
        setmovie(res)
      }
     catch{
      setError("Failed to load movies");
      setmovie([])
     }
   }
   useEffect(()=>{
    loadmovie()
   },[]

   )
 
 
 return (
    <>
  

    <h1 className='h1'>Welcome to over movie website</h1>
    <div className='searchbar'>
    <input type="text" onChange={e=>setquery(e.target.value)}/>
    <button onClick={searchMovie}>Search</button>
    
      
    </div>
   <div className="card_container">
      { 
       movies===null?(
        <h2>Loading...</h2>
       ):movies.length>0 ?(
          movies.map((movie) => (
            <Movie_card key={movie.imdbID} movie={movie} />
            )
          )
        ):
        (
          <h2>Movie not found</h2>
        )
      }
      {Error}
    </div>

    
    </>
 )


}