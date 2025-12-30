import {Link} from 'react-router'
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router'
function Forgot() {
  let apiurl=import.meta.env.VITE_API_URL
const [data,setData] = useState({email:''})
const [error,setError] = useState({email:''}) 
const [response,setResponse] = useState({response:'',status:0}) 

const url=apiurl+"user/forgot"

let navigate = useNavigate();
const iserror=()=>{
  let e={}
  if(data.email=="")
  e.email='Please Enter Your Email'; 
  setError(e)
  if(Object.keys(e).length>0){
      return true
  }
}

const handleSubmit=(e)=>{
e.preventDefault();
if(!iserror()){
    axios.post(url,data)
    .then((res)=>{setResponse(res.data);
    if(res.data.status==1){
    localStorage.setItem("fuserid",res.data.userid)
    localStorage.setItem("code",res.data.code)    
    setTimeout(()=>{navigate('/auth/reset')},3000)    
    }
    })
    .catch((err)=>{console.log(err)})
  }
  }
  

  return (
    <>
<h2 className="mb-4 text-center">Recover Your Password</h2>
<p className="text-theme2 text-center py-2 ">Enter Your Already Register Email</p>
<form onSubmit={handleSubmit}>

<div className="form-floating mb-2">
<input type="email"  placeholder="" className="form-control" value={data.email} 
onChange={(e)=>{setData({...data,email:e.target.value})}}/>
<label for="">Email Address </label>
<span className="text-danger"> {error.email} </span>
</div>

    
<div className="mt-5 text-center">
<button className="btn btn-dark bg-theme2 text-white px-5">Submit Request</button>
 </div>
 </form> 
 <p className="text-center text-theme2 mt-4">Back To 
  <Link to="/auth" className="text-theme2"> Sign In</Link></p>
  <p className='text-center p-2 text-secondary'>{response.response}</p>


    </>
  )
}

export default Forgot