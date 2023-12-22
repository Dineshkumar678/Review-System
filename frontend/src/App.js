import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './Components/Profile';
import Share from './Components/Share';
import Stats from './Components/Stats';
import axios from 'axios';


function App() {

  
  const [user,setUser] = useState({
    name:"",
    steps:"",
    amount:"",
    id:""
  });

  const [userList,setUserList] = useState([]);
  const [active,setActive] = useState();

  useEffect(()=>{
    const getUserDetails = async() => {
    
      const response = await axios.get(`http://localhost:3000/api/v1/user/data`);
      setUserList(response.data.data);
    }

    getUserDetails();
  },[]);


  const handleClick = async(id) => {
  
    const activeDiv = document.getElementById(id);
    const prevDiv = document.getElementById(active);
    prevDiv?.classList.remove("isActive");
    try{
      const response = await axios.get(`http://localhost:3000/api/v1/run/data/${id}`)
      const data = response.data.data;
      setUser(data)
      activeDiv.classList.add('isActive')
      setActive(id);
      console.log(user)
    }catch(error) {
      console.error(error)
    }

  }



  return (
    <div className='container'>
    <div className="App">
     <Profile id={user?.userId?._id} name={user?.userId?.name || "Random"}/>
     <Stats amount={user?.totalAmount || 0} steps={user?.totalStep||0}/>
     <Share amount={user?.totalAmount||0} steps={user?.totalStep || 0} name={user?.userId?.name || "Random"}/>
    </div>

    <div className='list'>
      <div className='list-title'>User List</div>
      {
        userList && userList.map((currUser) => (
          <div key={currUser._id} className='list-item'
          onClick={e=>handleClick(currUser._id)}
          id={`${currUser._id}`}
          >
            <div>{currUser.name}</div>
            <img src={`http://localhost:3000/api/v1/run/data/image/${currUser._id}`} className='list-image'/>
          </div>
        ))
      }
    </div>

    </div>
  );
}

export default App;
