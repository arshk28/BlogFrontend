import {Link} from 'react-router'
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router'
function Signup() {
    let apiurl=import.meta.env.VITE_API_URL
const [data,setData] = useState({name:'',email:'',phone_no:'',password:''}) 
const [error,setError] = useState({name:'',email:'',phone_no:'',password:''}) 
const [response,setResponse] = useState({response:'',status:0}) 
const url=apiurl+"user"

let navigate = useNavigate();
const iserror=()=>{
    let e={}
    if(data.name=="")
    e.name='Please Fill Your Name';

    if(data.email=="")
    e.email='Please Enter Your Email';
     if(data.phone_no=="")
    e.phone_no='Please Enter Your Phone No';
     if(data.password=="")
    e.password='Please Enter Your Password';  
   setError(e)
        if(Object.keys(e).length>0){
            return true
        }
    }

const handleSubmit=(e)=>{
e.preventDefault();
if(!iserror()){
    axios.post(url,data)
    .then((res)=>{
    setResponse(res.data)
    setTimeout(()=>{navigate('/auth')},2000)    
    })
    .catch((err)=>{console.log(err)})
  }
  } 

  return (
    <>

<h2 className="mb-4 text-center">Create Account</h2>
<form onSubmit={handleSubmit}>
<div className="form-floating mb-2">
<input type="text"  placeholder="" className="form-control" value={data.name} 
onChange={(e)=>{setData({...data,name:e.target.value})}}/>
<label>First Name</label>
<span className="text-danger"> {error.name} </span>
    </div>
 

    <div className="form-floating mb-2">
<input type="text"  placeholder="" className="form-control" value={data.email} 
onChange={(e)=>{setData({...data,email:e.target.value})}} />
<label >Email Address</label>
<span className="text-danger"> {error.email} </span>
    </div>

    <div className="form-floating mb-2">
<input type="tel"  placeholder="" className="form-control"  value={data.phone_no} 
onChange={(e)=>{setData({...data,phone_no:e.target.value})}}/>
<label>Phone No</label>
<span className="text-danger"> {error.phone_no} </span>
    </div>

    <div className="form-floating mb-2">
<input type="password"  placeholder="" className="form-control" value={data.password} 
onChange={(e)=>{setData({...data,password:e.target.value})}}/>
<label>Password</label>
<span className="text-danger"> {error.password} </span>
    </div>

    <div className="mt-5 text-center">
<button className="btn btn-dark bg-theme2 text-white px-5">Create</button>
 </div>
 </form> 
 <p className="text-center text-theme2 mt-4">Returning Customer ? 
  <Link to="/auth" className="text-theme2">Sign In</Link></p>

<p className='text-center p-2 text-secondary'>{response.response}</p>
  
    </>
  )
}

export default Signup