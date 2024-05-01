import React from "react";
import Card from "./card";

const cardData = [
  { title: "Web Development", imageSrc: "webdevelopment.jpg"},
  { title: "Software Development", imageSrc: "softwaredevelopment.jpg"},
  { title: "App Development", imageSrc: "appdevelopment.jpg"},
  { title: "Digital Marketing", imageSrc: "digitalmarketing.avif"},
  { title: "Trading", imageSrc: "Trading.jpg"},
  { title: "Ecommerce", imageSrc: "ecommerce.jpg"},
  
];

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center fw-semibold">Our Services</h1>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             
                {
                  cardData.map((data, index) => (
                    <Card key={index} {...data} />
                  ))
                  /* {
                Array.from({ length: 6 }, (index) => (
                  <Card key={index} />
                ))
                } */}
              </div>
            </div>
          </div>
        </div>
     

        
    </>
  );
};

export default Service;