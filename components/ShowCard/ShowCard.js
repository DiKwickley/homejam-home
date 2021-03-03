import React from "react";
import { ShowCardWrapper } from "./ShowCardWrapper";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

export const ShowCard = ({ tag, name }) => {
  return (
    <ShowCardWrapper>
      <div className="card">
        <img className="card-img" src="https://picsum.photos/260/230" />
        <div className="info">
          <span className="tag">{tag}</span>
          <div className="name">{name}</div>
          <div className="utils">
            <div className="more">
              More Info <ArrowForwardIcon fontSize={"small"} />
            </div>
            <div className="book">
              <ConfirmationNumberIcon fontSize={"small"} />
            </div>
          </div>
        </div>
      </div>
    </ShowCardWrapper>
  );
};
