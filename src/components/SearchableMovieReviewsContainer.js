import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "86aoc4DdWqwZX2vZU4CoWbApAD1kVaYC";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTerm}
            placeholder="Type stuff!"
          />
          <button>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
