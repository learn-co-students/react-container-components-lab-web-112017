// Code MovieReviews Here
import React from 'react'
const MovieReviews = (props) => {
 return (
   <div className='review-list'>
       {props.reviews && props.reviews.map((rvw)=><ul className='review'><li key={rvw.display_title}>{rvw.display_title}</li></ul>)}
   </div>
 )
}
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
