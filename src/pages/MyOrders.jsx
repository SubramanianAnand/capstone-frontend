import React from "react";
import "../styles/MyOrders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MyOrders = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/myorders").then((response) => {
      setAllServices(response.data);
    });
  }, []);
  return (
    <div className="my">
      <br />
      <h1 style={{ textAlign: "center", color: "#F26E1F" }}>MyOrders</h1>
      <br />
      <Row className="container1">
        {allServices.map((item) => (
          <Col key={item.id}>
            <Card className="card1">
              <Card.Body className="cardbody1">
                <Card.Title className="cardtext1">{item.type}</Card.Title>
                <Card.Text className="cardtext1">
                  {item.name}
                </Card.Text>
                <Card.Text className="cardtext1">
                  Service Cost- {item.price}
                </Card.Text>
                <br />
                
                
                 <h2 style={{ textAlign: "center", color: "#F26E1F" }}>
                  Service Booked
                </h2> 
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;
