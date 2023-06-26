import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ProductContextProvider>
  );
}

export default App;
