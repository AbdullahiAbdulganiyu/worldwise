import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
