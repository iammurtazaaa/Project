import React from "react";
// import React, { useState } from "react";

// const [data, setData] = useState ({
//   fullname: " ",
//   phone: " ",
//   email: " ",
//   message: " ",
// })


// const formSubmit = () =>{

// }
const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center fw-semibold">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1" 
                name="fullname"
                // value={}
                // onChange={}
                placeholder="Enter your name"
                required autoFocus
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="phone"
                class="form-control"
                id="exampleFormControlInput1" 
                name="phone"
                // value={}
                // onChange={}
                placeholder="Enter your phone"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1" 
                name="email"
                // value={}
                // onChange={}
                placeholder="name@example.com"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                // value={}
                // onChange={}
                rows="3"
              ></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
