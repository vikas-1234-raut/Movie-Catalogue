import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { NavLink } from "react-router-dom";
import bg_img from "./background.jpg";
import logo from "./MainLogo.png";


const Signup = () => {
 

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      alert("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      alert("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      alert("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      alert("data added succesfully");
      
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      {/* <div className="signup_main">
        <section className="Signup_section"> */}
        <div className="bg_img"
            style={{ backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${bg_img})`}}>
          <div className="Signup_box">
          <img src={logo} alt="logo" />
            <Form>

            <h1 className="Signup_heading">Sign Up</h1>

              <Form.Group className="Signup_name">
                <Form.Control className="Signup_name_box" type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="Signup_mail" >
                <Form.Control className="Signup_email_box" type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="Signup_date">
                <Form.Control className="Signup_date_box" onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group className="Signup_password" >
                <Form.Control className="Signup_password_box" type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
              <Button className="Signup_button" variant="primary" onClick={addData}  type="submit" >
                Submit
                
              </Button>
              <p className="Login_link"> <h3>Now You Can</h3> {" "} <span> <NavLink to="/login"><h3>Login</h3></NavLink> </span>{" "} </p>
            </Form>
          </div>
          
        
         </div>
    </>
  );
};

export default Signup;
