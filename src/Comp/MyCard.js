import React from "react";
import { Card } from "react-bootstrap";

const MyCard = () => {
  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
