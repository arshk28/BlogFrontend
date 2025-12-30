import{useAuth} from '../Context/AuthContext'
import{useAdmin} from '../Context/AdminContext'
import { useEffect , useState } from "react"
import axios from 'axios'
import {Link} from 'react-router'

function Header() {
  let apiurl=import.meta.env.VITE_API_URL
  const{isLoggedin,setIsLoggedin}=useAuth()
  const [userid,setUserID] = useState('') 
  const [UserImage,setUserImage] = useState('') 
  const [response,setResponse] = useState({response:'',status:0}) 
  const{isAdminLoggedin,setIsAdminLoggedin}=useAdmin()
  const url=apiurl+"user/"
 const imageurl=apiurl+"static/"

 useEffect(()=>{
  let u=localStorage.getItem('userid')
  if (u!=''){
    axios.get(url+u)
    .then((res)=>{
      setUserImage(res.data.image)
    })
    .catch((err)=>{console.log(err)})
  }
},[userid,response])

return (
    <>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
<div className="container-fluid">
<a className="navbar-brand" href="/">SOLO VOICES</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link className="nav-link" to="/about">About</Link>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
 Blog's
</a>
<ul className="dropdown-menu">
<li><Link className="dropdown-item" to="/blog/Food & Travel">Food & Travel</Link></li>
<li><Link className="dropdown-item" to="/blog/Sports & Games">Sports & Games</Link></li>
<li><Link className="dropdown-item" to="/blog/Education Tips">Education Tips</Link></li>
<li><Link className="dropdown-item" to="/blog/Health & Wellness">Health & Wellness</Link></li>
<li><Link className="dropdown-item" to="/blog/Tech Updates">Tech Updates</Link></li>
</ul>
</li>
<li className="nav-item">
<Link className="nav-link" to="/contact">Contact</Link>
</li>
<li className="nav-item">

{
  isAdminLoggedin ?
  <Link className="nav-link" to="/admin">Dashboard</Link>
  : isLoggedin ? 
  <Link className="nav-link" to="/user">
   <img src={imageurl+UserImage} alt="" 
   className=" border p-1 rounded-circle" height={35} width={35}/>
  &nbsp;
    My Account</Link>
  :
  <Link className="nav-link" to="/auth">SignIn</Link>
}






</li>


</ul>
</div>
</div>
</nav>
    </>
  )
}

export default Header