import React from 'react';
import img1 from "../src/image/img1.svg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
       <section className="d-flex align-items-center" id="header">
        <div className=" container container-fluid">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column">
                  <h1>
                   {props.name}
                    <strong className="brand_name"> MiniProject</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developers making website
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 mt-5 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
