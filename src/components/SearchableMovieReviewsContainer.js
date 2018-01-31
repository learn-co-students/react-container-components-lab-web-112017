// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }


  handleSearch = (e) => {
    e.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(r => r.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  handleInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSearch }>
          <input type="text" onChange={ this.handleInputChange }></input>
        </form>

        <MovieReviews reviews={ this.state.reviews }/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
