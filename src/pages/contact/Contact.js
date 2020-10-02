import React from "react";

import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Contact.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div className="pt-3 pb-3 contact-container" id="contact">
      <h1 className="text-center font-details-b pb-4">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2 contact-item">
              <MailIcon fontSize="large" />
              <p>satyam.singhania123@gmail.com</p>
            </div>
            <div className="m-2 contact-item">
              <CallIcon fontSize="large" />
              <p>+91 7037410641</p>
            </div>
            <div className="m-2 contact-item">
              <LinkedInIcon fontSize="large" />
              <p>www.linkedin.com/in/satyam-singhania</p>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;
