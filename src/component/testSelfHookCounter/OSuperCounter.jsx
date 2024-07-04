import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const OSuperCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`超級計數器：:${count}`);
  }, [count]);

  return (
    <div>
      <div>超級計數器：{count}</div>
      <div>
        <Button
          onClick={() => {
            setCount(count + 10);
          }}
        >Add 10</Button>
      </div>
    </div>
  );
};

export default OSuperCounter;
