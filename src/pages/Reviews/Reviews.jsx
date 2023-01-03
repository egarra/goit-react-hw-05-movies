import { useParams } from "react-router-dom";

import { getMovieReview } from '../../components/Service/fetchData';
import { useEffect, useState } from "react";

import { ReviewsList } from "components/ReviewsList/ReviewsList";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getMovieReview(id)
                setReviews([...data])
            } catch (error) {
                console.log(error)
            }
        }
    
        fetchReviews()

        return () => setReviews([])
    }, [id])

    return (
        <>
            {reviews.length > 0 ? <ReviewsList reviews={reviews}/> : <div>There is no reviews.</div>}
        </>
    )
}

export default Reviews;