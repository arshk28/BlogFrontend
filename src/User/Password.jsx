import {useEffect , useState } from "react"
import axios from 'axios'

function Password({userid}) {
let apiurl=import.meta.env.VITE_API_URL 
const [data,setData] = useState({password:'',c_password:''}) 
const [error,setError] = useState({password:'',c_password:''}) 
const [response,setResponse] = useState({response:'',status:0}) 
const url=apiurl+"user/password/"

const iserror=()=>{
  let e={}
  if(data.password=="")
  e.password='Fill Your Password';
  if(data.c_password=="")
  e.c_password='Fill Your Current Password ';  

  setError(e)
  if(Object.keys(e).length>0){
      return true
  }
}

const handleSubmit=(e)=>{
e.preventDefault();
if(!iserror()){
  axios.patch(url+userid,data)
    .then((res)=>{setResponse(res.data);
  })
  .catch((err)=>{console.log(err)})
}
}

  return (
    <>
 <section className="container">
<h3 className="py-3">Password</h3>
<form onSubmit={handleSubmit}>
<div className="row">  
<div className=" col mb-3">
<label for="" className="mb-2">New Password <span className="text-danger"> {error.password} </span></label>
<input type="password"  placeholder="*********" className="form-control"  value={data.password} 
onChange={(e)=>{setData({...data,password:e.target.value })}} />
</div>
<div className=" col mb-3">
<label for="" className="mb-2">Current Password <span className="text-danger"> {error.c_password} </span></label>
<input type="password"  placeholder="*********" className="form-control"  value={data.c_password} 
onChange={(e)=>{setData({...data,c_password:e.target.value })}}/>
</div>
</div>
<div className="mt-3">
<button className="btn btn-dark px-5 bg-secondary mb-3">Update Password</button>
</div>
</form>
<hr/>
</section>                    
<p className='text-center p-2 text-secondary'>{response.response}</p>


    </>
  )
}

export default Password