import { useState, useEffect } from "react";

// **** Local Imports ****
import CustomCursor from "../components/CustomCursor/CustomCursor";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-box");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <>
      <CustomCursor>
        <Header />
        {/* <div className="h-[72px]"/> */}
        {children}
        <Footer />
      </CustomCursor>
    </>
  );
};

export default RootLayout;
