import { useEffect , useState } from "react"
import axios from 'axios'

function Profile({userid}) {
  let apiurl=import.meta.env.VITE_API_URL
const [data,setData] = useState({name:'',email:'',phone:'',gender:'',age:'',city:'',insta_url:'',fb_url:'',
utube_url:'',bio:''}) 
const [error,setError] = useState({name:'',email:'',phone:'',gender:'',age:'',city:'',insta_url:'',fb_url:'',
utube_url:'',bio:''})
const [response,setResponse] = useState({response:'',status:0})  
const url=apiurl+"user/"
const iserror=()=>{
  let e={}
  if(data.name=="")
  e.name='Please Fill Your Name';
  if(data.email=="")
  e.email='Please Enter Your Email';  
  if(data.phone=="")
  e.phone='Please Enter Phone No';
  if(data.gender=="")
  e.gender='Please Fill Your Gender';
  if(data.age=="")
  e.age='Please Enter Your Age';  
  if(data.city=="")
  e.city='Please Enter City';
  if(data. insta_url=="")
  e .insta_url='Please Fill Your InstaURL';
  if(data.fb_url=="")
  e.fb_url='Please Fill Your FbURL';  
  if(data.utube_url=="")
  e.utube_url='Please Fill Your UtubeURL';
  if(data.bio=="")
  
  e.bio='Please Fill Your Bio';
  
      setError(e)
      if(Object.keys(e).length>0){
          return true
      }
  }
useEffect(()=>{
    axios.get(url+userid)
    .then((res)=>{
      setData(res.data)})
    .catch((err)=>{console.log(err)})
},[userid])

const handleSubmit=(e)=>{
e.preventDefault();
if(!iserror()){
  axios.put(url+userid,data)
    .then((res)=>{setResponse(res.data);
  })
  .catch((err)=>{console.log(err)})
}
}



  return (
    <>
  
    <section className="container">
<h5 className="mb-3">Account Details</h5>
<form onSubmit={handleSubmit}>
<div className="row">  
<div className=" col mb-3">
<div className="mb-3">
<label for="" className="mb-2">Name <span className="text-danger"> {error.name} </span></label>
<input type="text"  placeholder="Name" className="form-control"  value={data.name} 
onChange={(e)=>{setData({...data,name:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">Age <span className="text-danger"> {error.age} </span></label>
<input type="text"  placeholder="Age" className="form-control"  value={data.age} 
onChange={(e)=>{setData({...data,age:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">Gender <span className="text-danger"> {error.gender} </span></label>
<input type="text"  placeholder="Gender" className="form-control"  value={data.gender} 
onChange={(e)=>{setData({...data,gender:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">City <span className="text-danger"> {error.city} </span></label>
<input type="text"  placeholder="City" className="form-control"  value={data.city} 
onChange={(e)=>{setData({...data,city:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">About Me <span className="text-danger"> {error.bio} </span></label>
<textarea rows="3" className="form-control" placeholder="About Me"  value={data.bio} 
onChange={(e)=>{setData({...data,bio:e.target.value })}}></textarea>
</div>
</div>

<div className=" col mb-3">
<div className="mb-3">
<label for="" className="mb-2">Email <span className="text-danger"> {error.email} </span></label>
<input type="email" placeholder="Email" className="form-control"  value={data.email} 
onChange={(e)=>{setData({...data,email:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">Phone <span className="text-danger"> {error.phone} </span></label>
<input type="tel" placeholder="Phone number" className="form-control"  value={data.phone} 
onChange={(e)=>{setData({...data,phone:e.target.value })}}/>
</div>
<div className="mb-3">
 <label for="" className="mb-2">Instagram URL <span className="text-danger"> {error.insta_url} </span></label>
<input type="text" placeholder="URL..." className="form-control" value={data.insta_url} 
onChange={(e)=>{setData({...data,insta_url:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">Facebook URL <span className="text-danger"> {error.fb_url} </span></label>
<input type="text" placeholder="URL..." className="form-control"  value={data.fb_url} 
onChange={(e)=>{setData({...data,fb_url:e.target.value })}}/>
</div>
<div className="mb-3">
<label for="" className="mb-2">YouTube URL <span className="text-danger"> {error.utube_url} </span></label>
<input type="text" placeholder="URL..." className="form-control"  value={data.utube_url} 
onChange={(e)=>{setData({...data,utube_url:e.target.value })}}/>
</div>
<div className="mt-3">
<button className="btn btn-dark px-5 bg-secondary">Update Details</button>
</div>
</div>
</div>
</form>
<hr />
</section> 

<p className='text-center p-2 text-secondary'>{response.response}</p>

    </>
  )
}

export default Profile