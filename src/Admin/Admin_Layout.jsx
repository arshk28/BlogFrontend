import { Outlet } from "react-router";
import Admin_Sidebar from "../Components/Admin_Sidebar";

function Admin_Layout() {
  

  return (
    <>
      <Admin_Sidebar/>
      <div className="container py-5">
      <Outlet/>
      </div>
     
    </>
  )
}

export default Admin_Layout