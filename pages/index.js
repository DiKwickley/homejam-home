import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";

export default function Home() {
  return (
    <Layout>
      <IndexWrapper>
        <div className="intro">
          <div className="heading">Cari Cari</div>
          <div className="sub-heading">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </div>
        </div>
      </IndexWrapper>
    </Layout>
  );
}
