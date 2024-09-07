import "./TopProducts.css";

const TopProducts = ({ topProductsData }) => {
  const { data, isPending, error } = topProductsData;
  return (
    <div>
      {isPending && <h1>Loading ...</h1>}
      {error && <h1>Xatolik sodir bo'ldi</h1>}
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default TopProducts;
