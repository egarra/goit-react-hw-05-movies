import { MovieListItem } from '../MovieListItem/MovieListItem'

export const MovieList = ({movies}) => {
    return (
        <ul>
            <h2>Trending today</h2>
            {movies.map(movie => <MovieListItem movie={movie}/>)}
        </ul>
    )
}