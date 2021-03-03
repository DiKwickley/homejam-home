import React from "react";
import { Review, ReviewCardWrapper } from "./ReviewCardWrapper";

export const ReviewCard = ({ name, location }) => {
  return (
    <ReviewCardWrapper>
      <div className="card">
        <div className="info">
          <img className="review-img" src="https://picsum.photos/200/200" />
          <div className="info-group">
            <div className="name">{name}</div>
            <div className="location">{location}</div>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
          donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
        </div>
      </div>
    </ReviewCardWrapper>
  );
};
