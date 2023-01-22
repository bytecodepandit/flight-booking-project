import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./style.scss";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="registration-form-container">
      <h2 className="heading">Hello, Again!</h2>
      <p className="p-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Form className="registration-form">
        <FloatingLabel
          controlId="floatingInput"
          label="Customer ID"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Customer ID" {...register("customerId", {required: true})}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="Email" {...register("emailId", {required: true})}/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {required: true})}
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <BsFillEyeFill color="#666666" />
            ) : (
              <BsFillEyeSlashFill color="#666666" />
            )}
          </span>
        </FloatingLabel>
        <a className="forget-password">Forget Password?</a>
        <Button
          className="btn btn-primary btn-submit"
          variant="primary"
          type="submit"
          onClick={handleSubmit((data) => console.log(data))}
        >
          Sign In
        </Button>
      </Form>
      <p className="register">
        Don’t have an account? <a href="#">Register</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
