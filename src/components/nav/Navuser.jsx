import React from 'react'
import { Link } from 'react-router-dom'

const Navuser = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
  <a href="" className="text-decoration-none d-block d-lg-none">
    <h1 className="m-0 display-5 font-weight-semi-bold">
      <span className="text-primary font-weight-bold border px-3 mr-1">
        Costume
      </span>
      Rental
    </h1>
  </a>
  <button
    type="button"
    className="navbar-toggler"
    data-toggle="collapse"
    data-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div
    className="collapse navbar-collapse justify-content-between"
    id="navbarCollapse"
  >
    <div className="navbar-nav mr-auto py-0">
      <a href="" className="nav-item nav-link active">
      <Link to={"/"}> Home </Link>
      </a>
     
  
      {/* <a href="" className="nav-item nav-link">
       <Link to={"/About"}> About </Link>
      </a> */}
      <a href="" className="nav-item nav-link">
        <Link to={"/Contact"}> Contact </Link>
      </a>
     

      
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
        Orders
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="" className="dropdown-item">
          <Link to={"/Orders"}>Upcoming Orders</Link>
           
          </a>
          <a href="" className="dropdown-item">
          <Link to={"/Purchased"}>Purchased</Link>
          </a>
          
        </div>
      </div>

     
   
      
     
          
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Complaint
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="" className="dropdown-item">
          <Link to={"/Complaint"}>Send Complaint..</Link>
           
          </a>
          <a href="" className="dropdown-item">
          <Link to={"/replycomplaint"}>View Complaints & reply</Link>
          </a>
          
        </div>
      </div>
      
    </div>
    {/* <div className="navbar-nav ml-auto py-0">
      <a href="" className="nav-item nav-link">
      <Link to={"/Login"}>Login </Link>

      </a>
      <a href="" className="nav-item nav-link">
      <Link to={"/Register"}> Register </Link>
      </a>
    </div> */}
  </div>
</nav>

  )
}

export default Navuser