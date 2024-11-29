import Banner from "./Banner";
import Features from "./Features";
import Feedback from "./Feedback";
import FlightSearchBar from "./FlightSearchBar";
import Map from "./Map";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FlightSearchBar></FlightSearchBar>
      <Features></Features>
      <Feedback></Feedback>
      <Map></Map>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
