import Header from "components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header  />
      <div style={{ textAlign: "center", paddingTop: "8%" }}>
        <h1>404 - Not Found!</h1>
        <Link to="/">
          <h3>Back Home!</h3>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
