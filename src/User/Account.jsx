import Password from "./Password"
import Profile from "./Profile"
import Image from "../Components/Image"
import { useEffect , useState } from "react"

function Account() {
  const [userid,setUserID] = useState('') 
  useEffect(()=>{
  let u=localStorage.getItem('userid')
  if (u!='')
  setUserID(u)
  },[])
 return (
    <>
<h1 className="mt-3">Manage Account </h1>
<Image  />
<Profile userid={userid} setUserID={setUserID}/>
<Password userid={userid} setUserID={setUserID}/>
  </>
  )
}
export default Account
