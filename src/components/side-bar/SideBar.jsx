import React from "react";

function SideBar() {
  return (
    <div className="col-lg-3 d-none d-lg-block">
      <a
        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
        data-toggle="collapse"
        href="#navbar-vertical"
        style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
      >
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark" />
      </a>
      <nav
        className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
        id="navbar-vertical"
      >
        <div
          className="navbar-nav w-100 overflow-active"
          style={{ height: 410 }}>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown">
              Men's <i className="fa fa-angle-down float-right mt-1" />
            </a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0 overflow-scroll">
              <a href="/viewdetail" className="dropdown-item">
                kathakali
              </a>
              <a href="" className="dropdown-item">
                poorakali
              </a>
              <a href="" className="dropdown-item">
                parijamutt kali
              </a>
              <a href="" className="dropdown-item">
                pulikali
              </a>
              <a href="" className="dropdown-item">
                ottam thullal
              </a>
              <a href="" className="dropdown-item">
                kol kali
              </a>
              <a href="" className="dropdown-item">
                Drama costumes
              </a>
              <a href="" className="dropdown-item">
                Naadan paattu
              </a>
              <a href="" className="dropdown-item">
                Duffmuttu
              </a>
              <a href="" className="dropdown-item">
                Chakyarkoothu
              </a>
              <a href="" className="dropdown-item">
                Kummattikali
              </a>
              <a href="" className="dropdown-item">
                Chavittu Nadakam{" "}
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown">
              Women's <i className="fa fa-angle-down float-right mt-1" />
            </a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <a href="" className="dropdown-item">
                Thiruvathira
              </a>
              <a href="" className="dropdown-item">
                Oppana
              </a>
              <a href="" className="dropdown-item">
                Margam kali
              </a>
              <a href="" className="dropdown-item">
                Bharathanatyam
              </a>
              <a href="" className="dropdown-item">
                Kuchipudi
              </a>
              <a href="" className="dropdown-item">
                mohiniyattam
              </a>
              <a href="" className="dropdown-item">
                Group dance
              </a>
              <a href="" className="dropdown-item">
                Naadan pattu
              </a>
              <a href="" className="dropdown-item">
                Drama costumes
              </a>
              <a href="" className="dropdown-item">
                Chavittu Nadakam{" "}
              </a>
              <a href="" className="dropdown-item">
                Margam kali
              </a>
              
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown">
              Girl's<i className="fa fa-angle-down float-right mt-1" />
            </a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <a href="" className="dropdown-item">
                Thiruvathira
              </a>
              <a href="" className="dropdown-item">
                Oppana
              </a>
              <a href="" className="dropdown-item">
                Margam kali
              </a>
              <a href="" className="dropdown-item">
                Bharathanatyam
              </a>
              <a href="" className="dropdown-item">
                Kuchipudi
              </a>
              <a href="" className="dropdown-item">
                mohiniyattam
              </a>
              <a href="" className="dropdown-item">
                Group dance
              </a>
              <a href="" className="dropdown-item">
                Naadan pattu
              </a>
              <a href="" className="dropdown-item">
                Drama costumes
              </a>
              <a href="" className="dropdown-item">
                Chavittu Nadakam{" "}
              </a>
              <a href="" className="dropdown-item">
                Margam kali
              </a>
             
            </div>
          </div>

          <div className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown">
              Boy's <i className="fa fa-angle-down float-right mt-1" />
            </a>
            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
              <a href="" className="dropdown-item">
                Thiruvathira
              </a>
              <a href="" className="dropdown-item">
                Oppana
              </a>
              <a href="" className="dropdown-item">
                Margam kali
              </a>
              <a href="" className="dropdown-item">
                Bharathanatyam
              </a>
              <a href="" className="dropdown-item">
                Kuchipudi
              </a>
              <a href="" className="dropdown-item">
                mohiniyattam
              </a>
              <a href="" className="dropdown-item">
                Group dance
              </a>
              <a href="" className="dropdown-item">
                Naadan pattu
              </a>
              <a href="" className="dropdown-item">
                Drama costumes
              </a>
              <a href="" className="dropdown-item">
                Chavittu Nadakam{" "}
              </a>
              <a href="" className="dropdown-item">
                Margam kali
              </a>
              
            </div>
          </div>
        
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
