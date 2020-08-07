import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const handleSubmit = (event) => {};

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "2em" }}>Contact Us</h1>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button
          style={{ marginBottom: "3em" }}
          type="reset"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <p>
        You can also reach us at: contact@sividend.com
        <br />
        <br /> <br /> <br /> <br /> <br /> <br />
      </p>
    </div>
  );
};

export default Contact;
