import HomeMap from "../components/map/map";

export const MarketPlace = () => {
  let data = {
    description: "Redefining Global Trade & Commerce",
    bgImage:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 464w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 764w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 928w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1064w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1364w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1528w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1664w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1964w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2128w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2264w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2564w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2728w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2864w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3164w, https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3308w",
  };

  return (
    <>
      <div
        className="relative h-[calc(100vh-72px)]"
        style={{ maxHeight: "30%" }}
      >
        <div className="absolute inset-0 top-0 z-[1] backdrop-brightness-[0.5] px-3 md:px-5">
          <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16 h-full">
            <div className="flex flex-col gap-3">
              <h4 className="text-white text-2xl">{data.tag}</h4>
              <div className="h-1 w-10 bg-white" />
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-white text-5xl lg:text-7xl font-semibold">
                {data.heading}
              </h1>

              <p className="text-white max-w-md text-lg ml-4 lg:ml-20">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-6">
            <img
              src={data.bgImage}
              alt=""
              style={{ maxHeight: "370px", minWidth: "70%" }}
            />
          </div>
          <div
            className="col-6 d-flex align-items-end"
            style={{ marginBottom: "-20px" }}
          >
            <div
              className="row"
              style={{ marginLeft: "-450px", background: "white" }}
            >
              <div className="col-12 mt-4 d-flex justify-content-start">
                <div className="container">
                  <h1 style={{ fontWeight: "750", fontSize: "25px" }}>
                    Apollo Green evergy Limited
                  </h1>
                </div>
              </div>
              <div className="col-10 mb-4" style={{ marginBottom: "-200px" }}>
                <div className="container">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis enim ullam error quam hic aliquid, omnis vitae
                    natus! Quibusdam, explicabo necessitatibus? Aut harum vel
                    doloremque assumenda. Aliquam optio iure modi. Consectetur,
                    expedita cumque. Obcaecati distinctio, nihil, iure maxime ex
                    temporibus odit quibusdam vel praesentium earum porro?
                    Architecto eveniet consequatur ex quibusdam voluptatum
                    aliquam inventore officiis, iure odio illum sint iste!
                    Tempore quos reprehenderit deserunt, amet blanditiis
                    corrupti nemo neque. Quia quod mollitia enim, modi
                    laudantium tempore repudiandae accusantium quaerat illo,
                    animi repellendus consequatur, aliquid neque. Odio harum
                    iste voluptatem quod. Consequuntur ex facere iusto, itaque,
                    veniam pariatur laudantium, quos eligendi aperiam doloribus
                    quidem odit doloremque quae. Praesentium, consequuntur
                    dolorem expedita deleniti suscipit delectus iusto impedit
                    cum obcaecati facilis dignissimos! Quasi. voluptatem quod.
                    Consequuntur ex facere iusto, itaque, veniam pariatur
                    laudantium, quos eligendi aperiam doloribus quidem odit
                    doloremque quae. Praesentium, consequuntur dolorem expedita
                    deleniti suscipit delectus iusto impedit cum obcaecati
                    facilis dignissimos! Quasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <div
        className="container-fluid mt-5 mb-5 pt-5 pb-5"
        style={{ background: "black", color: "white" }}
      >
        <div className="row">
          <div className="col-6">
            At apollo Marketplace
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
              ipsam et nostrum repudiandae quibusdam, totam asperiores tempora
              voluptatum nobis vitae, sint in.
            </p>
          </div>
          <div className="col-6">img</div>
          <div className="col-6">img</div>
          <div className="col-3">img</div>
          <div className="col-3">img</div>
          <div className="col-3">img</div>
          <div className="col-3">img</div>
        </div>
      </div>
      {/* Map */}
      <HomeMap />
      {/* BenefitSections */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
              Benifits from our unmatched expertise
            </h1>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
      {/* LastSection */}
      <div className="col-12 mb-5 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <span style={{ fontWeight: "bold", fontSize: "55px" }}>
                Experience Apollo Marketplace
              </span>
              <div className="row">
                <div className="col-lg-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  est maiores odio sit suscipit dolore fugit saepe unde officiis
                  sequi doloribus atque itaque voluptate ducimus ratione
                  molestias ipsam, cumque beatae! Dolor voluptatem nisi quas
                  dolorum deserunt earum ea tempora, accusamus odit suscipit
                  dolorem dolores ut. Ex praesentium reiciendis libero odio odit
                  exercitationem eligendi quod atque suscipit amet, tempore,
                  inventore harum.
                </div>
              </div>
              <div className="row mt-4">
                <p style={{ fontWeight: "bold" }}>Address</p>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <p>Write Address here</p>
                    </div>
                    <div className="col-4">
                      <p style={{ fontWeight: "bold" }}>Phone</p>
                      <p>ipsum3</p>
                      <p>ipsum3</p>
                    </div>
                    <div className="col-4">
                      <p style={{ fontWeight: "bold" }}>Email</p>
                      <p>ipsum3</p>
                      <p>ipsum3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
