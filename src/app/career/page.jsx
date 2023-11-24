const Career = () => {
  let CardData = [
    {
      Title: " lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },

    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
    {
      Title: "lorem lorem lorem lorem",
      status: "Active",
      icon: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    },
  ];

  let ForceFive = [
    {
      name: "Lorem",
      description:
        "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et quaerat possimus?",
    },
    {
      name: "Lorem",
      description:
        "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et quaerat possimus?",
    },
    {
      name: "Lorem",
      description:
        "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et quaerat possimus?",
    },
    {
      name: "Lorem",
      description:
        "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et quaerat possimus?",
    },
    {
      name: "Lorem",
      description:
        "	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis et quaerat possimus?",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 mt-5"
          style={{ backgroundColor: " rgb(17 79 170)", color: "white" }}
        >
          <div className="row">
            <div className="collage col-12">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt=""
                style={{ width: "100%", height: "100px" }}
              />
            </div>
            <div className="col-12">
              <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                  <div className="col-9">
                    <p style={{ fontWeight: "bold" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem, ducimus? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </p>
                  </div>
                  <div className="col-9 mt-2 mb-5">
                    <div className="row">
                      <div className="col-8">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maiores quis quasi commodi possimus aliquid, at
                          consequatur? Assumenda sit quas repellendus beatae
                          modi consectetur blanditiis. Dignissimos reiciendis
                          aperiam explicabo magni delectus nobis accusantium ea
                          possimus nisi incidunt. Inventore distinctio impedit
                          praesentium expedita animi, cum ut dolor, adipisci
                          aperiam tempora quasi soluta.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora nam, temporibus similique quos alias,
                          mollitia porro quae eius tempore officiis facilis
                          omnis qui soluta cupiditate dignissimos velit
                          voluptatum minus. Cum at rerum molestiae veniam hic
                          est suscipit ullam optio? Laboriosam consectetur,
                          exercitationem dolor quos quisquam temporibus illum
                          odio harum quod perspiciatis maiores ipsum veritatis
                          optio error necessitatibus eveniet officia tenetur
                          nemo, vitae veniam placeat animi ratione totam! Quos
                          hic sunt ducimus ex sit voluptatum eius perferendis
                          dignissimos architecto excepturi quo necessitatibus,
                          aspernatur fuga, ea neque dolor culpa molestias atque,
                          debitis numquam ullam quaerat doloribus asperiores
                          sapiente! Quaerat fugiat illum harum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Force Five */}
        <div className="col-12 mt-5">
          <div className="container  mb-5">
            <div className="row">
              <div className="col-12">
                <h1 style={{ fontWeight: "bold", fontSize: "55px" }}>
                  Force of Five
                </h1>
              </div>
              <div className="col-lg-4 mt-3">
                <div className="row">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                    alt=""
                    style={{ maxWidth: "40%" }}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  {ForceFive.map((self, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <div
                          className="card"
                          style={{
                            borderLeft: "1px solid white",
                            borderRight: "1px solid white",
                            borderRadius: "0px",
                            padding: "20px 2px",
                          }}
                        >
                          <div className="row">
                            <div
                              className="col-lg-2"
                              style={{ fontWeight: "450", FontSize: "30px" }}
                            >
                              0{index}
                            </div>
                            <div
                              className="col-lg-3"
                              style={{ fontWeight: "450", FontSize: "30px" }}
                            >
                              {self.name}
                            </div>
                            <div className="col-lg-7">{self.description}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Discovery Section */}
        <div
          className="col-12 mb-5 mt-5 pt-5"
          style={{ backgroundColor: " rgb(17 79 170)", color: "white" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-12 mt-3"
                style={{ fontWeight: "bold", fontSize: "25px" }}
              >
                <p>Lorem ipsum dolor sit.</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="col-12 mb-5  mt-5">
                <div className="row">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt=""
                      style={{ maxWidth: "60%" }}
                    />
                  </div>
                  <div className="col-lg-4 mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    ad excepturi repellendus ipsa obcaecati laudantium, mollitia
                    quia numquam rerum laborum totam expedita ea saepe odit
                    ullam exercitationem ducimus. Voluptatibus reiciendis iusto
                    explicabo!
                  </div>
                  <div className="col-lg-4 d-flex justify-content-space-around align=items-start">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt=""
                      style={{ maxWidth: "30%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt=""
                      style={{ maxWidth: "70%" }}
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt=""
                      style={{ maxWidth: "70%" }}
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt=""
                      style={{ maxWidth: "70%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12 headings mt-3">
                    <div className="row">
                      <div className="col-4">lorem ipsum lorem ipsum</div>
                      <div className="col-4">lorem ipsum lorem ipsum</div>
                      <div className="col-4"> lorem ipsum lorem ipsum</div>
                    </div>
                  </div>
                  <div className="col-12 content mt-3">
                    <div className="row">
                      <div className="col-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus illum, aliquam ut nostrum voluptatum
                        commodi quod animi voluptatibus! Qui, voluptatem. Rerum
                        quod impedit veritatis consectetur. Cupiditate error
                        similique repellat consectetur! Eligendi laboriosam
                        maiores debitis doloribus possimus vitae deleniti quae
                        commodi pariatur qui incidunt officiis error quo quasi
                        non architecto accusamus impedit, exercitationem illo
                        quia sequi reprehenderit rerum voluptate? Odit,
                        adipisci.
                      </div>
                      <div className="col-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt iste nam doloremque, voluptatum amet pariatur
                        ex exercitationem iusto nostrum porro culpa nulla! Odit
                        beatae autem voluptatibus illo quas minus aliquam? Quas
                        a at reprehenderit! Iure veniam asperiores aspernatur
                        recusandae, eveniet sequi ad, dolorem nulla minus
                        placeat excepturi ipsa similique id nisi ab dolor
                        laboriosam! Veritatis unde deleniti cupiditate et sed?
                      </div>
                      <div className="col-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquam reprehenderit nihil culpa fugit provident
                        in aspernatur. Iste, minima ipsam? Explicabo fugit nobis
                        deserunt, fugiat ducimus error vero velit officia
                        provident perferendis. Sed adipisci repellendus,
                        architecto dolor error delectus temporibus nihil atque
                        odio, consequuntur officiis quaerat aperiam. Sed, autem.
                        Nostrum unde voluptatibus reiciendis! Magnam, ratione!
                        Molestiae harum, fugiat ipsam earum officiis enim
                        quibusdam odit officia error esse sit eius suscipit
                        laudantium maiores eos corporis ex ea? Quidem cumque ad
                        id nemo corporis cupiditate.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CurrentOpening */}
        <div className="col-12 mt-5">
          <div className="row">
            <div
              className="col-12 d-flex justify-content-center"
              style={{ fontSize: "55px" }}
            >
              <span style={{ color: "blue" }}>Current</span>{" "}
              <span style={{ fontWeight: "bold", color: "black" }}>
                Openings
              </span>
            </div>
            <div className="col-12">
              <div className="row">
                {CardData.map((self, index) => {
                  return (
                    <div className="col-lg-6 mt-3 mb-2" key={index}>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <div className="row">
                              <div
                                className="col-lg-4 d-flex justify-content-start"
                                style={{ fontWeight: "bold" }}
                              >
                                {self.Title}
                              </div>
                              <div className="col-lg-4">
                                <span
                                  style={{
                                    background: "#89CFF0",
                                    border: "1px solid white",
                                    borderRadius: "50px",
                                    padding: "5px 10px",
                                  }}
                                >
                                  {self.status}
                                </span>
                              </div>
                              <div className="col-lg-4 d-flex justify-content-end">
                                <img
                                  src={self.icon}
                                  alt=""
                                  style={{ maxWidth: "20px" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="card-subtitle mb-2 text-muted">
                            <div className="row">
                              <div className="col-6 d-flex">
                                lorem ipsum lorem ipsum
                              </div>
                            </div>
                          </div>
                          <a href="#" className="card-link">
                            Card link
                          </a>
                          <a href="#" className="card-link">
                            Another link
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
