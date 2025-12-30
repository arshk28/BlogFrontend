import { Outlet } from "react-router";
import User_Sidebar from "../Components/User_Sidebar";

function User_Layout() {
  

  return (
    <>
    <User_Sidebar/>
        <div className="container py-5">
      <Outlet/>
      </div>
    </>
  )
}

export default User_Layout