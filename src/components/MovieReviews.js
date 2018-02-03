import React from 'react'

const MovieReviews = ({results}) => {
  let output = results.map( r=>
    <div className='review'>
      <p>{r.display_title}</p>
        <li>{r.critics_pick}</li>
        <li>{r.headline}</li>
    </div>
  )

  return (
    <div className='review-list'>
      {output}
    </div>
  )

}
export default MovieReviews
