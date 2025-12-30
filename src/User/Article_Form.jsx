import { useState , useEffect } from "react"
import axios from 'axios'
function Article_Form() {
 let apiurl=import.meta.env.VITE_API_URL
const [data,setData] = useState({title:'',subtitle:'',image:'',category:'Food & Travel',content:'',conclusion:''}) 
const [error,setError] = useState({title:'',subtitle:'',image:'',category:'',content:'',conclusion:''}) 
const [response,setResponse] = useState({response:'',status:0}) 
const url=apiurl+"article/"

 const [userid,setUserID] = useState('') 
  useEffect(()=>{
  let u=localStorage.getItem('userid')
  if (u!='')
  setUserID(u)
  },[]) 
  
const iserror=()=>{
  let e={}
  if(data.title=="")
  e.title=' Fill Your Title ';
  if(data.subtitle=="")
  e.subtitle=' Enter Your Subtitle';  
  if(data.image=="")
  e.image='Upload Your Image';
 else{
    let ext=data.image.name.split('.')[1]
    if (ext!='jpg' && ext!='png' && ext!='jpeg')
    e.image='Please Select Only JPG,PNG,JPEG Image'
    }
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
  const fdata = new FormData();
  fdata.append('title',data.title);
  fdata.append('subtitle',data.subtitle);
  fdata.append('image',data.image);
  fdata.append('category',data.category);
  fdata.append('content',data.content);
  fdata.append('conclusion',data.conclusion);
  fdata.append('user',userid);
  
  
  axios.post(url,fdata)
  .then((res)=>{
    setResponse(res.data)
  })
.catch((err)=>console.log(err))

}
}

  return (
    <>
      
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
<label  className="mb-2">Choose Image <span className="text-danger"> {error.image} </span></label>   
<input type="file" className="form-control" onChange={(e)=>setData({...data,image:e.target.files[0]})}/>
</div>
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

export default Article_Form