function Cart({ cart, setCart }) {
  // Remove item from cart
  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Update quantity (cannot exceed stock)
  function updateQuantity(id, newQty, stock) {
    if (newQty < 1 || newQty > stock) return;

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  }

  // Total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p>Empty cart</p>;
  }

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> — ₹{item.price}
          <br />
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value), item.stock)
            }
          />
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;
