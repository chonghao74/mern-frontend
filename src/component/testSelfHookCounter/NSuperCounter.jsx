import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import useCouter from "../../hooks/useCouter";

const NSuperCounter = () => {
  const { count, addFC } = useCouter(0, () => {
    console.log(`超級計數器：:${count}`);
  });

  return (
    <div>
      <div>超級計數器：{count}</div>
      <div>
        <Button
          onClick={() => {
            addFC(10);
          }}
        >
          Add 10
        </Button>
      </div>
    </div>
  );
};

export default NSuperCounter;
