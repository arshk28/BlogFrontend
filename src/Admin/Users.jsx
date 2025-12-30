import { useState,useEffect } from "react";
import axios from 'axios'
function Users() {
    let apiurl=import.meta.env.VITE_API_URL
  const [users,setUsers]=useState([ {image:' ',name:' ',email:' ',phone:'',gender:'',age:'',city:'',date:''}])
  
  useEffect(()=>{
    const url=apiurl+"user"
    axios.get(url)
    .then((res)=>{setUsers(res.data)})
    .catch((err)=>{console.log(err)})
  },[])
  return (
    <>
    <section className="py-5">
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Gender/Age</th>
            <th>City</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map((user,index)=>{
          return (<tr key={index}>
          <td><img src={user.image} alt=""  height={70} width={70}/></td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.gender}/{user.age}</td>
      
          <td>{user.city}</td>
          <td>{user.date}</td>
          </tr>
        )
          })
          }
      </tbody>
     </table>
     </section>
    </>
  )
}

export default Users