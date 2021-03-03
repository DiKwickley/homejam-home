import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";

import { ProgressCircle } from "./../components/ProgressCircle/ProgressCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import { ShowCard } from "./../components/ShowCard/ShowCard";

export default function Home() {
  const [view, setView] = useState(false);

  return (
    <Layout title="HOME">
      <IndexWrapper>
        <div className="intro">
          <div className="heading">Cari Cari</div>
          <div className="sub-heading">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </div>
          <div className="progress-div">
            {/* This whole progress area can be put in a loop */}
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
          <div className="cards">
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
      </IndexWrapper>
    </Layout>
  );
}
