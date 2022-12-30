import { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'components/Service/fetchData';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';


export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const [movies, setMovies] = useState([]);
  const [ query, setQuery] = useState(productName)
  const [loader, setLoader] = useState(false);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };


useEffect(() => {
    if ( query === '') {
        return
    }

        const fetchData = async () => {
            setLoader(true)
            try {
              const data = await getMovieByQuery(query);
              setMovies([...data]);
            } catch (error) {
              console.log(error);
            } finally {
                setLoader(false)
            }
          };
          fetchData();
},[query])

const onHandleSubmit = e => {
    setQuery(productName)
}

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onHandleSubmit(e);
        }}
      >
        <input
          onChange={(e) => updateQueryString(e.target.value)}
          value={productName}
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
