import React, { useEffect, useState } from "react";

const useCouter = (initialData, callbackFC) => {
  const [count, setCount] = useState(initialData);

  useEffect(callbackFC, [count]);

  const addFC = (addData) => {
    setCount(count + addData);
  };

  return { count, addFC };
};

export default useCouter;
