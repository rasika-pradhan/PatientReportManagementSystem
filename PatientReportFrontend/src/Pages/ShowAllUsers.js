import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAllUsers = () => {
    //const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        axios.get("http://localhost:8000/user/all")
        .then((response)=>{
            console.log(response.data);
            //setUsers(response.data);
        })
        .catch((err)=> console.log(err));
    };

    useEffect(()=> getAllUsers(),[])

  return (
    <>
      <h1>Show All Users Page</h1>
    </>
  )
}

export default ShowAllUsers
