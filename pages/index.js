import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";
import Navbar from "./../components/NavBar/NavBar";

import { ProgressCircle } from "./../components/ProgressCircle/ProgressCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { ShowCard } from "./../components/ShowCard/ShowCard";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ReviewCard } from "./../components/ReviewCard/ReviewCard";

export default function Home() {
  const [view, setView] = useState(false);

  return (
    <Layout title="Home | HomeJam">
      <IndexWrapper>
        <div className="intro">
          <Navbar />
          <div className="heading">Cari Cari</div>
          <div className="sub-heading">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </div>
          <div className="progress-div">
            <ProgressCircle
              number={0}
              label={"Label1"}
              icon={<FavoriteBorderIcon fontSize={"large"} />}
              on={true}
            />
            <ProgressCircle
              number={0}
              label={"Label2"}
              icon={<EventAvailableIcon fontSize={"large"} />}
              on={false}
            />
            <ProgressCircle
              number={0}
              label={"Label2"}
              icon={<EventAvailableIcon fontSize={"large"} />}
              on={false}
            />
            <ProgressCircle
              number={0}
              label={"label2"}
              icon={<EventAvailableIcon fontSize={"large"} />}
              on={false}
            />
          </div>
        </div>
        <div className="upcoming">
          <div className="heading-div">
            <div className="heading-group">
              <div className="heading">Upcoming Shows</div>
              <div className="heading-underline"></div>
            </div>
            <div className="util" onClick={() => setView(!view)}>
              {!view ? "View All" : "Hide All"}
            </div>
          </div>
          <div className="show-cards">
            <ShowCard tag={"Folk"} name={"Benny Dayal"} />
            <ShowCard tag={"Bollywood"} name={"Vijay Yesuda"} />
            <ShowCard tag={"Folk"} name={"Andrea Jeremiah"} />
            <ShowCard tag={"Folk"} name={"Shilpa Rao"} />
            {view && (
              <>
                <ShowCard tag={"Folk"} name={"Benny Dayal"} />
                <ShowCard tag={"Bollywood"} name={"Vijay Yesuda"} />
                <ShowCard tag={"Folk"} name={"Andrea Jeremiah"} />
                <ShowCard tag={"Folk"} name={"Shilpa Rao"} />
                <ShowCard tag={"Folk"} name={"Andrea Jeremiah"} />
                <ShowCard tag={"Folk"} name={"Shilpa Rao"} />
              </>
            )}
          </div>
        </div>
        <div className="review">
          <div className="heading-div">
            <div className="heading-group">
              <div className="heading">Reviews</div>
              <div className="heading-underline"></div>
            </div>
            <div className="util">
              <span className="page">1/12</span> &ensp;
              <ArrowBackIcon fontSize={"small"} /> &ensp;
              <ArrowForwardIcon fontSize={"small"} />
            </div>
          </div>
          <div className="review-cards">
            <ReviewCard name={"Hellen Jummy"} location={"🇺🇸 Palo Alto, CA"} />
            <ReviewCard
              name={"Isaac Oluwatemilorun"}
              location={"🇮🇹 Palo Alto, CA"}
            />
            <ReviewCard name={"Hellen Jummy"} location={"🇺🇸 Palo Alto, CA"} />
          </div>
        </div>
      </IndexWrapper>
    </Layout>
  );
}
