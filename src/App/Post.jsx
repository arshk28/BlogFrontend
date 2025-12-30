import Banner from "../Components/Banner"
import CommentForm from "../Components/CommentForm"
import Comment from "../Components/Comment"
import axios from 'axios'
import { useState,useEffect } from "react";
import { useParams } from "react-router";


function Post() {
  let apiurl=import.meta.env.VITE_API_URL
  let params = useParams();
let id=params.id;
    const [article,setArticle]=useState( {title:'',subtitle:'',image:' ',content:'',conclusion:'',date:'',user:''})
   const text="We encourage exploration and learning by offering a diverse range of articles on various subjects"
  
   useEffect(()=>{
    const url=apiurl+"article/"+id
    axios.get(url)
    .then((res)=>{setArticle(res.data)})
    .catch((err)=>{console.log(err)})
  },[])

 const imageurl=apiurl+"static/"


   return (
   <>
    <Banner title="Post" text={text}/>
<section className="container lh-lg">
<h1 className="py-3 text-capitalize">{article.title}</h1>
<h5 className="text-secondary mb-4 lh-lg">{article.subtitle}</h5>
<img src={imageurl+article.image} className="card-img-top w-75" alt="..." height={450} />
<h5 className="text-justify py-3 lh-lg"> {article.content}</h5>
<h3>Conclusion</h3>
<h5 className="text-justify lh-lg">{article.conclusion}</h5>
<p><i className="bi bi-calendar">  <strong>Posted on : </strong> {article.date


} </i> | <i className="bi bi-person"> <strong> Posted by : </strong> {article.user}.</i></p>
</section>
    <hr />
    <CommentForm id={id}/>
     <Comment id={id}/>
     
     
         </>
  )
}

export default Post