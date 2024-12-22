import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

export default App; // fix Vite hmr

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
