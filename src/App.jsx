import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
