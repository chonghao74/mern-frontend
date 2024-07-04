import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const ODefaultCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`一般計數器:${count}`);
  }, [count]);

  return (
    <div>
      <div>一般計數器：{count}</div>
      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add 1
        </Button>
      </div>
    </div>
  );
};

export default ODefaultCounter;
