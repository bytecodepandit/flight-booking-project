import React from "react";
import RegistrationForm from "../../shared/registration-form";
import Testimonials from "../carousel/testimonials-carousel";
import './style.scss';


const HomeComponent = () => {
  return (
    <div className="container-fluid">
      <div className="col-6">
        <Testimonials />
      </div>
      <div className="col-6">
        {/* <RegistrationForm /> */}
      </div>
    </div>
  );
};

export default HomeComponent;
