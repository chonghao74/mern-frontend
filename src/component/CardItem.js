import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function CardItem(props) {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "yellow",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.subtitle}
          </CardSubtitle>
          <CardText>{props.content}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardItem;
