// **** Library Imports ****
import { Routes, Route } from "react-router-dom";

// **** Local Imports ****
import RootLayout from "./app/layout";
import Home from "./app/page";
import AboutUs from "./app/about-us/page";
import Business from "./app/business/page";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
