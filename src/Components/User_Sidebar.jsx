import {Link} from 'react-router'
import{useAuth} from '../Context/AuthContext'
import {useNavigate} from 'react-router'

function User_Sidebar() {
  let navigate = useNavigate();
  const{isLoggedin,setIsLoggedin}=useAuth()
    const handleLogout=()=>{
    localStorage.removeItem('userid')
    setIsLoggedin(false)
    navigate('/')
  }

  return (
    <>
             <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <a className="navbar-brand" href="#">Welcome User's</a>

    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">User Panel</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
           <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/user">Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/articleform ">Article_Form </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="/user/article">Article</Link>
          </li>
           <li className="nav-item">
            <a className="nav-link" href='#' onClick={handleLogout} >Logout</a>
          </li>
        </ul>
  
      </div>
    </div>
  </div>
</nav>
     
    </>
  )
}

export default User_Sidebar