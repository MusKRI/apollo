import { useState, useEffect } from "react";

// **** Local Imports ****
import CustomCursor from "../components/CustomCursor/CustomCursor";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="border border-red-600 fixed w-full h-full flex items-center justify-center">
          <div className="loader">
            <span>Apollo</span>
            <span>Apollo</span>
          </div>
        </div>
      ) : (
        <CustomCursor>
          <Header />
          {children}
          <Footer />
        </CustomCursor>
      )}
    </>
  );
};

export default RootLayout;
