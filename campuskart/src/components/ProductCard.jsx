function ProductCard({ title, price, image }) {
  return (
    <div>
      <img src={image} alt="product" width="200" />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <button>Contact Seller</button>
    </div>
  );
}

export default ProductCard;