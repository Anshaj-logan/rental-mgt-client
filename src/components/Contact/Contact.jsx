import React from 'react'

const Contact = () => {
  return (
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Contact For Any Queries</span>
      </h2>
    </div>
    <div className="row px-xl-5">
      <div className="col-lg-7 mb-5">
        <div className="contact-form">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required="required"
                data-validation-required-message="Please enter your name"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required="required"
                data-validation-required-message="Please enter your email"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="date"
                className="form-control"
                id="name"
                placeholder="Date"
                required="required"
                data-validation-required-message="Please enter date"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea
                className="form-control"
                rows={6}
                id="message"
                placeholder="Message"
                required="required"
                data-validation-required-message="Please enter your message"
                defaultValue={""}
              />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button
                className="btn btn-primary py-2 px-4"
                type="submit"
                id="sendMessageButton"
              >
                Send Message
              </button>
            &nbsp; &nbsp;
              <a href="/replies"
                className="btn btn-primary py-2 px-4"
                type="submit"
                id="sendMessageButton"
              >
                View replies 
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 mb-5">
        {/* <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5> */}
       
        <div className="d-flex flex-column mb-3">
          <h5 className="font-weight-semi-bold mb-3">Address</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3" />
            Lakshmi Dance Costumes and Fancy-Calicut
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3" />
            Lakshmicostume12@gmail.com
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt text-primary mr-3" />
            7510394854,
            9947681474
          </p>
        </div>
     
      </div>
    </div>
  </div>
  )
}

export default Contact