import React, { useContext ,useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CheckLogin from "../context/checkLogin";
import {useDispatch} from "react-redux";
import { setUser } from "../page/userSlice";
const Login = () => {
  // const navigate = useNavigate();
  // const { userLogin, setUserLogin } = useContext(CheckLogin);
  // const handelSubmit = () => {
  //   setUserLogin(true);
  //   navigate("/create", { state: "wellcome !", replace: true });
  // };
  const [userLogin, setUserLogin] = useState({});
  const dispatch =useDispatch()

  const handeChange =(e) =>{
    setUserLogin({...userLogin ,[e.target.name]:e.target.value})
  }

  const handelSubmit =(e) =>{
    e.preventDefault();
    dispatch(setUser(userLogin))
    localStorage.setItem('user', userLogin)
  }
  return (
    <div className="page">
      <h2>Login</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="userName" name="userName" onChange={handeChange} />
        <input type="text" placeholder="password" name="password" onChange={handeChange} />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
