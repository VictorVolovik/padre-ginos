import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

export default App; // fix Vite hmr

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
