import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "../style/card.css";

function CardItem(props) {
  const showAlert = (data) => {
    window.alert(data);
  };

  return (
    <div>
      <Card
        style={{
          width: "200px",
          backgroundColor: "yellow",
          margin: "10px 50px",
        }}
      >
        <img
          className="card_img"
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <CardBody>
          <CardTitle tag="h5" id="card_title">
            {props.title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.subtitle}
          </CardSubtitle>
          <CardText>{props.content}</CardText>
          <Button
            block
            color="success"
            onClick={() => {
              showAlert(props.content);
            }}
          >
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardItem;
