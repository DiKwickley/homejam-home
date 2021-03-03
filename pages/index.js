import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";

import { ProgressCircle } from "./../components/ProgressCircle/ProgressCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

export default function Home() {
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
      </IndexWrapper>
    </Layout>
  );
}
