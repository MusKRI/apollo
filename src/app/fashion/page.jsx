export const Fashion = () => {
  const Approach = [
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph",
      data: "lorem dta",
    },
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph",
      data: "data lorem",
    },
    {
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph",
      data: "lorem data",
    },
  ];
  const Forges = [
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
    {
      Heading: "Lorem ipsum",
      Content:
        "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore enim eius adipisci, minima quae, saepe molestiae similique reiciendis aperiam suscipit. Maiores facilis odit perspiciatis esse eligendi eveniet. Molestiae, vitae?Aspernatur voluptatum odit fugiat quia, in atque tenetur, illum facilis corrupti veritatis exercitationem sint consequatur suscipit reiciendis qui doloribus! Quas voluptatibus sunt neque nam numquam debitis veniam rerum quo mollitia.",
    },
  ];
  const colorCard = (index) => {
    return index % 2 == 0 ? { background: "white" } : { background: "grey" };
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {/* HeroSection */}
        <div className="col-12 p-0">
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph"
              alt=""
              style={{ minWidth: "100%" }}
            />
          </div>
        </div>
        {/* 2nd Section */}
        <div className="col-12 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="row ">
                  <div
                    className="col-12"
                    style={{ fontSize: "60px", fontWeight: "bold" }}
                  >
                    Unmatched
                  </div>
                  <div className="col-md-4">
                    Lorem ipsum dolor sit amet consectetur, nt qua.
                  </div>
                  <div
                    className="col-md-12 mt-5"
                    style={{ fontSize: "60px", fontWeight: "bold" }}
                  >
                    Unstoppable
                  </div>
                  <div className="col-md-4">
                    Lorem ipsum dolor sit amet dolor sit amet.
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nesciunt mollitia ducimus repellat esse, eligendi minus animi
                delectus pariatur ab magnam fuga assumenda repellendus
                voluptatem quibusdam suscipit molestias harum possimus!
                Perferendis, provident incidunt? Quasi expedita quaerat cum
                eveniet voluptatibus est repudiandae pariatur quibusdam
                doloribus eum repellendus tempora mollitia. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Est nesciunt mollitia
                ducimus repellat esse, eligendi minus animi delectus pariatur ab
                magnam fuga assumenda repellendus voluptatem quibusdam suscipit
                molestias harum possimus! Perferendis, provident incidunt? Quasi
                expedita quaerat cum eveniet voluptatibus est repudiandae
                pariatur quibusdam doloribus eum repellendus tempora mollitia.
                animi delectus pariatur ab magnam fuga assumenda repellendus
                voluptatem quibusdam suscipit molestias harum possimus!
                Perferendis, provident incidunt? Quasi expedita quaerat cum
                eveniet voluptatibus est repudiandae pariatur quibusdam
                doloribus eum repellendus tempora mollitia.
              </div>
            </div>
          </div>
        </div>
        {/* Area OF expertise */}
        <div className="col-12 p-0 mt-5">
          <div
            className="container-fluid p-0"
            style={{
              backgroundImage: `url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph")`,
              color: "white",
              boxShadow: "inset  10px 10px 50px 20px #000000",
              lineHeight: " 1.4",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="row ">
                    <div className="col-lg-3 mt-5">
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "60px",
                          textTransform: "uppercase",
                        }}
                      >
                        Areas OF Expertise
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row justify-content-center">
                        <div className="col-lg-9">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci, aliquid soluta mollitia id vero a
                          dolorem quidem asperiores omnis provident cupiditate
                          nobis porro rem? Perferendis labore consectetur ex ab
                          eum ad ipsa corrupti impedit suscipit.
                        </div>
                        <div className="col-lg-9">
                          <div className="row mt-2">
                            <div
                              className="col-4"
                              style={{ fontWeight: "bold", fontSize: "30px" }}
                            >
                              2.8M
                            </div>
                            <div
                              className="col-4"
                              style={{ fontWeight: "bold", fontSize: "30px" }}
                            >
                              05
                            </div>
                            <div
                              className="col-4"
                              style={{ fontWeight: "bold", fontSize: "30px" }}
                            >
                              40+
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9 mb-5">
                          <div className="row">
                            <div className="col-4">Lorem, ipsum dolor.</div>
                            <div className="col-4">Lorem, ipsum dolor.</div>
                            <div className="col-4">Lorem, ipsum dolor.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OurApproach */}
        <div className="col-12 mt-4 mb-5">
          <div className="container">
            <div className="row">
              <div
                className="col-12"
                style={{ fontWeight: "bold", fontSize: "40px" }}
              >
                Our Approach
              </div>
              {Approach.map((item) => {
                console.log(item.img); // Assuming 'img' property exists in each object
                return (
                  <div className="col-4" key={item.id}>
                    <img src={item.img} alt="" />
                    <p
                      className="d-flex justify-content-center mt-2"
                      style={{ fontWeight: "bold" }}
                    >
                      {item.data}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Forge Connection */}
        <div className="col-12 mt-5  pt-4" style={{ background: "#D3D3D3" }}>
          <div className="row ml-lg-4">
            <div className="col-lg-3 ">
              <p
                style={{ fontWeight: "bold", fontSize: "40px" }}
                className="pl-5 ml-5"
              >
                Forge Connection With Excellence
              </p>
            </div>
          </div>
          <div className="row">
            {Forges.map((items, index) => (
              <div className="col-md-3 mt-3 mb-5" key={items.id}>
                <div className="card" style={colorCard(index)}>
                  <p
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                    className="ml-3 mt-3"
                  >
                    {items.Heading}
                  </p>
                  <p className="mt-3 pl-3 pr-3">{items.Content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Preferred Choice */}
        <div className="col-12 mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-6"
                style={{ fontWeight: "bold", fontSize: "50px" }}
              >
                <p className="d-flex justify-content-center">
                  Preferred Choice
                </p>
                <p className="d-flex justify-content-center">
                  For Global Iconic Brands
                </p>
              </div>
              <div className="col-lg-7 " style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                itaque id maxime voluptas ratione sint commodi ullam aliquam.
                Ipsam repellat repellendus officiis nobis culpa perferendis
                nostrum natus eum quis? Nobis. A exercitationem laboriosam et
                expedita? Earum sed minima exercitationem iusto quae enim aut
                fugiat, quis eveniet nostrum non provident veritatis maxime
                quia, cupiditate delectus blanditiis ratione. Sit, quisquam?
                Eaque, ullam.
              </div>
              <div className="col-12">Content not visible</div>
            </div>
          </div>
        </div>
        {/* SnapShotSection */}
        <div className="col-12">
          <div className="container">
            <p style={{ fontWeight: "bold", fontSize: "50px" }}>SnapShot</p>
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph"
                      alt=""
                    />
                  </div>
                  <div className="col-12  mt-3">
                    <img
                      src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph"
                      alt=""
                      style={{ minWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="col-12">
                  <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph"
                    alt=""
                  />
                </div>
                <div className="col-12 mt-3">
                  <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=sph"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interact */}
        <div className="col-12 mb-5 mt-3">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-5">
                <span style={{ fontWeight: "bold", fontSize: "55px" }}>
                  Interact with us
                </span>
                <div className="row">
                  <div className="col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor est maiores odio sit suscipit dolore fugit saepe unde
                    officiis sequi doloribus atque itaque voluptate ducimus
                    ratione molestias ipsam, cumque beatae! Dolor voluptatem
                    nisi quas dolorum deserunt earum ea tempora, accusamus odit
                    suscipit dolorem dolores ut. Ex praesentium reiciendis
                    libero odio odit exercitationem eligendi quod atque suscipit
                    amet, tempore, inventore harum.
                  </div>
                </div>
                <div className="row mt-4">
                  <p style={{ fontWeight: "bold" }}>Address</p>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-4">
                        <p style={{ fontWeight: "bold" }}>lorem</p>
                        <p>ipsum3</p>
                      </div>
                      <div className="col-4">
                        <p style={{ fontWeight: "bold" }}>lorem</p>
                        <p>ipsum3</p>
                      </div>
                      <div className="col-4">
                        <p style={{ fontWeight: "bold" }}>lorem</p>
                        <p>ipsum3</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-8">
                        <div className="row">
                          <div className="col-6">
                            <p style={{ fontWeight: "bold" }}>lorem</p>
                            <p>ipsum3</p>
                          </div>
                          <div className="col-6">
                            <p style={{ fontWeight: "bold" }}>lorem</p>
                            <p>ipsum3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
