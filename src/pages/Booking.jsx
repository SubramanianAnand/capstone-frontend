import axios from "axios";
import { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

const Booking = () => {

  const serviceType = useRef("");
  const serviceName = useRef("");
  const price = useRef("");
  
  const navigate = useNavigate();

  const addServiceHandler = () => {
    var payload = {
      type: serviceType.current.value,
      name: serviceName.current.value,
      price: price.current.value,
    };
    axios.post("http://localhost:4000/myorders", payload).then(() => {
      navigate("/orders");
    });
  };
  return (
    <>
      <h2>Create</h2>
      <Form className="container">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Service Type</Form.Label>
          <Form.Control type="text" ref={serviceType} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Service Name</Form.Label>
          <Form.Control type="text" ref={serviceName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" ref={price} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addServiceHandler}>
          Book
        </Button>
      </Form>
    </>
  );
};

export default Booking;
