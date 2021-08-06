import React, { useState, useEffect } from "react";

/* Home of main page*/
export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };

  return <div onClick={onClick}>{"Count: " + count}</div>;
}
