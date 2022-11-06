import { Button } from "@mui/material";
import { useState } from "react";
import { useUserStore } from "stores/UserStore";
import HookSamples from "./components/HookSamples";
import HookSample2 from "./components/HooksSample2";

const Home = () => {
  const [state, setState] = useState(1);
  const handleIncrease = () => setState(state + 1);
  const user = useUserStore(s => s.user);
  const setUser = useUserStore(s => s.setUser);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h3>{user.username || "Not Found!"}</h3>
        {/* <HookSamples initCount={state} handleIncrease={handleIncrease} /> */}
        {/* <HookSample2 /> */}
        <button onClick={() => setUser("Ömer")}>Set user</button>
      </div>
    </div>
  );
};

export default Home;
