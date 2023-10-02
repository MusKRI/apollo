// **** Library Imports ****

// **** Local Imports ****
import "./supply_chain.css";
import SupplyChainBanner from "./components/SupplyChainBanner/SupplyChainBanner";
import ScIdentity from "./components/ScIdentity/ScIdentity";
import ExpertiseArea from "./components/ExpertiseArea/ExpertiseArea";

const SupplyChain = () => {
  return (
    <>
      <SupplyChainBanner />
      <ScIdentity />
      <ExpertiseArea />
    </>
  );
};

export default SupplyChain;
