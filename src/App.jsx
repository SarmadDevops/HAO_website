import "./App.css";


import { Routes, Route } from "react-router-dom";
import Service from "./pages/service";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
