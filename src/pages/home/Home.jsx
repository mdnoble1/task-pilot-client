import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import Footer from "./shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Pilot | Home</title>
      </Helmet>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
