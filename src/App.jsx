import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/productDetail" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
