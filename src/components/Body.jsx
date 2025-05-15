import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state=>state.user)
  const navigate = useNavigate();
  const fetchProfile = async()=>{
    if(userData)return null;
    try{
      const response =  await axios.get(BASE_URL+'/profile/view',{ withCredentials: true });
      dispatch(addUser(response.data));

    }
    catch(err){
      if(err.status === 404){
        navigate('/login')
      }
      console.log('ERROR: ',err)
    }
  }

  useEffect(()=>{
   
      fetchProfile();
    
    
  },[])
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Body