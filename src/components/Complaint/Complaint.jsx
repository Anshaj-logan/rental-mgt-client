import React from 'react'

const Complaint = () => {
  return (
    <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Register your complaint....</span>
      </h2>
    </div>
    <div className="row px-xl-5">
      <div className="col-lg-7 mb-5">
        <div className="contact-form">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <input
                type="date"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required="required"
                data-validation-required-message="Please enter date"
              />
              <p className="help-block text-danger" />
            </div>
           
          
            <div className="control-group">
              <textarea
                className="form-control"
                rows={6}
                id="message"
                placeholder="Please enter your Complaint"
                required="required"
                data-validation-required-message="Please enter your Complaint"
                defaultValue={""}
              />
              <p className="help-block text-danger"/>
            </div>
            <div>
              <button
                className="btn btn-primary py-2 px-4"
                type="submit"
                id="sendMessageButton"
              >
                Send Complaint
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Complaint