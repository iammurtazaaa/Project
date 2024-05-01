import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Card = ({ title, imageSrc}) => {
  return (
    <>
              <div className="col-md-4 col-10 mx-auto text-center">
                <div className="card" style={{height: '24rem',}}>
                  <img src={imageSrc} className="card-img-top" alt="{title}" />
                  <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="/contact" class="btn btn-danger">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
    </>
  );
};

export default Card;
