import "./Home.css";
import HomeMain from "../../components/homeMain/HomeMain";
import Categories from "../../components/categories/Categories";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import SocialNetwork from "../../components/socialNetwork/SocialNetwork";

const Home = () => {
  return (
    <>
      <HomeMain />
      <Categories />
      <NewArrivals />
      <SocialNetwork />
    </>
  );
};

export default Home;
