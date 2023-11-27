import axios from "axios";
import { useEffect, useState } from "react";
import AboutUsBanner from "./components/Banner/Banner";
import PurposeValues from "./components/PurposeValues/PurposeValues";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import WonderfulTeam from "./components/WonderfulTeam/WonderfulTeam";

const AboutUs = () => {
  const [initialData, setInitialData] = useState({});

  console.log(initialData);

  useEffect(() => {
    axios
      .get("https://webwila.com/giftopedia/public/api/v1/getallpages", {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res);
        // setInitialData(res.data.data.page.meta_data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const aboutusData = {
    // banner data
    bannerImage: "",
    bannerTag: "About Apolloindia",
    bannerTitle: "India&apos;s Leading Global Business Conglomerate",
    bannerDescription:
      "Witness our journey of building a cleaner and greener India harnessing the power of sun and the strength of the wind",

    // who we are data
    whoweareSubtitle: "About us",
    whoweareTitle: "Who We Are",
    whoweareNodes: {
      img: "https://images.unsplash.com/photo-1534709153997-d6659469f951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      title: "Excepteur sint occaecat",
      description:
        "Excepteur sint occaecat cupdatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",
    },

    // purpose values
    purposeValuesSubtitle: "About Us",
    purposeValuesTitle: "Purpose & Values",
    purposeValuesDescription:
      "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.",
    purposeValuesNodes: [
      {
        id: "1",
        pv: "A premier global business conglomerate Incorporated in 1994",
      },
      {
        id: "2",
        pv: "Leading businesses trust us for our unmatched business experties and ethics",
      },
      {
        id: "3",
        pv: "Commited to innovation-led, exponential growth",
      },
      {
        id: "4",
        pv: "Anchored by an extraordinary force of over 17,500 employees",
      },
      {
        id: "5",
        pv: "Products and services making an impact in over 45 countries",
      },
      {
        id: "6",
        pv: "Our businesses have grown into global powerhouses in a wide range of sectors",
      },
    ],

    // team data
    teamSubtitle: "Meet",
    teamTitle: "Our Wonderful Team",
    teamMembers: [
      {
        id: "1",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "2",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "3",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "4",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "5",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "6",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "7",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
      {
        id: "8",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
        name: "Paddy O'Furniture",
        position: "Name of Position",
      },
    ],
  };

  return (
    <div className="">
      <AboutUsBanner
        data={{
          image: aboutusData.bannerImage,
          tag: aboutusData.bannerTag,
          title: aboutusData.bannerTitle,
          description: aboutusData.bannerDescription,
        }}
      />

      <WhoWeAre
        data={{
          subtitle: aboutusData.whoweareSubtitle,
          title: aboutusData.whoweareTitle,
          nodes: aboutusData.whoweareNodes,
        }}
      />

      <PurposeValues
        data={{
          subtitle: aboutusData.purposeValuesSubtitle,
          title: aboutusData.purposeValuesTitle,
          description: aboutusData.purposeValuesDescription,
          nodes: aboutusData.purposeValuesNodes,
        }}
      />

      <WonderfulTeam
        data={{
          subtitle: aboutusData.teamSubtitle,
          title: aboutusData.teamTitle,
          members: aboutusData.teamMembers,
        }}
      />
    </div>
  );
};

// https://webwila.com/giftopedia/public/api/v1/page/about-us

// https://webwila.com/giftopedia/public/api/v1/getallpages

export default AboutUs;
