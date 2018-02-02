// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
 const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                  + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ''
  }


  submitSearchInput = (event) => {
     event.preventDefault()
     fetch(url + (this.state.searchTerm))
       .then(response => response.json())
       .then(reviews => this.setState({ reviews: reviews.results }))
   }

  handleInput = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }




  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.submitSearchInput}>
          <input type='search' onChange={this.handleInput}/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
