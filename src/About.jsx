import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

library.add(faBusinessTime , faEnvelope , faIndustry , faDatabase);


const About = () => {
  return (
    <>
      <div className="about-image mt-3">
        <img src="building.jpg" class="img-fluid" alt="none" id="about-image" />
        <div className="caption-image">
          <h1 className="pt-5 fs-1 fw-bold">About Us</h1>
          <p className="fw-light mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            laudantium aut magni commodi temporibus repudiandae veritatis vitae
            culpa dolorum. Facilis!
          </p>
        </div>
      </div>
    
      <div className="container mt-5">
        <div className="row pt-5 ">
          <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12">
            <h1 className="text-center fw-bold pt-3">Our Mission</h1>
            <p className="text-center text-muted">
              Our mission in business development is to empower businesses to
              reach their highest potential. We strive to create innovative
              strategies that drive growth and profitability. By fostering
              strong relationships and understanding market trends, we help
              businesses adapt and thrive in competitive environments. Our goal
              is to be a trusted partner in your journey towards success,
              ensuring sustainable and long-term achievements. Together, we work
              to turn visions into reality, fostering economic prosperity and
              business excellence.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 d-flex justify-content-evenly">
            <img src="developing.jpeg" class="img-fluid rounded" alt="none" />
          </div>
        </div>
      </div>
      {/* grid */}
      <div className="container-fluid mt-5" id="about-icons">
        <div className="row pt-5">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 text-center">
          <FontAwesomeIcon className="display-3" icon="fa-solid fa-business-time" style={{color: "#3498db",}}/>
          <h1 className="fs-2">Managers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, inventore doloribus.</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 text-center">
          <FontAwesomeIcon className="display-3" icon="fa-solid fa-envelope " style={{color: "#3498db",}}/>
          <h1 className="fs-2">Emails</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, inventore doloribus.</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 text-center">
          <FontAwesomeIcon className="display-3" icon="fa-solid fa-industry " style={{color: "#3498db",}}/>
          <h1 className="fs-2">Industry</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, inventore doloribus.</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 text-center">
          <FontAwesomeIcon className="display-3" icon="fa-solid fa-database " style={{color: "#3498db",}}/>
          <h1 className="fs-2">Database</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, inventore doloribus.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
