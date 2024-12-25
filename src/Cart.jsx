import useCurrency from "./utils/formatCurrency";

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => {
          return (
            <li key={index}>
              <span className="size">{item.size}</span> &mdash;{" "}
              <span className="type">{item.pizza.name}</span> &mdash;{" "}
              <span className="price">{item.price}</span>
            </li>
          );
        })}
      </ul>
      <p>Total: {useCurrency(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
