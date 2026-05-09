import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div style={{ padding: "30px" }}>

      <h1>CampusKart</h1>

      <h2>Buy • Sell • Rent for Students</h2>

      <div style={{
        display: "flex",
        gap: "20px"
      }}>

        <ProductCard
          title="Cooler"
          price="₹700/month"
          image="https://via.placeholder.com/250"
        />

      </div>

    </div>
  );
}

export default Home;