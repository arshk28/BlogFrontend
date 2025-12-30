import {Link} from 'react-router'
import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router' 
function Reset() {
  let apiurl=import.meta.env.VITE_API_URL
  const [data,setData] = useState({code:'',password:'',confirm_Password:''}) 
  const [error,setError] = useState({code:'',password:'',confirm_Password:''}) 
  const [response,setResponse] = useState({response:'',status:0}) 
  const [verify,setVerify] = useState({code:'',userid:''}) 
  
useEffect(()=>{
  let c=localStorage.getItem('code')
  let u=localStorage.getItem('fuserid')
  if (c!='' && u!='')
  setVerify({code:c, userid:u})
},[])

const url=apiurl+"user/password/"
let navigate = useNavigate();
  const iserror=()=>{
    let e={}
    if(data.code=="")
    e.code='Please Enter Your Code';
    else if(data.code!=verify.code)
    e.code='Verification Code Not Matched , Kindly Re-Enter ';
    if(data.password=="")
    e.password='Please Enter Your Password';
    if(data.confirm_Password=="")
    e.confirm_Password='Confirm Your Password';  
    else if(data.password!=data.confirm_Password)
    e.confirm_Password='Confirm Password Not Matched';
    setError(e)
    if(Object.keys(e).length>0){
        return true
    }
}

const handleSubmit=(e)=>{
e.preventDefault();
if(!iserror()){
 axios.patch(url+verify.userid,{password:data.password})
    .then((res)=>{setResponse(res.data);
    if(res.data.status==1){
    localStorage.removeItem('code')
    localStorage.removeItem('fuserid')
    setTimeout(()=>{navigate('/auth')},3000)    
    }
    })
    .catch((err)=>{console.log(err)})

}
}

  return (
    <>
     <h2 className="mb-4 text-center">Reset Your Password</h2>
<form onSubmit={handleSubmit}>
<div className="form-floating mb-2">
<input type="text"  placeholder="" className="form-control" value={data.code} 
onChange={(e)=>{setData({...data,code:e.target.value})}} />
<label htmlFor=""> Enter Your Verification Code</label>
<span className="text-danger"> {error.code} </span>
</div>

<div className="form-floating mb-2">
<input type="password"  placeholder="" className="form-control" value={data.password} 
onChange={(e)=>{setData({...data,password:e.target.value})}} />
<label htmlFor=""> Enter Your Password</label>
<span className="text-danger"> {error.password} </span>
</div>

<div className="form-floating mb-2">
<input type="password"  placeholder="" className="form-control"value={data.confirm_Password} 
onChange={(e)=>{setData({...data,confirm_Password:e.target.value})}} />
<label htmlFor="">Confirm Your Password</label>
<span className="text-danger"> {error.confirm_Password} </span>
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

export default Reset