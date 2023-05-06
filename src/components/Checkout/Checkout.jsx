import React from 'react'

const Checkout = () => {
  return (
    <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div className="mb-4">
          <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
          <div className="row">
            <div className="col-md-6 form-group">
              {/* <label>First Name</label> */}
              <input className="form-control" type="text" placeholder="First Name" />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>Last Name</label> */}
              <input className="form-control" type="text" placeholder="Last Name" />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>E-mail</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>Mobile No</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>Address Line 1</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Address Line"
              />
            </div>
           
            <div className="col-md-6 form-group">
              {/* <label>Country</label> */}
              <select className="custom-select">
                <option selected="">India</option>
                <option>USA</option>
                <option>UAE</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              {/* <label>City</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>State</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>ZIP Code</label> */}
              <input className="form-control" type="text" placeholder="PIN" />
            </div>
            <div className="col-md-12 form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="newaccount"
                />
                {/* <label className="custom-control-label" htmlFor="newaccount">
                  Create an account
                </label> */}
              </div>
            </div>
            <div className="col-md-12 form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="shipto"
                />
                <label
                  className="custom-control-label"
                  htmlFor="shipto"
                  data-toggle="collapse"
                  data-target="#shipping-address"
                >
                  Ship to different address
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse mb-4" id="shipping-address">
        <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
          <div className="row">
            <div className="col-md-6 form-group">
              {/* <label>First Name</label> */}
              <input className="form-control" type="text" placeholder="First Name" />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>Last Name</label> */}
              <input className="form-control" type="text" placeholder="Last Name" />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>E-mail</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>Mobile No</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>Address Line 1</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="Address Line 1"
              />
            </div>
           
            <div className="col-md-6 form-group">
              {/* <label>Country</label> */}
              <select className="custom-select">
                <option selected="">India</option>
                <option>USA</option>
                <option>UAE</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              {/* <label>City</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>State</label> */}
              <input
                className="form-control"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="col-md-6 form-group">
              {/* <label>ZIP Code</label> */}
              <input className="form-control" type="text" placeholder="PIN" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Order Total</h4>
          </div>
          <div className="card-body">
            <h5 className="font-weight-medium mb-3">Products</h5>
            <div className="d-flex justify-content-between">
              <p>kathakali costume</p>
              <p>$150</p>
            </div>
            {/* <div className="d-flex justify-content-between">
              <p>Colorful Stylish Shirt 2</p>
              <p>$150</p>
            </div> */}
            {/* <div className="d-flex justify-content-between">
              <p>Colorful Stylish Shirt 3</p>
              <p>$150</p>
            </div> */}
            <hr className="mt-0" />
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Subtotal</h6>
              <h6 className="font-weight-medium">$150</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">$160</h5>
            </div>
          </div>
        </div>
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Payment</h4>
          </div>
          <div className="card-body">
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="paypal"
                />
                <label className="custom-control-label" htmlFor="paypal">
                  UPI
                </label>
              </div>
            </div>
            {/* <div className="form-group">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="directcheck"
                />
                <label className="custom-control-label" htmlFor="directcheck">
                  Direct Check
                </label>
              </div>
            </div> */}
            <div className="">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="banktransfer"
                />
                <label className="custom-control-label" htmlFor="banktransfer">
                  Cash on delivery
                </label>
              </div>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <a href="/ordersuccess"><button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
              Place Order
            </button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Checkout