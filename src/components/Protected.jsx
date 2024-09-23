import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }) => {
  const { user } = UserAuth();

  if (user === null || user === undefined) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
