import { useState,useEffect } from "react"
import axios from 'axios'


function Image() {
  let apiurl=import.meta.env.VITE_API_URL
   const [userid,setUserID] = useState('') 
const [UserImage,setUserImage] = useState('') 
  const [image,setImage] = useState('') 
const [error,setError] = useState({image:''})
const [response,setResponse] = useState({response:'',status:0}) 
const url=apiurl+"user/"
 const imageurl=apiurl+"static/"

  
  const iserror=()=>{
    let e={}
    if(image=="")
    e.image='Upload Your Image';
    else{
    let ext=image.name.split('.')[1]
    if (ext!='jpg' && ext!='png' && ext!='jpeg')
    e.image='Please Select Only JPG,PNG,JPEG Image'
    }
    setError(e)
 return Object.keys(e).length>0? true:false
  }

useEffect(()=>{
  let u=localStorage.getItem('userid')
  if (u!='')
    setUserID(u)
    axios.get(url+u)
    .then((res)=>{
      console.log(res.data)
      setUserImage(res.data.image)
    })
    .catch((err)=>{console.log(err)})
},[userid,response])

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!iserror()){
  const data = new FormData();
  data.append('image',image);
  axios.patch(url+"image/"+userid,data)
  .then((res)=>{
    setResponse({response:res.data})
  })
.catch((err)=>console.log(err))
}
  }
  return (
    <>

<section className="container">
<div className="row ">  
<div className=" col-4 mb-3">
<img src={imageurl+UserImage} alt="" className="w-100 border p-1 rounded" height={250}/>
</div>
<div className="col-4 mb-3">
<form onSubmit={handleSubmit}>
<label for="" className="mb-2">Choose Profile Image</label>
<input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])} />
<button className="btn btn-dark px-5 bg-secondary my-3"> Upload Image</button>
</form>
</div>

</div>
<hr/>
</section>     
    </>
  )
}
export default Image
