import { useState,useEffect } from "react";
import axios from 'axios'
function Articles() {
  let apiurl=import.meta.env.VITE_API_URL
  const [articles,setArticles]=useState([ {title:' ',subtitle:' ',image:' ',category:'',date:''}])
  const [response,setResponse] = useState({response:'',status:0}) 
  const imageurl=apiurl+"static/"
      const url=apiurl+"article"

  useEffect(()=>{
    axios.get(url)
    .then((res)=>{setArticles(res.data)})
    .catch((err)=>{console.log(err)})
    
  },[response])

   const handleStatus=(id,s)=>{
    
  axios.patch(url+"/hidden/"+id,{hidden:s})
  .then((res)=>{
    setResponse(res.data)
  })
.catch((err)=>console.log(err))

}

  return (
    <>
    <section className="py-5">
     <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Subtitle</th>
          <th>Image</th>
          <th>Category</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
        articles.map((article,index)=>{
          return (<tr key={index}>
            <td>{article.title}</td>
            <td>{article.subtitle}</td>
            <td><img src={imageurl+article.image} alt=""  height={70} width={70}/></td>
            <td>{article.category}</td>
            <td>{article.date}</td>
             <td>
  {
  article.hidden ? <span className="bg-success-subtle"> Hidden</span>
  : <span className="bg-warning-subtle">Publish</span>

  }

  </td>
  <td>
  
  {
  article.hidden ? 
  <a href="#" className="btn btn-warning btn-sm" onClick={()=>handleStatus (article._id,false)}>Hide</a>
  :
  <a href="#" className="btn btn-success btn-sm" onClick={()=>handleStatus(article._id,true)}>Unhide</a>

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

export default Articles