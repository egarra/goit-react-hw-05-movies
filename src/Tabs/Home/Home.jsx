import { MovieList } from '../../components/MovieList/MovieList'
import { getTrendingMovie } from '../../components/Service/fetchData'


export const Home = () => {

const data = getTrendingMovie()

console.log(data)
    return(
        <MovieList/>
    )
}