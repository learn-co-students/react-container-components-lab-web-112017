import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: null
    }
  }

  componentDidMount(){
    this.getData().then(json =>
      this.setState({
        reviews: json['results']
      })
    )
  }

  getData = () => {
    return fetch(URL).then(res => res.json())
  }

  render(){
    return (<div className='latest-movie-reviews'>
      <MovieReviews reviews={this.state.reviews} />
    </div>)
  }

}
export default LatestMovieReviewsContainer
