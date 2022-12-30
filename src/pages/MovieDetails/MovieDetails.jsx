import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../components/Service/fetchData';
import { useEffect, useState } from 'react';

import { Loader } from 'components/Loader/Loader';

import {
  Poster,
  Wrapper,
  InfoMovieBlock,
  GoBackBtn,
  Container,
  DeatailedBtn,
  BtnWrapper,
  ErrorDiv
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoader(true)
      try {
        const { poster_path, name, title, overview, genres } =
          await getMovieById(id);

        setMovieDetails({
          poster_path,
          name: name || undefined,
          title: title || undefined,
          overview,
          genresNames: genres.map(({ name }) => name + ' '),
        });
      } catch (error) {
        setError('File not Found');
      } finally {
        setLoader(false)
      }
    };
    fetchMovie();
    return () => {
      setMovieDetails({});
      setError('');
    };
  }, [id]);

  return (
    <>
      {loader && <Loader />}
      {error !== '' ? (
        <ErrorDiv>{error}</ErrorDiv>
      ) : (
        <Container>
          <GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
          <InfoMovieBlock>
            <Poster
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                  : 'https://via.placeholder.com/700?text=NoImageFound'
              }
              alt={movieDetails.name || movieDetails.title}
            />
            <Wrapper>
              <h2>{movieDetails.name || movieDetails.title || 'No info'}</h2>
              <p>Overview:</p>
              <p>{movieDetails.overview || 'Not found'}</p>
              <p>Genres:</p>
              <p>{movieDetails.genresNames || 'Not found'}</p>
            </Wrapper>
          </InfoMovieBlock>
          <BtnWrapper>
            <DeatailedBtn to={`/movies/${id}/cast`} state={{ from: backLinkHref }}>Cast</DeatailedBtn>
            <DeatailedBtn to={`/movies/${id}/reviews`} state={{ from: backLinkHref }}>Reviews</DeatailedBtn>
          </BtnWrapper>
          <Outlet />
        </Container>
      )}
    </>
  );
};
