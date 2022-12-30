import { PosterActor, List } from "./CastList.styled"

export const CastList = ({cast}) => {

    return (
        <List>
            {cast.map(({profile_path, character, original_name, id}) => {
    
                return(
                    <li key={id}>
                    <PosterActor src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : 'https://via.placeholder.com/700?text=NoImageFound'} alt={original_name}/>
                    <p>{original_name}</p>
                    <p>"{character}"</p>
                </li>
                )
            })}
        </List>
    )
}