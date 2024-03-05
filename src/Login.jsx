import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Label } from 'reactstrap';
import Nav from 'react-bootstrap/Nav';
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [fields, setFields] = useState({
   
    email: ''
   
  });
  const [errors, setErrors] = useState({
   
    email: '',
   
  });

  const handleValidation = () => {
    let fields = fields;
    let errors = {};
    let formIsValid = true;

   
    
  };

  const handleSubmit = (e) => {
    let errors = {};
    let formIsValid = true;
    
    if (email === "") {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

   

   

    

    if (formIsValid) {
      e.preventDefault();
      alert("The email address  " + email +" respectively.");
   
    } else {
      setErrors(errors);
    }
    };
  return (
    <div className="formMain" style={{marginTop:"20px" ,display:"flex" ,flexDirection:"column",alignItems:"center" ,textAlign:"center" }}>
      <h3>Sign in or create an account</h3>
    <form onSubmit={handleSubmit} autocomplete="off">
     
      <div style={{display:"flex" ,flexDirection:"column" ,width:"400px"}}>
        <label>Email Address</label>
        <input type="email"
           name="email"
           value={email}
           placeholder="Enter your email..."
           onChange={(e) => setEmail(e.target.value)}  />
        <div>{errors["email"]}</div>
      </div>
    
     
      <Button type="submit" style={{width:"100%",height:"50px",marginTop:"15px" , background:"#064cad" ,color:"white" , borderRadius:"5px"}}>Continue With Email</Button>
    </form>
    <div style={{marginTop:"20px" }}>
        <span style={{marginBottom:"50px"}}>or use one of these options</span>
        <div style={{display:"flex" ,alignItems:"center",textAlign:"center"}}>
          <Nav.Link className='googleNav'>
          <FcGoogle style={{fontSize:"28px"}}/>
          </Nav.Link>
          <Nav.Link className='googleNav'>
          <FaSquareFacebook style={{fontSize:"28px"}}/>
          </Nav.Link>
          <Nav.Link className='googleNav'> <IoLogoApple style={{fontSize:"28px"}}/></Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Login;