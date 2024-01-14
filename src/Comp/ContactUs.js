import React from "react";
import Form from "react-bootstrap/Form";
import "../scss/comp/contact.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>contact us</h1>
        <div className="full-info">
          <div className="left-info">
            <div className="social">
              <h4>Bella</h4>
              <h5>FELLOW</h5>
              <div className="communication">
                <div className="icon">
                  <FaFacebook />
                </div>
                <div className="icon">
                  <FaInstagram />
                </div>
                <div className="icon">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="address">
              <h2>address</h2>
              <p>
                1234 street name <span>city, AA 9999</span>
              </p>
            </div>
            <div className="contacts">
              <h2>contacts</h2>
              <p>Email : support@bella.com</p>
              <p>Phone : 01010101010</p>
            </div>
          </div>
          <div className="right-info">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type Your Name Here"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Phone Number"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={2} required />
              </Form.Group>
            </Form>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
