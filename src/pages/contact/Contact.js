import React from 'react'

import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Contact.css'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
    return (
        <div className="pt-3 pb-3" id="contact">
        <h1 className="text-center font-details-b pb-4">CONATCT ME</h1>
        <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2 contact-item">
            <MailIcon fontSize='large' />
              <span>satyam.singhania123@gmail.com</span>    
            </div>
            <div className="m-2 contact-item">
            <CallIcon fontSize='large'  />
              <span>+91 7037410641</span>
            </div>
            <div className="m-2 contact-item">
            <LinkedInIcon fontSize='large'  />
              <span>www.linkedin.com/in/satyam-singhania</span>
            </div>
          </Col>
        </Row>
      </Jumbotron>
                </div>
        )
     
}

export default Contact
