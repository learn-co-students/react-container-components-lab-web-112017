import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  fetchReviews = () => {
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({
        reviews: json.results
      })
    )
  }

  componentDidMount() {
    this.fetchReviews()
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2 id="latest">Latest Reviews</h2>
        < MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
