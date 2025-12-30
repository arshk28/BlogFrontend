import { useState,useEffect } from "react";
import axios from 'axios'
import Card from "../Components/Card";

import Banner from "../Components/Banner";
import { useParams } from "react-router";

function Blog() {
  let apiurl=import.meta.env.VITE_API_URL
    let params = useParams();
let category=params.category;
  const [articles,setArticles]=useState([ ])
 const text="We encourage exploration and learning by offering a diverse range of articles on various subjects"
 
useEffect(()=>{
  const url=apiurl+"article/category/"+category  
  axios.get(url)
  .then((res)=>{setArticles(res.data)})
  .catch((err)=>{console.log(err)})
},[category]) 
 
 return (
    <>
    <Banner title="Blog" text={text}/>
    <div className="container py-5">
    <div className="row">
      {
        articles.map((article,index)=>{
          return (<div className="col-md-4" key={index}>
                  <Card article={article}/>        
          </div>)
        })
      }

      
    </div>
</div>
    </>
  )
}

export default Blog