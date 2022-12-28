import { Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Hats from "./components/routes/hats/hats.component";
import Jackets from "./components/routes/jackets/jackets.component";
import Sneakers from "./components/routes/sneakers/sneakers.component";
import Womens from "./components/routes/womens/womans.component";
import Mens from "./components/routes/mens/mens.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />'
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="hats" element={<Hats />} />
        <Route path="jackets" element={<Jackets />} />
        <Route path="sneakers" element={<Sneakers />} />
        <Route path="womens" element={<Womens />} />
        <Route path="mens" element={<Mens />} />
      </Route>
    </Routes>
  );
};

export default App;
