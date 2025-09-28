import "./Product.css";

function Product() {
  return (
    <div className="product-card">
      <img
        src="https://i.rtings.com/assets/pages/IxCXzynA/best-apple-laptops-20241009-medium.jpg?format=auto"
        alt="Product"
        className="product-image"
      />
      <h2 className="product-title">Mac Laptop</h2>
      <p className="product-description">
        This is a short description of the product. It looks nice and simple.
      </p>
      <p className="product-price">₹444499</p>
      <a href="https://www.rtings.com/laptop/reviews/apple" tar>
        <button className="buy-btn">Buy Now</button>
      </a>
    </div>
  );
}
export default Product;
