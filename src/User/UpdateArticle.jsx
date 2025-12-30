import { useState , useEffect } from "react"
import axios from 'axios'
import ArticleImage from './../Components/ArticleImage'
import { useParams } from "react-router";

function UpdateArticle() {
  let apiurl=import.meta.env.VITE_API_URL
   let params = useParams();
let id=params.id;
const [data,setData] = useState({title:'',subtitle:'',category:'',image:'',content:'',conclusion:''}) 
const [error,setError] = useState({title:'',subtitle:'',category:'',content:'',conclusion:''}) 
const [response,setResponse] = useState({response:'',status:0}) 
const [iresponse,setIResponse] = useState('') 

const url=apiurl+"article/"

  useEffect(()=>{
    axios.get(url+id)
    .then((res)=>{setData(res.data)})
    .catch((err)=>{console.log(err)})
  },[response,iresponse])
  
const iserror=()=>{
  let e={}
  if(data.title=="")
  e.title=' Fill Your Title ';
  if(data.subtitle=="")
  e.subtitle=' Enter Your Subtitle';  

    if(data.category=="")
    e.category='Fill Your Category';
    if(data.content=="")
    e.content='Fill Your Content';  
    if(data.conclusion=="")
    e.conclusion='Fill Your Conclusion';

    setError(e)
    if(Object.keys(e).length>0){
        return true
    }
}

const handleSubmit=(e)=>{
e.preventDefault();
if(!iserror()){
  axios.put(url+id,data)
  .then((res)=>{
    setResponse(res.data)
  })
.catch((err)=>console.log(err))

}
}

  return (
    <>
          <ArticleImage id={id} aimage={data.image} iresponse={iresponse} setIResponse={setIResponse}/>
<section className="container">
<h3  className="py-3">Write New Article</h3>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label   className="mb-2">Title <span className="text-danger"> {error.title} </span></label>
<input type="text"  placeholder="Title" className="form-control" value={data.title} 
onChange={(e)=>{setData({...data,title:e.target.value})}} />
</div>
<div className="mb-3">
<label  className="mb-2">Subtitle <span className="text-danger"> {error.subtitle} </span></label>
<textarea rows="3" className="form-control" placeholder="Subtitle" value={data.subtitle} 
onChange={(e)=>{setData({...data,subtitle:e.target.value})}}></textarea>
</div>
<div className="row">
<div className="col mb-3">
<label  className="mb-2">Select Category <span className="text-danger"> {error.category} </span></label>
<select className="form-select" value={data.category} 
onChange={(e)=>{setData({...data,category:e.target.value })}}>
<option>Food & Travel</option>
<option>Sports & Games</option>
<option>Education Tips</option>
<option>Health & Wellness</option>
<option>Tech Updates</option>
</select>

</div>
</div>
<div className="mb-3">
<label  className="mb-2">Type Article Content <span className="text-danger"> {error.content} </span> </label>

<textarea rows="8" className="form-control" value={data.content}  onChange={(e)=>{setData({...data,content:e.target.value })}}></textarea>
</div>
<div className="mb-3">
<label  className="mb-2">Conclusion <span className="text-danger"> {error.conclusion} </span></label>
<textarea rows="3" className="form-control" value={data.conclusion} onChange={(e)=>{setData({...data,conclusion:e.target.value })}}></textarea>
</div>
<div className="mt-3">
<button className="btn btn-dark px-5 bg-secondary mb-5">Save Article</button>
</div>
</form>

</section>
<p className='text-center p-2 text-secondary'>{response.response}</p>

    </>
  )
}

export default UpdateArticle