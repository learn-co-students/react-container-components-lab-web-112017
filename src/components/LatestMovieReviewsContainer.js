import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'
const NYT_API_KEY = '0d28be7decc1459795640034c0a697bf';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(json => this.setState({ reviews: json.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
      <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default LatestMovieReviewsContainer
