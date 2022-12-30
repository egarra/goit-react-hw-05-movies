import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../../components/Service/fetchData';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrendingMovie();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <MovieList movies={movies} link={`movies/`}/>
  );
};
