// Code MovieReviews Here

import React from 'react';

const MovieReviews = ({ reviews }) => {

  return (
    <div className="review-list">


    {reviews.map((rvw, index) => {
      console.log(rvw)
      return (
        <div className="review" key={index}>
          <h3>{rvw.headline}</h3>
          <h4>{rvw.display_title}</h4>
          <div>{rvw.publication_date}   |   {rvw.byline}   |   <a href={rvw.link.url}>Full Review</a></div>
          {rvw.multimedia &&
            <img src= {rvw.multimedia.src} />
          }
          <p>{rvw.summary_short}</p>
          <br />
          <br />
          <p></p>
        </div>
      )
    })}
    </div>
  )
}

MovieReviews.defaultProps = { reviews: []}

export default MovieReviews
