import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import Footer from "./shared/Footer/Footer";
import ForWhom from "./forWhom/ForWhom";
import Overview from "./Overview/Overview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Pilot | Home</title>
      </Helmet>
      <Banner></Banner>
      <Overview></Overview>
      <ForWhom></ForWhom>
      <Footer></Footer>
    </div>
  );
};

export default Home;
