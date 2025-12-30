import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import './index.css'
import App from './App.jsx'
import Admin_Layout from './Admin/Admin_Layout.jsx'
import Articles from './Admin/Articles.jsx'
import Dashboard from './Admin/Dashboard.jsx'
import Users from './Admin/Users.jsx'
import About from './App/About.jsx' 
import Blog from './App/Blog.jsx'
import Contact from './App/Contact.jsx'
import Home from './App/Home.jsx'
import Post from './App/Post.jsx'
import Auth_Layout from './Auth/Auth_Layout.jsx'
import Forgot from './Auth/Forgot.jsx'
import Reset from './Auth/Reset.jsx'
import Signin from './Auth/Signin.jsx'
import Signup from './Auth/Signup.jsx'
import Account from './User/Account.jsx'
import Article_Form from './User/Article_Form.jsx'
import Article from './User/Article.jsx'
import User_Layout from './User/User_Layout.jsx'
import UpdateArticle from './User/UpdateArticle.jsx'
import { AuthProvider,useAuth } from './Context/AuthContext.jsx';
import { AdminProvider,useAdmin } from './Context/AdminContext.jsx';
createRoot(document.getElementById('root')).render(
<StrictMode>
<BrowserRouter>
<Routes>
<Route path="" element={<AuthProvider><AdminProvider><App/></AdminProvider></AuthProvider>}>
<Route index element={<Home />} />
<Route path='about' element={<About />} />
<Route path='blog/:category' element={<Blog />} />
<Route path='contact' element={<Contact />} />
<Route path='post/:id' element={<Post />} />
</Route>

<Route path="user" element={<AuthProvider><User_Layout/></AuthProvider>}>
<Route index element={<Account/>} />
<Route path='articleform' element={<Article_Form />} />
<Route path='article' element={<Article />} />
<Route path='updatearticle/:id' element={<UpdateArticle />} />
</Route>

<Route path="admin" element={<AdminProvider><Admin_Layout /></AdminProvider>}>
<Route index element={<Dashboard />} />
<Route path='articles' element={<Articles />} />
<Route path='users' element={<Users />} />
</Route>

<Route path="auth" element={<AuthProvider><AdminProvider><Auth_Layout /></AdminProvider></AuthProvider>}>
<Route index element={<Signin />} />
<Route path='signup' element={<Signup />} />
<Route path='forgot' element={<Forgot />} />
<Route path='reset' element={<Reset />} />
</Route>

</Routes>
</BrowserRouter>
</StrictMode>,
)
