import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../utils/constants.js';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const[lastName ,setLastName] = useState("");
  const [isLoginForm,setIsLoginForm] = useState(true);


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error,setError] = useState('')

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
      return navigate('/');
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  const handleSignup =async()=>{
    try{
      const response = await axios.post(BASE_URL+'/signup',{firstName,lastName,email,password},{withCredentials:true});
      dispatch(addUser(response.data))
      return navigate('/profile');
    }catch(err){
      setError(err?.response?.data);
    }

  }


  return (
    <div className="flex justify-center my-10 ">
    <div className="card card-dash bg-base-300 w-96 ">
      <div className="card-body">
        <h2 className="card-title justify-center">{isLoginForm?'Login': 'Sign up'}</h2>
       { !isLoginForm && <><fieldset className="fieldset my-2">
          <legend className="fieldset-legend">First Name</legend>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset my-2">
          <legend className="fieldset-legend">Last Name</legend>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            placeholder="Type here"
          />
        </fieldset></>}
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
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Type here"
          />
        </fieldset>
        <p>{error}</p>
        <div className="card-actions  justify-center">
          <button className="btn btn-primary " onClick={isLoginForm?handleLogin:handleSignup}>
            {isLoginForm?'Login':'Sign Up'}
          </button>
        </div>
        <p className="" onClick={()=>setIsLoginForm((value)=>!value)}>{isLoginForm? 'New User? Sign Up':'Sign In'}</p>
      </div>
    </div>
    </div>
  );
};

export default Login;
