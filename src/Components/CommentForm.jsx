import { useState } from "react"
import axios from 'axios'
function CommentForm({id}){
   let apiurl=import.meta.env.VITE_API_URL 
const [data,setData] = useState({name:'',email:'',comment:''})
const [error,setError] = useState({name:'',email:'',comment:''}) 
const [response,setResponse] = useState({response:'',status:0})  
const url=apiurl+"comment"
const iserror=()=>{
    let e={}
    if(data.name=="")
    e.name='Please Fill Your Name';
    if(data.email=="")
    e.email='Please Enter Your Email';  
    if(data.comment=="")
    e.comment='Please Enter Comment';

    setError(e)
    if(Object.keys(e).length>0){
        return true
    }
}

const handleSubmit=(e)=>{
e.preventDefault();
data.article=id
if(!iserror()){
      axios.post(url,data)
      .then((res)=>{
      setResponse(res.data)   
      })
    .catch((err)=>{console.log(err)})
}
}
    return (
        <>
        <section className="container">
<h3  className="py-3">Leave a Comment</h3>
<form onSubmit={handleSubmit}>
<div className="row">
<div className="col mb-3">
<label for="" className="mb-2">Name <span className="text-danger"> {error.name} </span></label>
<input type="text" placeholder="Name" className="form-control"  value={data.name} 
onChange={(e)=>{setData({...data,name:e.target.value})}}/>
</div>
<div className="col mb-3">
<label for="" className="mb-2">Email <span className="text-danger"> {error.email} </span></label>
<input type="text" placeholder="Email" className="form-control"  value={data.email} 
onChange={(e)=>{setData({...data,email:e.target.value})}}/>
</div>
</div>
<div className="mb-3">
<label for="" className="mb-2">Comment <span className="text-danger"> {error.comment} </span></label>
<textarea rows="3" className="form-control" placeholder="Comment"  value={data.comment} 
onChange={(e)=>{setData({...data,comment:e.target.value})}}></textarea>
</div>
<div className="mt-3">
<button className="btn btn-dark px-5 bg-secondary mb-3">Post Comment</button>
</div>
</form>
<p className='p-2 text-secondary fw-bold'>{response.response}</p>

<hr/>
</section>

        </>
    )
}
export default CommentForm