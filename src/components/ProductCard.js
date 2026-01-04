function ProductCard({ product, cart, setCart }) {
  function addToCart() {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>

      <button disabled={product.stock === 0} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
