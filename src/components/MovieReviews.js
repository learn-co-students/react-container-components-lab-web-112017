// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  MovieReviews.defaultProps = {
    reviews: []
  }

  let reviews = props.reviews.map(r => <div className="review">{r.display_title}</div> )
  return (
    <div className="review-list">
      { reviews }
    </div>
  )
}

export default MovieReviews
