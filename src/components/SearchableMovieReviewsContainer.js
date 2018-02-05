// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  searchHelper = (event) => {
    event.preventDefault();
    fetch(`${URL}${this.state.searchTerm}`)
    .then(res => res.json())
    .then(data => this.setState({reviews: data.results}))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.searchHelper}>
          <input
            type='text'
            id='search-term'
            onChange={this.handleChange}
            />
          <input type='submit' value='Search Movie reviews'/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
