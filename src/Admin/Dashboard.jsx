import { useState,useEffect } from "react";
import axios from 'axios'
function Dashboard() {
    let apiurl=import.meta.env.VITE_API_URL
   const [article,setArticle]=useState(0)
    const [user,setUser]=useState(0)
 const articleurl=apiurl+"article/count"
      const userurl=apiurl+"user/count"

      
  useEffect(()=>{
    axios.get(articleurl)
    .then((res)=>{setArticle(res.data)})
    .catch((err)=>{console.log(err)})

     axios.get(userurl)
    .then((res)=>{setUser(res.data)})
    .catch((err)=>{console.log(err)})
    
  },[])
  return (
    <>
    <section className="py-5">
        <h1>Dashboard</h1> <hr />
        <div className="row" >
          <div className="col-3"> 
            <div className="card bg-success-subtle p-3" style={{minHeight:220}}>
               <i className="bi bi-people fs-1"></i> 
               <h4>No of Users</h4> 
              <p className="display-5">{user}</p>
            </div>
          </div>
        <div className="col-3">
           <div className="card bg-warning-subtle p-3" style={{minHeight:220}}>
               <i className="bi bi-list fs-1"></i> 
               <h4>No of Articles</h4> 
              <p className="display-5">{article}</p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Dashboard