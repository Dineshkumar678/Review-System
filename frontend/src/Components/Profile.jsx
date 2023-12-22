import React from 'react';

function Profile({id,name}){

    return <div className='top'>
        <img src={`http://localhost:3000/api/v1/run/data/image/${id}`} alt="" />
        <h2>{name}</h2>
    </div>
}

export default Profile