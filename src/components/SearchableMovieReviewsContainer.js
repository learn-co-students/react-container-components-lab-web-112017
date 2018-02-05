import React from 'react'
const NYT_API_KEY = '5efef0b2ae3841ae863eb36f308ed9af';
const searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=banana?`
            + `api-key=${NYT_API_KEY}`

import MovieReviews from './MovieReviews'
class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: '',
    searchTerm: ''
  }
  // getData = () => {
  //   return fetch(searchURL)
  //   .then(res => res.json())
  //   }

  render() {
    return (<div className='searchable-movie-reviews'>
      <MovieReviews reviews={this.state.reviews}/>
    </div>)
  }
}

export default SearchableMovieReviewsContainer
