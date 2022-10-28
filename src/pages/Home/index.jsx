import { Button } from "@mui/material";
import { useState } from "react";
import HookSamples from "./components/HookSamples";

const Home = () => {
  const [state, setState] = useState(1);
  const handleIncrease = () => setState(state + 1);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Home Page</h1>
        <HookSamples initCount={state} handleIncrease={handleIncrease} />
        <Button onClick={handleIncrease}>State chnage</Button>
      </div>
    </div>
  );
};

export default Home;
