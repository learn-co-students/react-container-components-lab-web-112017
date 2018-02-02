// Code SearchableMovieReviewsContainer Here

import React from 'react';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = '0d28be7decc1459795640034c0a697bf';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`


class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleFilterSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleRenderSearchResults = (event) => {

    event.preventDefault()
    let query = this.state.searchTerm
    fetch(URL+query)
    .then(response => response.json())
    .then(json => this.setState({ reviews: json.results }))
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleRenderSearchResults}>
          <label>Search Reviews By Keyword!
          <input type="text" value={this.state.searchTerm} onChange={this.handleFilterSearchTerm}/>
          </label>
          <input type="submit" value="search!" />
        </form>
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
