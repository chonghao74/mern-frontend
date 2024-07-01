import React from "react";

const TitleNameUseMemo = React.memo(
  (props) => {
    //console.log("TitleName used memo.");
    return (
      <div>
        <h3>TitleNameUseMemo {props.count}</h3>
      </div>
    );
  },
  (pre, next) => {
    //console.log(pre);
    //console.log(next);
    return true;
    //return pre.count === next.count ? true : false;
  }
);

export default TitleNameUseMemo;
