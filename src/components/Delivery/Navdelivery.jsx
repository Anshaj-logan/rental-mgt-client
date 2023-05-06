import React from 'react'

const Navdelivery = () => {
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
      <a href="/deliveryhome" className="nav-item nav-link active">
        Home
      </a>
      {/* <a href="" className="nav-item nav-link active">
        My Status
      </a> */}
      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          My status
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href=" " className="dropdown-item">
             Onduty
          </a>
          <a href="" className="dropdown-item">
            Available
          </a>
          
        </div>
      </div> */}
      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Return orders
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href=" " className="dropdown-item">
             New return orders
          </a>
          <a href="" className="dropdown-item">
            Completed return orders
          </a>
          
        </div>
      </div> */}

    
      {/* </  <a href="" className="nav-item nav-link">
      <Link to={'/contact'}> Contact</Link>
       
      </a>
      <a href="" className="nav-item nav-link">
        <Link to={'/about'}>About</Link>
        a> */}
    </div>
    
  </div>
</nav>
  )
}

export default Navdelivery