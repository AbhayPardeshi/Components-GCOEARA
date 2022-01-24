import React from "react";
import ReactDOM from "react-dom";
import "./contact-us.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <section className="contact-us-section ">
      <p className="top-heading">Contact Us</p>
      {/* Breadcrumb  */}
      <nav className="breadcrumb-nav" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
      {/* Info-Section */}
      <div className="info-section">
        <div className="row">
          {/* Left Info Section */}
          <div className="left-column col-md-5 col-sm-12 d-flex flex-column align-items-md-center ">
            <h4>Address</h4>
            <span className="p-right-2">
              Government College of Engineering & Research
              <br />
              Avasari - Khurd,
              <br />
              Taluka - Ambegaon, District - Pune 412405.
              <br />
              Maharashtra, India.
            </span>
            <hr />
            <span>
              Telephone: 02133- 230582
              <br />
              Fax: 02133-230583
              <br />
              Email: office.gcoeavasari@dtemaharashtra.gov.in
            </span>
            <hr />
            <h4>Admission</h4>
            <span>
              For questions about applying to GCOEARA,
              <br />
              visit<a href="#"> Admission </a>section
              <br />
              or mail for F.E. Admission - fe.adm@gcoeara.ac.in
              <br />
              and for D.SE. Admission - dse.adm@gcoeara.ac.in
            </span>

            <hr />
            <div className="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.7167024527316!2d73.96130341422857!3d18.988114887138327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd311765784c79%3A0xc4f5ab54cf1febbb!2sGovernment%20College%20Of%20Engineering%20And%20Research%2C%20Avasari%20Khurd!5e0!3m2!1sen!2sin!4v1642748664911!5m2!1sen!2sin"
                width="300"
                height="200"
                allowfullscreen=""
              ></iframe>
            </div>
            <hr />
          </div>

          <br />

          {/* Right-Info Section */}
          <div className="right-column col-md-6 col-sm-12 ">
            <h4>General Enquries</h4>
            <form className="enquiry-form">
              <label for="InputName" className="form-label">
                Name:
              </label>
              <input
                className="form-control "
                type="text"
                aria-label=".form-control-sm example"
              ></input>
              <label for="InputPhoneNo" className="form-label">
                Phone No:
              </label>
              <input
                className="form-control"
                type="text"
                aria-label=".form-control-sm example"
              ></input>
              <label for="InputEmail" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
              ></input>
              <label for="question" className="form-label">
                Question:
              </label>
              <textarea
                className="form-control"
                id="messageTextarea"
                rows="3"
              ></textarea>
              <input
                class="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

ReactDOM.render(<ContactUs />, document.getElementById("root"));
