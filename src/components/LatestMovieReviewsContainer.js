import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8ab51eedddab4540975c98e05a02d798';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  getData = () => {
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({ reviews: data.results })
    })
  }

  componentDidMount() {
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({ reviews: data.results })
    })
  }

  // renderReview = () => {
  //   return this.state.reviews.map(review => {return <li>{review.display_title}</li>})
  // }

  render() {
    return(
      <ul className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </ul>
    )
  }
}

export default LatestMovieReviewsContainer;
