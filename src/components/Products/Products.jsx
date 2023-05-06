import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Our Recent Collections</span>
      </h2>
    </div>
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100 h-50" src="img\images\kathakali\kathakali4.1.jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">kathakali</h6>
            <div className="d-flex justify-content-center">
              <h6>Rental price:700.00</h6>
              {/* <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6> */}
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/Viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-90" src="img\images\th (2).jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Bharathanatyam</h6>
            <div className="d-flex justify-content-center">
            <h6>Rental price:500.00</h6>
              {/* <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6> */}
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img\images\minukku\minukku1.1.jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Minukku</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img\images\kuchipudi.jpg"alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Kuchipudi</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img\images\th (2).jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img\images\th (2).jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img\images\th (2).jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              <Link to={'/viewdetail'}>View Detail</Link>
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img\images\th (2).jpg" alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6>
              <h6 className="text-muted ml-2">
                <del>$123.00</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href="" className="btn btn-sm text-dark p-0">
                <Link to={'/viewdetail'}>View Detail</Link>
              <i className="fas fa-eye text-primary mr-1" />
              
            </a>
            <a href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              <Link to={'/addtocart'}>Add To Cart</Link>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Products