import axios from 'axios'
import { useState,useEffect } from "react";

function Comment({id}){
    let apiurl=import.meta.env.VITE_API_URL
const [comments,setComments]=useState([])

useEffect(()=>{
const url=apiurl+"comment/"+id
axios.get(url)
.then((res)=>{setComments(res.data)})
.catch((err)=>{console.log(err)})
},[])
return (
<>
<section className="container py-3">
{
comments.map((comment,index)=>{
return (<div className="alert alert-light mb-2" key={index} >
<p>{comment.comment}</p>
<p><i className="bi bi-calendar">  <strong>Posted on : </strong> {comment.date}</i>
| <i className="bi bi-person"> <strong> Posted by : </strong> {comment.name}</i></p>
</div> )})
}

</section> 
</>
)
}
export default Comment