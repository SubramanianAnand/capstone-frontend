import React from "react";
import "../styles/update.css";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";

const Update = () => {
  
  const serviceType = useRef("");
  const serviceName = useRef("");
  const price = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/services/${id}`).then((response) => {
      serviceType.current.value = response.data.serviceType;
      serviceName.current.value = response.data.serviceName;
      price.current.value = response.data.price;
    });
  }, []);

  const updateServiceHandler = () => {
    var payload = {
      type: serviceType.current.value,
      name: serviceName.current.value,
      price: price.current.value,
    };

    axios.post(`http://localhost:4000/myorders`, payload).then((response) => {
      navigate("/orders");
    });
  };

  return (
    <div className="all1">
      <br />
      <br />
      <h2 style={{ textAlign: "center", color: "#FB9F06" }}>
        Confirm your Order
      </h2>
      <br />
      
      <Form className="update">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Bike Brand & Model Name</Form.Label>
          <Form.Control type="text" ref={serviceType} />
        </Form.Group>
        {/* <Form.Select aria-label="Default select example">
            <option>Select your Bike Brand</option>
            <option value="1">Honda</option>
            <option value="2">Hero</option>
            <option value="3">Yamaha</option>
            <option value="4">Suzuki</option>
            <option value="5">Bajaj</option>
            <option value="6">KTM</option>
            <option value="7">Royal Enfield</option>
          </Form.Select> */}
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Bike Number</Form.Label>
          <Form.Control type="text" ref={serviceName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Service Cost</Form.Label>
          <Form.Control type="text" ref={price} />
        </Form.Group>
        <Button
          variant="contained"
          onClick={updateServiceHandler}
          style={{ backgroundColor: "#F26E1F" }}
        >
          Confirm
        </Button>
        {/* <Button variant="primary" type="button"   >
          Confirm
        </Button> */}
      </Form>
    </div>
  );
};

export default Update;
