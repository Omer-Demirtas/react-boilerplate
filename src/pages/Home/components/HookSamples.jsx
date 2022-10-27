import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const HookSamples = ({ initCount, handleIncrease, ...props }) => {
  const [counter, setCounter] = useState(initCount);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    setTimeout(() => {
      console.log("Hallo");
    }, 3000);

    return () => {
      console.log("finish");
    };
  }, []);

  useEffect(() => {
    function doSomething() {
      console.log(`init Counter : ${initCount}`);
    }

    doSomething();
  }, [initCount]);

  useEffect(() => {
    console.log(`Counter : ${counter}`);
  }, [counter]);

  useEffect(() => {
    console.log(`Hour : ${hour}`);
  }, [hour]);

  console.log("RENDER HOOK");
  return (
    <div>
      Counter {counter} hour {hour}
      <Button onClick={() => setCounter(counter + 1)}>increase Counter</Button>
      <Button onClick={() => setHour(hour + 1)}>increase Hour</Button>
      <div>
        <Button onClick={handleIncrease}>Update Init {initCount}</Button>
      </div>
    </div>
  );
};

export default HookSamples;
