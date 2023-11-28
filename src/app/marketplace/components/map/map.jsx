/* eslint-disable react/no-unescaped-entities */
import MapImg from "./images/map2.png";
import "./map.css";
const HomeMap = () => {
  let Europe = [
    "Austria",
    "Belgium",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Netherlands",
    "Romania",
    "Scotland",
    "Spain",
    "Switzerland",
    "Turkey",
    "United Kingdom",
    "Czech Republic",
    "Russia",
  ];

  const southAmerica = [
    "Argentina",
    "Chile",
    "Ecuador",
    "Guyana",
    "Peru",
    "Uruguay",
  ];

  const eastAsia = [
    "China",
    "Hong Kong",
    "Indonesia",
    "Japan",
    "Korea",
    "Singapore",
    "Taiwan",
    "Vietnam",
  ];

  const northAmerica = [
    "Canada",
    "United States",
    "Dominican Republic",
    "Guatemala",
    "Haiti",
    "Mexico",
    "Nicaragua",
  ];

  const southAsia = [
    "India",
    "Bangladesh",
    "Afghanistan",
    "Pakistan",
    "Sri Lanka",
    "Nepal",
  ];

  const middleEast = ["Bahrain", "Oman", "Qatar", "UAE", "Syria", "Iran"];
  const australia = ["Napier"];

  return (
    <>
      <h1 className="text-center text-3xl lg:text-5xl py-8 font-bold">
        Making Impact Across Globe
      </h1>
      <div style={{ background: "#f6f6f4" }}>
        <div className="relative h-auto lg:min-h-screen">
          <div
            className="relative w-full h-full flex items-center justify-center bg-[#f6f6f4]"
            style={{ margin: "auto" }}
          >
            <img src={MapImg} alt="" className="max-w-full object-cover" />

            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[0px] top-[31%] left-[23%]">
              <span className="text-sm px-1">North America</span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 test"
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {northAmerica.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>

            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[1px] top-[53%] left-[23%]">
              <span className="text-sm px-1">East Asia</span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 mapComponent test"
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {eastAsia.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
            {/* <div className="row ">
							<div className="col-12 hide">
								<ul>
									<li>Hello</li>
								</ul>
							</div>
						</div> */}
            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[1px] top-[23%] left-[83%]">
              <span className="text-sm px-1">South Asia </span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 test"
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {southAsia.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[63%] left-[55%]">
              <span className="text-sm px-1">Australia</span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 test"
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {australia.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[43%] left-[55%]">
              <span className="text-sm px-1">Middle East</span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 test"
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {middleEast.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>

            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[13%] left-[55%]">
              <span className="text-sm px-1">Europe</span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 mapComponent block test "
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {Europe.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>

            <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[13%] left-[25%]">
              <span className="text-sm px-1">South America</span>
              <span
                style={{
                  color: "orange",
                  fontSize: "25px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                className="mt-1.5 test"
              >
                +
                <ul
                  className="absolute inset-0 bg-white top-full h-max hidden w-[200px]"
                  style={{ borderRadius: "15px" }}
                >
                  {southAmerica.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center mt-2"
                      id={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const HomeMap = () => {
//   return (
//     <div className="relative h-auto lg:min-h-screen">
//       <h1 className="text-center text-3xl lg:text-5xl py-8 font-bold">
//         Making Impact Across Globe
//       </h1>
//       <div className="relative w-full h-full flex items-center justify-center bg-[#2e3192]">
//         <img src={MapImg} alt="" className="max-w-full object-cover" />

//         <p></p>

//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[0px] top-[31%] left-[23%]">
//           <span className="text-sm px-1">North America</span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>

//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[1px] top-[43%] left-[43%]">
//           <span className="text-sm px-1">East Asia</span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>

//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[1px] top-[43%] left-[63%]">
//           <span className="text-sm px-1">South Asia </span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>
//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[43%] left-[55%]">
//           <span className="text-sm px-1">Australia</span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>
//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[23%] left-[55%]">
//           <span className="text-sm px-1">Africa</span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>

//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[13%] left-[55%]">
//           <span className="text-sm px-1">Europe</span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>

//         <div className="absolute flex items-center bg-white rounded-3xl px-[16px] py-[2px] top-[13%] left-[25%]">
//           <span className="text-sm px-1">South Ameria</span>
//           <span
//             style={{
//               color: "orange",
//               fontSize: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//             className="mt-1.5"
//           >
//             +
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png

export default HomeMap;
