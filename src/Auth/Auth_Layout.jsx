import { Outlet } from "react-router";
import Header from "./../Components/Header"
function Auth_Layout() {
  

  return (
    <>
  <Header/>
   <section className="container">
  <div className="row justify-content-evenly border btheme my-4">
  <div className="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 py-5">
  <Outlet/>
  </div>
  </div>
  </section>
    </>
  )
}

export default Auth_Layout