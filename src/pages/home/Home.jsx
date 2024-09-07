import "./Home.css";
import HomeMain from "../../components/homeMain/HomeMain";
import Categories from "../../components/categories/Categories";
import TopProducts from "../../components/topProducts/TopProducts";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import SocialNetwork from "../../components/socialNetwork/SocialNetwork";

const Home = ({ topProductsData }) => {
  return (
    <>
      <HomeMain />
      <Categories />
      <TopProducts topProductsData={topProductsData} />
      <NewArrivals />
      <SocialNetwork />
    </>
  );
};

export default Home;
