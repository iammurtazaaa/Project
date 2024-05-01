import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">

        <div className="container mt-5">
          <div className="row pt-5">
            <div className="col-xl-6 col-lg-6 col-md-5 d-flex justify-content-center flex-column">
              <h1 className="brand-name">
                Grow Your Business With <strong>Bit</strong>
                <span>Web</span>
              </h1>
              <p className="my-2 text-muted" id="paragraph">
                We are the team of talented developers making sites.Our team
                uses creativity and strategic thinking to overcome challenges.
                We are dedicated to helping every business achieve its full
                potential.
              </p>
              <div className="mt-3">
                <NavLink to="/service" className="btn-get-started rounded-5">
                  Get Started
                </NavLink>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="header-img ">
                <img
                  src="homeimg.jpg"
                  className="img-fluid animated rounded-5" 
                  alt="none" id="image-main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
