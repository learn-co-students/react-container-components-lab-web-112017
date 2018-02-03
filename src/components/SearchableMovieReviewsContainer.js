import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''

    }
  }


  handleSearch = (e) => {
    this.setState({searchTerm:e.target.value},
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
       .then(res=> res.json())
       .then(res => this.setState({reviews: res.results}))
  )}

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <input type="text" value={this.state.searchTerm} onChange={this.handleSearch}></input>

        <h3>Search Results</h3>
        <MovieReviews results={this.state.reviews}></MovieReviews>
        <h3>End Search Results</h3>
      </div>

    )
  }

}
