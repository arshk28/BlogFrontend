import { useState,useEffect } from "react";
import {Link} from 'react-router'
import axios from 'axios'
function Article() {
  let apiurl=import.meta.env.VITE_API_URL
  const [article,setArticle]=useState([ {title:' ',subtitle:' ',image:' ',category:'',date:''}])
  const imageurl=apiurl+"static/"
  const [response,setResponse] = useState({response:'',status:0}) 
  const url=apiurl+"article/"
  useEffect(()=>{
    let u=localStorage.getItem('userid')
    if (u!=''){
    axios.get(url+"user/"+u)
    .then((res)=>{setArticle(res.data)})
    .catch((err)=>{console.log(err)})
    }
  },[response])

  const handleDelete=(id)=>{
  axios.delete(url+id)
  .then((res)=>{
    setResponse(res.data)
  })
.catch((err)=>console.log(err))

}
  const handleStatus=(id,s)=>{
  axios.patch(url+"published/"+id,{published:s})
  .then((res)=>{
    setResponse(res.data)
  })
.catch((err)=>console.log(err))

}


  return (
    <>

    <section className="py-5">
    <p className='text-center p-2 text-secondary'>{response.response}</p>
     <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Category</th>
          <th>Date & Status </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        article.map((article,index)=>{
          return (<tr key={index}>
            <td className="w-50">{article.title}
              <p>{article.subtitle}</p>
            </td>
            <td><img src={imageurl+article.image} alt=""  height={70} width={70}/></td>
            <td>{article.category}</td>
            <td>{article.date}
               <p>
  {
  article.published ? <span className="bg-success-subtle"> Published</span>
  : <span className="bg-warning-subtle">Draft</span>
  }

  </p>
            </td>
 
  <td>
    
<Link className="btn btn-info btn-sm" to={"/user/updatearticle/"+article._id}>Edit</Link> &nbsp;
  <a href="#" className="btn btn-danger btn-sm" onClick={()=>handleDelete(article._id)}>Del</a> &nbsp;
  {
  article.published ? 
  <a href="#" className="btn btn-warning btn-sm" onClick={()=>handleStatus (article._id,false)}>Draft</a>
  :
  <a href="#" className="btn btn-success btn-sm" onClick={()=>handleStatus(article._id,true)}>Publish</a>

  }

  </td>
       </tr>
          )
          })
          }
      </tbody>
     </table>
     </section>
    </>
  )
}

export default Article