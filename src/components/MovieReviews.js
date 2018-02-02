// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map(review => {return <li className='review'>{review.display_title}</li>})}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
