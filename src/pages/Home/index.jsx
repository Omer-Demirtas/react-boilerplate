import { useState } from "react";
import { useUserStore } from "stores/UserStore";

const Home = () => {
  const [state, setState] = useState(1);
  const handleIncrease = () => setState(state + 1);
  const user = useUserStore(s => s.user);
  const setUser = useUserStore(s => s.setUser);

  return (
    <div style={{ textAlign: "center" }}>
        <h1>Wellcome!</h1>
    </div>
  );
};

export default Home;
