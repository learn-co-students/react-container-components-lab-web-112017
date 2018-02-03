import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



export default class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
}

  componentWillMount() {
    this.getLatestMovies()
  }



  getLatestMovies = () => {
    fetch(URL)
	     .then(function(response) {
		       if (response.status >= 400) {
			       throw new Error("Bad response from server");
		       }
		       return response.json();
	       })
	     .then(res => this.setState({reviews: res.results}))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews results={this.state.reviews}></MovieReviews>
      </div>
  )
  }

}
