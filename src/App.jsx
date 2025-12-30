
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Outlet } from "react-router";

function App() {
  

  return (
  <>
<Header/>
<Outlet/>
<Footer/>
  </>
  )
}

export default App
