import { Button } from "@mui/material";
import { useState } from "react";
import HookSamples from "./components/HookSamples";
import HookSample2 from "./components/HooksSample2";

const Home = () => {
  const [state, setState] = useState(1);
  const handleIncrease = () => setState(state + 1);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {/* <HookSamples initCount={state} handleIncrease={handleIncrease} /> */}
        <HookSample2 />
      </div>
    </div>
  );
};

export default Home;
