import { useParams } from "react-router-dom";

import { getMovieCast } from '../../components/Service/fetchData'
import { useEffect, useState } from "react";

import { CastList } from "components/CastList/CastList";
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
    const [ cast, setCast ] = useState([]);
    const [loader, setLoader] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            setLoader(true)
            try {
                const data = await getMovieCast(id);
                setCast([...data])
            } catch (error) {
                console.log(error)
            } finally {
                setLoader(false)
            }
        }
        fetchCast()
        return () => setCast([])
    }, [id])
    
    return (
        <>
            {loader && <Loader />}
            {cast.length > 0 ? <CastList cast={cast}/> : <p>No information</p>}
        </>
    )
}