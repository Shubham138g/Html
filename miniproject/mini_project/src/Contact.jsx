import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    adderess: "",
    contact: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fname} ${data.lname} and my adderss is ${data.adderess} and phone no. is ${data.phone}`
    );
  };
  const showData = () => {
    alert(
      `My Name is ${data.fname} ${data.lname} and my adderss is ${data.adderess} and phone no. is ${data.phone}`
    );
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center text-capitalize ">Contact Us</h1>
      </div>
      <div className=" container container-fluid">
        <div className="row">
          <div className="col-10 max-auto">
            <form onSubmit={formSubmit}></form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="email"
                className="form-control"
                name="fname"
                value={data.fname}
                id="fname"
                onChange={InputEvent}
                placeholder="Enter your First Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last Name
              </label>
              <input
                type="email"
                className="form-control"
                name="lname"
                value={data.lname}
                id="lname"
                onChange={InputEvent}
                placeholder="Enter your Last Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Adderess
              </label>
              <input
                type="email"
                className="form-control"
                name="adderess"
                value={data.adderess}
                id="Adderess"
                onChange={InputEvent}
                placeholder="Enter your Adderess"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone No.
              </label>
              <input
                type="email"
                className="form-control"
                name="phone"
                value={data.phone}
                id="phone"
                onChange={InputEvent}
                placeholder="Enter your Phone No."
              />
            </div>
            <div className="mb-3 my-5">
              <button
                type="submit"
                onClick={showData}
                className="btn btn-outline-primary card_btn"
              >
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
