import React, { useContext } from "react";
import checkLogin from "../context/checkLogin";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Requierdauth = ({ children }) => {
  // const { userLogin, setUserLogin } = useContext(checkLogin);
  // const location = useLocation();
  const user = useSelector(state => state.user)
   localStorage.clear()
  if (!(user.userName)) {
    alert("Please Login!");
    // return <Navigate to={"/login"} state={location.pathname} />;
    return <Navigate to={"/login"} />;
  }
  return <div>{children}</div>;
};

export default Requierdauth;
