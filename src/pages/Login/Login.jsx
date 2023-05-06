
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Login = () => { 
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
const navigate = useNavigate()
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
   
  };

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    return error
  }

  const validation = (e)=>{
    console.log(Input);
    e.preventDefault()
    setformErrors(validate(Input))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post("http://localhost:2000/api/login/",Input).then((response)=>{
        console.log(response);
        toast(response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        if (response.data.success === true) {
          if (response.data.role === "1") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("staff_id", response.data.staff_id)
              sessionStorage.setItem("currentloggedin", response.data.name);
              navigate("/userhome")
          }
          // else if (response.data.role === "3") {
          //   localStorage.setItem("name", response.data.username)
          //   localStorage.setItem("loginId", response.data.login_id)
          //   localStorage.setItem("role", response.data.role)
          //   localStorage.setItem("worker_id", response.data.worker_id)
          //   sessionStorage.setItem("currentloggedin", response.data.username);
          //     navigate("/homeworker")
          // }
          // else if (response.data.role === "2") {
          //   console.log("jiiii");
          //     localStorage.setItem("name", response.data.username)
          //     localStorage.setItem("loginId", response.data.login_id)
          //     localStorage.setItem("role", response.data.role)
          //     localStorage.setItem("student_id", response.data.student_id)
          //     sessionStorage.setItem("currentloggedin", response.data.username);
          //     navigate('/homestudent')
          // }
      }
      }).catch((err)=>{
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
      })
    }
  }
  return (
    <>
  <link rel="stylesheet" href="css\login.css" />
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
  <div className="img1">
    {" "}
    <img
      src="img\images\2isolated-dark-background.jpg"
      width="100%"
      height="15%"
    />
  </div>
  <div className="box2">
    <ToastContainer/>
  <form onSubmit={validation}>
    <center>
      <div className="text">
        <h1>
          <br />
          <br />
          LOGIN FORM
        </h1>
      </div>
      <br />
      
      <div className="fontuser">
     
      <i className="fa fa-user fa-lg" />
      <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={inputChange}
          onClick={()=>{setformErrors({...formErrors,username:""})}}
         
          name="username"
          
        />{" "}
        <br />
      </div>
      <br />
      <div className="fontpassword">
        <i className="fa fa-key fa-lg " />
        <br />
        <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={inputChange}
          onClick={()=>{setformErrors({...formErrors,password:""})}}
         
          name="password"
          
          
        />
      </div>
      <br />
      <div className="link">
        <a href="#">
          <b>Forget Password?</b>
        </a>
      </div>
      <br />
      <br />
      <div>
        <button type="submit" className="btn btn-success">
          <b>Login</b>
        </button>
      </div>
      <br />
      <div>
        <p>
          <b>Don't have account?</b>
          <a href="#">
            &nbsp;<b>Signup Now</b>
          </a>
        </p>
      </div>
      
    </center>
    </form>
  </div>
</>
  )
}

export default Login