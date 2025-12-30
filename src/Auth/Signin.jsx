import {Link} from 'react-router'
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router'
import{useAuth} from '../Context/AuthContext'
import{useAdmin} from '../Context/AdminContext'

function Signin() {
    let apiurl=import.meta.env.VITE_API_URL
  const{isLoggedin,setIsLoggedin}=useAuth()
  const{isAdminLoggedin,setIsAdminLoggedin}=useAdmin()
    const [data,setData] = useState({email:'',password:''}) 
    const [error,setError] = useState({email:'',password:''})
    const [response,setResponse] = useState({response:'',status:0}) 
const url=apiurl+"user/login"

let navigate = useNavigate();
    const iserror=()=>{
        let e={}
        if(data.email=="")
        e.email='Please Enter Your Email';  
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
    .then((res)=>{setResponse(res.data);
    if(res.data.status==1){
    if (res.data.user.type=="user"){
        localStorage.setItem("userid",res.data.user._id)    
        setIsLoggedin(true) 
        setTimeout(()=>{navigate('/user')},2000)  
    }
    else{
       localStorage.setItem("adminid",res.data.user._id)  
              setIsAdminLoggedin(true) 
        setTimeout(()=>{navigate('/admin')},2000)

    }
   
    }
    })
    .catch((err)=>{})
  }
  }
return (
<>

<h2 className="mb-4 text-center">Welcome Back</h2>
<form onSubmit={handleSubmit}>
<div className="form-floating mb-2">
<input type="text"  placeholder="" className="form-control" value={data.email} 
onChange={(e)=>{setData({...data,email:e.target.value})}}/>
<label htmlFor="">Email Address</label>
<span className="text-danger"> {error.email} </span>
</div>

<div className="form-floating mb-2">
<input type="password"  placeholder="" className="form-control" value={data.password} 
onChange={(e)=>{setData({...data,password:e.target.value})}}/>
<label htmlFor="">Password</label>
<span className="text-danger"> {error.password} </span>
</div>

<p className=" text-theme2 mt-4">Forget Password ? 
<Link to="/auth/forgot" className="text-theme2">Reset</Link></p>

<div className="mt-5 text-center">
<button className="btn btn-dark bg-theme2 text-white px-5">Login</button>
</div>
</form> 
<p className="text-center text-theme2 mt-4">New Customer ? 
<Link to="/auth/signup" className="text-theme2">Register</Link></p>
<p className='text-center p-2 text-secondary'>{response.response}</p>

</>
)
}

export default Signin