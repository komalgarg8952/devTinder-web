import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { removeFeeds } from '../utils/feedSlice';

const UserCard = ({user}) => {
    const {firstName, lastName, gender, age, about, photoUrl} = user;
    const dispatch = useDispatch();

    const handleFeed = async(status,id)=>{
        try{
             await axios.post(BASE_URL+'/request/send/'+ status +'/'+id,{},{
                withCredentials:true
             });
            dispatch(removeFeeds(id))
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className="card bg-base-300 w-96 shadow-sm s">
    <figure>
      <img
        src={photoUrl}
        alt='user photo'/>
    </figure>
    <div className="card-body flex justify-center items-center">
      <h2 className="card-title">{firstName+ " "+ lastName} </h2>
      {age && gender && <p>{age+ ','+ gender}</p>}
      <p>{about}</p>
      <div className='flex gap-1'>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={()=>handleFeed('ignored',user._id)}>Ignored</button>
        
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-secondary"  onClick={()=>handleFeed('interested',user._id)}>Interested</button>
        
      </div>
      </div>
      
    </div>
  </div>
  )
}

export default UserCard