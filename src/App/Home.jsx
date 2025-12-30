import { useState,useEffect } from "react";
import axios from 'axios'
import Card from "../Components/Card";
import Banner from "../Components/Home_Banner"

function Home() {
  let apiurl=import.meta.env.VITE_API_URL
const [articles,setArticles]=useState([])
useEffect(()=>{
  const url=apiurl+"article/recent/" 
  axios.get(url)
  .then((res)=>{setArticles(res.data)})
  .catch((err)=>{console.log(err)})
},[]) 

 return (
<>
<Banner title="Stay Informed, Stay Inspired" text="The best in travel, tech, and total wellness."/>
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
export default Home