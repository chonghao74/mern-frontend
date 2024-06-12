import React from "react";
import { Button, Spinner } from "reactstrap";

function Loading(props) {
  const closeLoading = (e) => {
    e.preventDefault();
    props.setLoading(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "200px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Spinner
            color="info"
            size="sm"
            type="grow"
            style={{
              height: "2rem",
              width: "2rem",
            }}
          ></Spinner>
          <label style={{ marginTop: "10px", marginBottom: "10px" }}>
            Data is loading ....
          </label>
          <Button
            color="primary"
            size="lg"
            onClick={(e) => {
              closeLoading(e);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Loading;
