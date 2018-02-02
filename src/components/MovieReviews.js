// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  MovieReviews.defaultProps = {
    reviews: []
  }

  console.log(props.reviews)
  let everyReview = props.reviews.map(review => <div className="review">
  <h2>{review.display_title}</h2>
  <h3>{review.byline}</h3>
  <p>{review.headline}</p>
  </div>)

  return (
    <div className= 'review-list'>
    { everyReview }
    </div>
  )
}

export default MovieReviews;
