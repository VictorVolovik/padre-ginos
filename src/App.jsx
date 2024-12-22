import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Pepperoni Pizza"
        description="Mozzarella Cheese, Pepperoni"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Americano"
        description="French fries and hot dogs"
        image="/public/pizzas/big_meat.webp"
      />
      <Pizza
        name="Hawaiian"
        description="pineapple"
        image="/public/pizzas/hawaiian.webp"
      />
    </div>
  );
};

export default App; // fix Vite hmr

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
