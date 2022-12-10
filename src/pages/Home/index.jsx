import { Button } from "@mui/material";
import { useNotifyStore } from "stores/NotifyStore";

const Home = () => {
  const showNotify = useNotifyStore(s => s.showNotify);

  return (
    <div style={{ textAlign: "center" }}>
        <h1>Wellcome!</h1>
        <Button onClick={showNotify}>Show Notify</Button>
    </div>
  );
};

export default Home;
