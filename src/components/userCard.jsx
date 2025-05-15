import React from 'react'

const UserCard = ({user}) => {
    const {firstName, lastName, gender, age, about, photoUrl} = user;
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
        <button className="btn btn-primary">Ignored</button>
        
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-secondary">Interested</button>
        
      </div>
      </div>
      
    </div>
  </div>
  )
}

export default UserCard