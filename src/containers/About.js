import { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mx-5 mt-5">
          <div className="col-md-6 d-flex flex-column justify-content-center px-4">
            <h5>Arabica beans?</h5>
            <h1>The 4 Different Types of Coffee Beans</h1>
            <p>
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                illo.
              </b>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sunt vitae optio unde quo earum fugiat provident soluta ipsam quam
              sed, dolore dolor consequuntur odio, nesciunt magni aut! Quos in
              tempore, non nostrum ut eaque veritatis accusamus ipsum, voluptate
              natus repudiandae qui nulla repellendus perferendis dolor ratione
              explicabo?
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center px-4">
            <img
              src="/images/bg/coffee-2.jpg"
              alt="coffee"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="row mx-3 mt-80">
          <div className="col-md-6 d-flex flex-column justify-content-center px-4">
            <img
              src="/images/bg/coffee-3.jpg"
              alt="coffee"
              className="img-fluid rounded"
            />
            <div className="row">
              <div className="col-md-3 text-center py-3">
                <h3>899+</h3>
                <p>Arabica</p>
              </div>
              <div className="col-md-3 text-center py-3">
                <h3>49+</h3>
                <span>Robusta</span>
              </div>
              <div className="col-md-3 text-center py-3">
                <h3>109+</h3>
                <p>Excelsa</p>
              </div>
              <div className="col-md-3 text-center py-3">
                <h3>50+</h3>
                <p>Liberica</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center px-4">
            <h2>About coffee</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              culpa porro quos animi quisquam, itaque praesentium pariatur ad
              ratione similique?
            </p>
            <div>
              <ul>
                <li>
                  <h5>Coffee is culture</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus commodi atque maxime iste quia.
                  </p>
                </li>
                <li>
                  <h5>Passion</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae rem facere similique magni velit beatae impedit quos aliquam quis iusto! Porro odit eius id possimus!
                  </p>
                </li>
                <li>
                  <h5>Aroma and flavour descriptors</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque non tenetur eveniet esse! Voluptatibus error
                    autem repudiandae blanditiis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
