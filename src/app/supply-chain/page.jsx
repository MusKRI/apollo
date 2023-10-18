// **** Library Imports ****

// **** Local Imports ****
import SupplyChainBanner from "./components/SupplyChainBanner/SupplyChainBanner";
import ScIdentity from "./components/ScIdentity/ScIdentity";
import ExpertiseArea from "./components/ExpertiseArea/ExpertiseArea";
import TheEdge from "./components/TheEdge/TheEdge";
import Sectors from "./components/Sectors/Sectors";
import Snapshot from "./components/Snapshot/Snapshot";

const SupplyChain = () => {
  return (
    <>
      <SupplyChainBanner />
      <ScIdentity />
      <ExpertiseArea />

      <TheEdge />

      <Sectors />

      <Snapshot />
    </>
  );
};

export default SupplyChain;
