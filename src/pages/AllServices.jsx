import React from "react";
import axios from "axios";
import "../styles/AllServices.css";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import DoneIcon from '@mui/icons-material/Done';
import MyOrders from "./MyOrders";
import { Typography } from "@mui/material";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/services").then((response) => {
      setAllServices(response.data);
    });
  }, []);

  return (
    <div className="all">
      {/* <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/booking")}>
            Place Order
          </Button>
        </Col>
      </Row> */}
      <br />
      <h1 style={{ textAlign: "center", color: "#F26E1F" }}>Service List</h1>
      <br />
      <p style={{  color: "#FCF5F3" }}>General Bike Service Check-list:</p>
      <ul style={{ color: "#FCF5F3" }}>
        <li>
           <div>Air Filter Cleaning</div>
        </li>
        <br/>
        <li>
           <div>Chain Lubrication</div>
        </li>
        <br/>
        <li>
           <div>Engine Oil Checking/Replacement</div>
        </li>
        <br/>
        <li>
          <div>Spark Plug Cleaning</div>
        </li>
        <br/>
        <li>
          <div>Brake Shoe/Pad Roughing</div>
        </li>
        <br/>
        <li>
          <div>Clutch Cable Lubrication</div>
        </li>
        <br/>
        <li>
          <div>Disc Brake Oil Check/Top-Up</div>
        </li>
        <br/>
        <li>
          <div>Accelerator Cable Lubrication</div>
        </li>
        <br/>
        <li>
          <div>Self Motor Checking</div>
        </li>
        <br/>
        
        <li>
          <div>Vehicle Washing/ Eco Wash</div>
        </li>
        <br/>
        <li>
          <div>Nut and Bold Adjustments</div>
        </li>
        <br/>
        <li>
          <div>Tyre Pressure Check</div>
        </li>
        <br/>
      </ul>
      <Row className="container1">
        {allServices.map((item) => (
          <Col key={item.id}>
            <Card className="card1">
              <Card.Body className="cardbody">
                <Card.Title className="cardtext">{item.type}</Card.Title>
                <Card.Text className="cardtext">
                  Service Name - {item.name}
                </Card.Text>
                <Card.Text className="cardtext">Price - {item.price}</Card.Text>
                <Button
                  className="btn"
                  variant="primary"
                  onClick={() => navigate(`/update/${item.id}`)}
                  //style={{backgroundColor:"#F26E1F"}}
                >
                  Book Order
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
