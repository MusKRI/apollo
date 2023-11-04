import WorldMap from "react-svg-worldmap";

const Map = () => {
  let mapContainer = {
    transform: "rotateX(40deg) rotateY(0deg)",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s",
    perspective: "1000px",
    display: "flex",
    justifyContent: "center",
  };
  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  return (
    <div style={mapContainer}>
      <WorldMap color="red" value-suffix="people" size="lg" data={data} />
    </div>
  );
};

export default Map;
