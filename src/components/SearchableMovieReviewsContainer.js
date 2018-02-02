// Code SearchableMovieReviewsContainer Here
import React from 'react'

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        {this.state.reviews.map(review => {return <l1 className="review">{review.display_title}</l1>})}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
