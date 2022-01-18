import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./page/home/home.page";
import Menu from "./page/menu/menu.page";
import Contact from "./page/contact/contact.page";
import Special from "./page/special/special.page";
import Cart from "./page/cart/cart.page";
import Detail from './page/details/detailsproduct.page';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:slug/:_id" element={<Detail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/special" element={<Special />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
