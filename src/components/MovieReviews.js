// Code MovieReviews Here
import React from "react";

const Review = ({ byline, headline, link, summary_short }) => {
  return (
    <div className="review">
      <a href={link.url}>
        <h2>{headline}</h2>
      </a>
      <h4>{byline}</h4>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
