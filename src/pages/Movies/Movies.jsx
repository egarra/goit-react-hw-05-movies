import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'components/Service/fetchData';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    const fetchData = async () => {
      setLoader(true);
      try {
        const data = await getMovieByQuery(movieName);
        setMovies([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieName]);

  const onHandleSubmit = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onHandleSubmit(e.target.elements.query.value);
        }}
      >
        <input
          onChange={e => updateQueryString(e.target.value)}
          value={movieName}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search"
        />
        <button>Search</button>
      </form>
      {loader && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} link={``} />}
    </>
  );
};

export default Movies;
