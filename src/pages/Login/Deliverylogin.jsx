import React from 'react'

const Deliverylogin = () => {
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
          
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required=" "
          />{" "}
          <br />
        </div>
        <br />
        <div className="fontpassword">
          <i className="fa fa-key fa-lg " />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
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
          <button type="button" className="btn btn-success">
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
    </div>
  </>
  )
}

export default Deliverylogin