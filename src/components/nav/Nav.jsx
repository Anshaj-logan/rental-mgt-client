import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
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
    <a href="" className="nav-item nav-link">
      <Link to={"/Login"}>Login </Link>

      </a>
     
{/*       
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          service
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="" className="dropdown-item">
            Fast Shipping
          </a>
          <a href="" className="dropdown-item">
            24/7 Support
          </a>
          <a href="" className="dropdown-item">
            Quality Product
          </a>
          <a href="" className="dropdown-item">
            
          </a>
        </div>
      </div> */}
      
      <a href="Register" className="nav-item nav-link">
       Register 
      </a>

      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
        Register
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="/User-Register" className="dropdown-item">
          user Register
           
          </a>
          <a href="" className="dropdown-item">
          DeliveryBoy Register
          </a>
          
        </div>
      </div> */}
      
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
