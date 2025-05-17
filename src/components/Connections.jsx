import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addConnection } from '../utils/connectionSlice';

const Connections = () => {
    const connections = useSelector(store=>store.connection);
    const dispatch = useDispatch()

    const fetchConnection = async()=>{
        try{
        const response = await axios.get(BASE_URL+'/user/connections',{
            withCredentials:true
        })
        console.log(response.data)
        dispatch(addConnection(response.data.data))}
        catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        fetchConnection()
    },[])
    console.log("connections",connections)
    if(!connections){return null}
    if(connections.length===0){return null}
    
  return (
    <div className="text-center my-10">
    <h1 className="text-bold text-white text-3xl">Connections</h1>

    {connections.map((connection) => {
      const { _id, firstName, lastName, photoUrl, age, gender, about } =
        connection;

      return (
        <div
          key={_id}
          className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
        >
          <div>
            <img
              alt="photo"
              className="w-20 h-20 rounded-full object-cover"
              src={photoUrl}
            />
          </div>
          <div className="text-left mx-4 ">
            <h2 className="font-bold text-xl">
              {firstName + " " + lastName}
            </h2>
            {age && gender && <p>{age + ", " + gender}</p>}
            <p>{about}</p>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Connections