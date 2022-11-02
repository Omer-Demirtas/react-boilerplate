import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "utils/hooks/useLocalStorage";

const HookSamples = ({ initCount, handleIncrease, ...props }) => {
  const [user, setUser] = useLocalStorage("user");
  const [counter, setCounter] = useState(initCount);
  const [hour, setHour] = useState(0);
  const [loading, setLoading] = useState(false);
  const didMount = useRef(false);

  useEffect(() => {
    console.log("Component mounted");
    setLoading(true);
    setTimeout(() => {
      console.log("Hallo");
      setLoading(false);
    }, 3000);

    return () => {
      console.log("finish");
      didMount.current = false;
    };
  }, []);

  useEffect(() => {
    function doSomething() {
      console.log(`init Counter : ${initCount}`);
    }

    doSomething();
  }, [initCount]);

  useEffect(() => {
    if (didMount.current) {
      console.log(`Counter : ${counter}`);
    } else {
      didMount.current = true;
    }
  }, [counter]);

  useEffect(() => {
    if (didMount.current) {
      console.log(`hour : ${hour}`);
    } else {
      didMount.current = true;
    }
  }, [hour]);

  return (
    <div>
      <h1>{loading ? "Loading" : null}</h1>
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
