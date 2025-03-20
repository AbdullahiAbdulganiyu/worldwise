import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
