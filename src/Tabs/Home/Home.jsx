import { useEffect, useState } from 'react'
import { MovieList } from '../../components/MovieList/MovieList'
import { getTrendingMovie } from '../../components/Service/fetchData'


export const Home = () => {

const [movies, setMovies] = useState([])

useEffect(() => {
    const fetchMovies = async () => {
        try {
            const movies = await getTrendingMovie()
            console.log(movies.results)
            setMovies(movies.results)
        } catch (error) {
            console.log(error)
        }
    }
    fetchMovies()
}, [])



    return(
        <MovieList movies={movies}/>
    )
}