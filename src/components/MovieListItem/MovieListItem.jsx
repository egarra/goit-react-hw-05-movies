export const MovieListItem = ({name=null, title=null}) => {
    return (
        <li>
            <h2>{name || title}</h2>
        </li>
    )
}