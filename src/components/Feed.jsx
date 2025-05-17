import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addFeeds } from '../utils/feedSlice';
import UserCard from './userCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feeds = useSelector(store=>store.feed);

  const getFeeds =async()=>{
    if(feeds)return null;
    try{
      const response = await axios.get(BASE_URL+'/feed',{
        withCredentials:true
      });
      dispatch(addFeeds(response.data))
    }catch(err){
      console.log('err',err)
    }

  }

  useEffect(()=>{
    getFeeds();
  },[])

  if(!feeds) return 
  if(feeds.length <= 0) return <h1>no feeds are available</h1>

  return (

    feeds && 
    <div className='flex justify-center my-10'>
       <UserCard user={feeds[0]}/>
    </div>
   
  )
}

export default Feed;