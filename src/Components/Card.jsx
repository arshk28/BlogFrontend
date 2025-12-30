import {Link} from 'react-router'
function Card({article}) {
  let apiurl=import.meta.env.VITE_API_URL
 const imageurl=apiurl+"static/"

  return (
    <>
 <div className="card mb-3" >
  <img src={imageurl+article.image} className="card-img-top" alt="..." height={250} width={70}/>
  <div className="card-body" style={{minHeight:380}}>
    <h5 className="card-title">{article.title}</h5>
    <p className="card-text">{article.subtitle}</p>
    <Link to={"/post/"+article._id} className="btn btn-dark">Read Full Article</Link>
  </div>
</div>
    </>
  )
}

export default Card