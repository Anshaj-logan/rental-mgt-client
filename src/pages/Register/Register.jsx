import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone_no: "",
    email: "",
    area: "",
    username: "",
    password: "",
    cnf_password:""
  });
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const validate = (values) => {
    var error = {};
    if (!values.username) {
      error.username = "Enter Username";
    }
    if (!values.password) {
      error.password = "Enter Password";
    }
    if (!values.name) {
      error.name = "Enter Your Name";
    }
    if (!values.phone_no) {
      error.phone_no = "Enter Your PhoneNumber";
    }
    if (!values.email) {
      error.email = "Enter Your Email";
    }
    if (!values.house_name) {
      error.house_name = "Enter House name";
    }
    if (!values.place) {
      error.place = "Enter Place";
    }
    if (!values.district) {
      error.district = "Enter District";
    }
    if (!values.pin) {
      error.pin = "Enter Pincode";
    }
    return error;
  };

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    setformErrors(validate(inputs));
    setIssubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post("http://localhost:2000/api/register", inputs)
        .then((data) => {
          console.log(data);
          // console.log(data.response.data.message);
          toast(data.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((err) => {
          console.log(err);
          toast(err.response.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <>
      <link rel="stylesheet" href="css\reg.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="container">
        <div className="pic">
          <img src="img\images\woman-stand.avif" alt="" />
          {/* <img src="img\images\red.jpg" alt=""> */}
        </div>
        <div className="forms">
          <ToastContainer />
          <form onSubmit={registerSubmit}>
            <br />
            <br />
            <h1>Registration Form</h1>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="">Name</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.name ? formErrors.name : ""}
                    </span>
                    <input 
                    type="text"
                    name="name" value={inputs.name || ""}
                    onChange={setRegister}
                    onClick=
                    {() => {
                      setformErrors({ ...formErrors, name: "" });
                    }} 
                    />
                    
                  </td>
                  <td>
                    <label htmlFor="">User Name</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.username ? formErrors.username : ""}
                    </span>
                    <input 
                    type="text" 
                    
                    name="username" value={inputs.username || ""}
                    onChange={setRegister}
                    onClick=
                    {() => {
                      setformErrors({ ...formErrors, username: "" });
                    }} 
                    
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">E-mail</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.email ? formErrors.email : ""}
                    </span>
                    <input 
                    type="email" 
                    name="email" value={inputs.email || ""}
                    onChange={setRegister}
                    onClick=
                    {() => {
                      setformErrors({ ...formErrors, email: "" });
                    }} 
                    />
                  </td>
                  <td>
                    <label htmlFor="">Phone Number</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.phone_no ? formErrors.phone_no : ""}
                    </span>
                    <input
                     type="tel" 
                     name="phone_no" value={inputs.phone_no || ""}
                     onChange={setRegister}
                     onClick=
                     {() => {
                       setformErrors({ ...formErrors, phone_no: "" });
                     }} 
                     />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">House Name</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.house_name ? formErrors.house_name : ""}
                    </span>
                    <input 
                    type="text" 
                    name="house_name" value={inputs.house_name || ""}
                     onChange={setRegister}
                     onClick=
                     {() => {
                       setformErrors({ ...formErrors, house_name: "" });
                     }} 
                    />
                  </td>
                  <td>
                    <label htmlFor="">Place</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.place ? formErrors.place : ""}
                    </span>
                    <input 
                    type="text"
                    name="place" value={inputs.place || ""}
                     onChange={setRegister}
                     onClick=
                     {() => {
                       setformErrors({ ...formErrors, place: "" });
                     }}  
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">PIN</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.pin ? formErrors.pin : ""}
                    </span>
                    <input
                     type="number" 
                     name="pin" value={inputs.pin || ""}
                     onChange={setRegister}
                     onClick=
                     {() => {
                       setformErrors({ ...formErrors, pin: "" });
                     }}  
                     />
                  </td>
                  <td>
                    <label htmlFor="">District</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.district ? formErrors.district : ""}
                    </span>
                    <input
                     type="text" 
                     name="district" value={inputs.district || ""}
                     onChange={setRegister}
                     onClick=
                     {() => {
                       setformErrors({ ...formErrors, district: "" });
                     }} 
                     />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Password</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.password ? formErrors.password : ""}
                    </span>
                    <input
                     type="password" 
                     name="password" value={inputs.password || ""}
                     onChange={setRegister}
                     onClick=
                     {() => {
                       setformErrors({ ...formErrors, password: "" });
                     }} 
                     />
                  </td>
                  <td>
                    <label htmlFor="">Confirm Password</label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {formErrors.password ? formErrors.password : ""}
                    </span>
                    <input 
                    type="password" 
                    name="cnf_password" value={inputs.cnf_password || ""}
                    onChange={setRegister}
                    onClick=
                    {() => {
                      setformErrors({ ...formErrors, password: "" });
                    }} 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
