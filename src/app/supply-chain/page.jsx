// **** Library Imports ****

// **** Local Imports ****
import SupplyChainBanner from "./components/SupplyChainBanner/SupplyChainBanner";
import ScIdentity from "./components/ScIdentity/ScIdentity";
import ExpertiseArea from "./components/ExpertiseArea/ExpertiseArea";
import TheEdge from "./components/TheEdge/TheEdge";
import Sectors from "./components/Sectors/Sectors";
import Snapshot from "./components/Snapshot/Snapshot";

import Slide2 from "./images/hero-slider/slider-img2.png";

const SupplyChain = () => {
  const supplyChainData = {
    // banner data
    supplyBannerSubtitle: "Apollo Supply Chain",
    supplyBannerTitle: "Complex Supply Chain. Simplified",
    supplyBannerDescription:
      "We offer customized solutions for supply chain competitiveness and resilience.",
    supplyBannerNodes: [
      {
        id: "1",
        slideImage: Slide2,
      },
      {
        id: "2",
        slideImage: Slide2,
      },
      {
        id: "3",
        slideImage: Slide2,
      },
    ],

    // supplyIdentity data
    supplyIdentityFeatureImage: '',
    supplyIdentitySubtitle: "",
    supplyIdentityTitle: "",
    supplyIdentityDescription1: "",
    supplyIdentityDescription2: "",

  };

  return (
    <>
      <SupplyChainBanner
        data={{
          subtitle: supplyChainData.supplyBannerSubtitle,
          title: supplyChainData.supplyBannerTitle,
          description: supplyChainData.supplyBannerDescription,
          nodes: supplyChainData.supplyBannerNodes,
        }}
      />
      <ScIdentity />
      <ExpertiseArea />

      <TheEdge />

      <Sectors />

      <Snapshot />
    </>
  );
};

export default SupplyChain;
