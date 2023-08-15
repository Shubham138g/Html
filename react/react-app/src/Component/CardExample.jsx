import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card,Button } from "react-bootstrap";

export default function CardExample(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </>
  );
}
