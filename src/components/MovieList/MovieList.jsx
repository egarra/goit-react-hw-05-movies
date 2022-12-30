import { useLocation } from 'react-router-dom';
import { MoviesList, Title, StyledLink } from './MovieList.syled';

export const MovieList = ({movies, link}) => {
  const location = useLocation()

    return (
        <MoviesList>
        <Title>Trending today</Title>
        {movies.map(({ name, title, id }) => {
          return (
            <StyledLink key={id} to={`${link + id}`} state={{ from: location }}>
              <h2>{name || title}</h2>
            </StyledLink>
          );
        })}
      </MoviesList>
    )
}