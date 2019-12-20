import React from 'react'
import SearchForm from './SearchForm'
import MovieReviews from './MovieReviews'
import ReviewItem from './ReviewItem'

class SearchableMovieReviewsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  fetchQuery = (query) => {
    const NYT_API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}` +`&query=${query.replace(" ","+")}`
    fetch(URL)
      .then(res => res.json())
      .then(jsonArray => this.setState({
        reviews: jsonArray.results
      })
    )
  }

  handleFormChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.fetchQuery(this.state.searchTerm)
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        < SearchForm searchTerm={this.state.searchTerm} handleFormChange={this.handleFormChange} handleFormSubmit={this.handleFormSubmit}/>
      {this.state.reviews.length > 0 && <h2 id="results">Movie Review By Search:</h2>}
      {this.state.reviews.length > 0 && < MovieReviews reviews={this.state.reviews}/>}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
