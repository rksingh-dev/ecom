import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="bg-slate-900 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
