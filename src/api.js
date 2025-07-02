import axios from 'axios';

const APIKEY = '######';
const URL = 'http://www.omdbapi.com/' 

export const fetchPopularMovie = async () => {
  try {
    const response = await axios.get(`${URL}/?apikey=${APIKEY}&s=iron man`);
    // For debugging
    if (response.data.Search){
      return response.data.Search; // Return movie list
    }
    else{
      return []
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
const fetchSearchMovie = async (queary) => {
  console.log("queary in search api :"+queary)
  try {
    const response = await axios.get(`${URL}/?apikey=${APIKEY}&s=${queary}`);
    // For debugging
    console.log("queary in search api :"+queary)
    if (response.data.Search){
      return response.data.Search; // Return movie list
    }
    else{
      return []
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
 export default fetchPopularMovie ;
 export { fetchSearchMovie };
