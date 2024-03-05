import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Label } from 'reactstrap';

const Register = () => {
    const location = useLocation();
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleValidation = () => {
    let fields = fields;
    let errors = {};
    let formIsValid = true;

    if (fields["name"] === "") {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (fields["email"] === "") {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (fields["phone"] === "") {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (fields["address"] === "") {
      formIsValid = false;
      errors["address"] = "Cannot be empty";
    }

    if (fields["message"] === "") {
      formIsValid = false;
      errors["message"] = "Cannot be empty";
    }

    if (formIsValid) {
      setErrors(errors);
      alert("Form submitted successfully");
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (field, e) => {
    let fields = fields;
    fields[field] = e.target.value;
    setFields(fields);
  };
  return (
    <div> <form onSubmit={handleValidation}>
    <div>
      <Label style={{color :"black"}}>Name:</Label>
      <input type="text" value={fields["name"]} onChange={e => handleChange("name", e)} />
      <div>{errors["name"]}</div>
    </div>
    <div>
      <label>Email:</label>
      <input type="text" value={fields["email"]} onChange={e => handleChange("email", e)} />
      <div>{errors["email"]}</div>
    </div>
    <div>
      <label>Phone:</label>
      <input type="text" value={fields["phone"]} onChange={e => handleChange("phone", e)} />
      <div>{errors["phone"]}</div>
    </div>
    <div>
      <label>Address:</label>
      <textarea value={fields["address"]} onChange={e => handleChange("address", e)} />
      <div>{errors["address"]}</div>
    </div>
    <div>
      <label>Message:</label>
      <textarea value={fields["message"]} onChange={e => handleChange("message", e)} />
      <div>{errors["message"]}</div>
    </div>
    <button type="submit">Submit</button>
  </form></div>
);
};



export default Register