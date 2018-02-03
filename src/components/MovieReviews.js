import React from 'react'
import ReviewItem from './ReviewItem'

const MovieReviews = ({reviews}) => {

  const reviewArray = reviews.map((r, i) => (< ReviewItem review={r} key={i}/>))

  return (
    <article className="review-list content">
      {reviewArray}
      <br className="review"></br>
      <br className="review"></br>
      <br className="review"></br>
    </article>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
