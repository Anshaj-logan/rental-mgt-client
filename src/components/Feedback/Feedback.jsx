import React from 'react'

const Feedback = () => {
  return (
    <div className="col-lg-7 mb-5">
    <div className="contact-form">
      <div id="success" />
      <form name="sentMessage" id="contactForm" noValidate="novalidate">
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Username"
            required="required"
            data-validation-required-message="Please enter your name"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group col-lg-3">
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder=""
            required="required"
            data-validation-required-message="enter date"
          />
          <p className="help-block text-danger" />
        </div>
        {/* <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
            required="required"
            data-validation-required-message="Please enter a subject"
          />
          <p className="help-block text-danger" />
        </div> */}
        <div className="control-group">
          <textarea
            className="form-control"
            rows={6}
            id="message"
            placeholder="Feedback"
            required="required"
            data-validation-required-message="Please enter your Feedback"
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
            Send Feedback
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Feedback