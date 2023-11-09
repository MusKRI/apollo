// **** Library Imports ****
import { Routes, Route } from "react-router-dom";

// **** Local Imports ****
import RootLayout from "./app/layout";
import Home from "./app/page";
import AboutUs from "./app/about-us/page";
import Business from "./app/business/page";
import SupplyChain from "./app/supply-chain/page";
import ContactUs from "./app/contact-us/page";

import BlogsPage from "./app/blogs/page";
import NewsPage from "./app/news/page";
import PeoplePlanet from "./app/people-planet/page";
import { Fashion } from "./app/fashion/page";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/people-planet" element={<PeoplePlanet />} />
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
