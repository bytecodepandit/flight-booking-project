import React from "react";
import RegistrationForm from "../../shared/registration-form";
import './style.scss';

const HomeComponent = () => {
  return (
    <div className="container-fluid">
      <div className="col-6"></div>
      <div className="col-6">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default HomeComponent;
