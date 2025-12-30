import { createContext, useContext, useState, useEffect} from "react"
const AdminContext= createContext()

export const useAdmin=()=>{return useContext(AdminContext)}
export const AdminProvider=({children})=>{

  const [isAdminLoggedin, setIsAdminLoggedin]= useState(false)
  const value={isAdminLoggedin,setIsAdminLoggedin}

  useEffect(()=>{
    const adminid = localStorage.getItem('adminid')
    if(adminid)
      setIsAdminLoggedin(true)
    else
      setIsAdminLoggedin(false)
  })
  return (
    <>
     <AdminContext.Provider value={value}>
      {children}
     </AdminContext.Provider>
    </>
  )
  }


