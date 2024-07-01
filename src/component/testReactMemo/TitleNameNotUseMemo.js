import React from "react";

const TitleNameNotUseMemo = (props) => {
  //console.log("TitleName did not used memo.");
  return (
    <div>
      <h3>TitleNameNotUseMemo {props.count}</h3>
    </div>
  );
};

export default TitleNameNotUseMemo;
