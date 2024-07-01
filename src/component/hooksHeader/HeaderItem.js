import React from "react";
import { Button } from "reactstrap";

const HeaderItem = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "5vw",
          marginRight: "5vw",
          paddingTop: "10px",
        }}
      >
        <Button
          style={{ marginRight: "10px" }}
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          Store
        </Button>
        <div className="header_div_set"></div>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          Mac
        </Button>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          Show Loading
        </Button>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          iPad
        </Button>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          iPhone
        </Button>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          Watch
        </Button>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          Vison
        </Button>
        <Button
          className="header_button_set"
          onClick={() => {
            props.setLoading(!props.loading);
          }}
        >
          AirPods
        </Button>
        <img
          className="header_img_set"
          id="img-three-lines"
          src={`${process.env.PUBLIC_URL}/images/threelineMenu.png`}
          alt="dd"
          onClick={(e) => {
            props.setSlideMenu(e);
          }}
        />
      </div>
    </div>
  );
};

export default HeaderItem;
