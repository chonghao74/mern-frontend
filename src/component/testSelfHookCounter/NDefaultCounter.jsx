import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import useCouter from "../../hooks/useCouter";

const NDefaultCounter = () => {
  const { count, addFC } = useCouter(0, () => {
    console.log(`一般計數器:${count}`);
  });

  return (
    <div>
      <div>一般計數器：{count}</div>
      <div>
        <Button
          onClick={() => {
            addFC(1);
          }}
        >
          Add 1
        </Button>
      </div>
    </div>
  );
};

export default NDefaultCounter;
