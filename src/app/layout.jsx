// **** Local Imports ****
import CustomCursor from "../components/CustomCursor/CustomCursor";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <CustomCursor>
        <Header />
        {children}
        <Footer />
      </CustomCursor>
    </>
  );
};

export default RootLayout;
