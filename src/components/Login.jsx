import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../utils/constants.js';

const Login = () => {
  const [email, setEmail] = useState("rony@gmail.com");
  const [password, setPassword] = useState("Rony@123");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL+"/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
      dispatch(addUser(response.data))
      navigate('/');
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };
  return (
    <div className="card card-dash bg-base-300 w-96 my-10 mx-5">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <fieldset className="fieldset my-2">
          <legend className="fieldset-legend">Login Id</legend>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset my-2">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Type here"
          />
        </fieldset>
        <div className="card-actions  justify-center">
          <button className="btn btn-primary " onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
