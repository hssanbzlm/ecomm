import React from "react";
import { Card, Button } from "react-bootstrap";

function ItemCard({ item }) {
  return (
    <Card style={{ width: "30%", height: "30%" }}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
