import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addRequest } from '../utils/requestSlice';
import { removeConnection } from '../utils/connectionSlice';

const Requests = () => {
    const connectionRequest = useSelector(store=>store.request);
    const dispatch = useDispatch()

    const reviewRequest =async (status, id)=>{
        try{
            const response = await axios.post(BASE_URL+"/request/review/"+status+"/"+id,
                {},
                {withCredentials:true});
                dispatch(removeConnection(id))

            console.log(response)
        }catch(err){
            console.log(err)
        }

    }

    const fetchConnectionRequest = async()=>{
        try{
        const response = await axios.get(BASE_URL+'/user/requests/received',{
            withCredentials:true
        })
        console.log(response.data)
        dispatch(addRequest(response.data.data))}
        catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        fetchConnectionRequest()
    },[])
    console.log("connections",connectionRequest)
    if(!connectionRequest){return null}
    if(connectionRequest.length===0){return null}
    
  return (
    <div className="text-center my-10">
    <h1 className="text-bold text-white text-3xl">Connections</h1>

    {connectionRequest.map((cr) => {
      const { _id, firstName, lastName, photoUrl, age, gender, about } =
        cr.fromUserId;

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
          <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("reject", cr._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("accept", cr._id)}
              >
                Accept
              </button>
            </div>
        </div>
      );
    })}
  </div>
  )
}

export default Requests