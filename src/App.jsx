import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import MyBooks from "./pages/MyBooks";
import Preview from "./pages/Preview";

import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product" element={<Product />} />

        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyBooks" element={<MyBooks />} />
        <Route path="//Preview/:bookId" element={<Preview />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
