// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

class SearchableMovieReviewsContainer extends React.Component {

constructor(){
  super();
  this.state = {
    searchTerm: '',
    reviews: []
  }
}

handleInputChange = event => {
  this.setState({
    searchTerm: event.target.value
  })

}

handleSubmit = event => {
  event.preventDefault();
  fetch(URL + `${this.state.searchTerm}`).then(res=> res.json())
  .then((resp=> this.setState({
    reviews: resp.results})))
  this.setState ({
    searchTerm: ''
  })
}

render () {
  return (
     <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
       <input
           type="text"
           placeholder="Search..."
           value={this.state.searchTerm}
           onChange={this.handleInputChange}
        />
        <input type="submit" value="Search Movies" />
        </form>
        {this.state.reviews.length > 0 ?
        <div>
        <h2>Search Results </h2>
        < MovieReviews reviews={this.state.reviews}/>
        </div> :
         null
        }
     </div>
  )
}

}

export default SearchableMovieReviewsContainer;
