import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Pepperoni Pizza"
        description="Mozzarella Cheese, Pepperoni"
      />
      <Pizza name="Americano" description="French fries and hot dogs" />
      <Pizza name="Hawaiian" description="pineapple" />
    </div>
  );
};

export default App; // fix Vite hmr

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
