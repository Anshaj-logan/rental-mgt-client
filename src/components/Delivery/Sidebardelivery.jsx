import React from 'react'

const Sidebardelivery = () => {
  return (
    <div className="col-lg-3 d-none d-lg-block">
    <a
      className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
      data-toggle="collapse"
      href="#navbar-vertical"
      style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
    >
      <h6 className="m-0">Notifications</h6>
      <i className="fa fa-angle-down text-dark" />
    </a>
    <nav
      className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
      id="navbar-vertical"
    >
      <div
        className="navbar-nav w-100 overflow-hidden"
        style={{ height: 410 }}>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown">
            Orders <i className="fa fa-angle-down float-right mt-1" />
          </a>
          <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
            <a href="/Neworders" className="dropdown-item">
              New orders
            </a>
            <a href="/completedorders" className="dropdown-item">
              Completed orders
            </a>
            
          </div>
        </div>
        
        <div className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown">
            Return orders<i className="fa fa-angle-down float-right mt-1" />
          </a>
          <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
            <a href="/Newreturnorders" className="dropdown-item">
              New Return Orders
            </a>
            <a href="/completedreturnorders" className="dropdown-item">
              Completed Return Orders
            </a>
           
            
          </div>
        </div>
{/* 
        <div className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown">
            Boy's <i className="fa fa-angle-down float-right mt-1" />
          </a>
          <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
            <a href="" className="dropdown-item">
              Thiruvathira
            </a>
            
          </div>
        </div> */}
      
      </div>
    </nav>
  </div>
  )
}

export default Sidebardelivery