// **** Library Imports ****

import AboutBusiness from "./components/AboutBusiness/AboutBusiness";
import BusinessBanner from "./components/Banner/Banner";
import Snapshot from "./components/Snapshot/Snapshot";

// **** Local Imports ****

const Business = () => {
  return (
    <>
      <BusinessBanner />

      <AboutBusiness />

      <Snapshot />
    </>
  );
};

export default Business;
