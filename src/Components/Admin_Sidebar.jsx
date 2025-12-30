import {Link} from 'react-router'
import{useAdmin} from '../Context/AdminContext'
import {useNavigate} from 'react-router'

function Admin_Sidebar() {
  let navigate = useNavigate();
const{isAdminLoggedin,setIsAdminLoggedin}=useAdmin()
   const handleLogout=()=>{
    localStorage.removeItem('adminid')
    setIsAdminLoggedin(false)
    navigate('/')
  }

  return (
    <>
         <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <a className="navbar-brand" href="#">Blog's Admin</a>

    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Admin Panel</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/articles">Articles</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="/admin/users">Users</Link>
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

export default Admin_Sidebar