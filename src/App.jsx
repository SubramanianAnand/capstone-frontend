import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WhyUs from './pages/WhyUs'
import Working from './pages/Working'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import AllServices from './pages/AllServices'
import Booking from './pages/Booking'
import MyOrders from './pages/MyOrders'
import Update from './pages/update'
import Footer from './pages/Footer'

function App() {
  

  return (
    
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>       
      <Route path='/home' element={<Home/>}/>
      <Route path="/whyus" element={<WhyUs/>} />
      <Route path="/working" element={<Working/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/all" element={<AllServices/>} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/update/:id" element={<Update/>} />
      <Route path="/orders" element={<MyOrders/>} />
    </Routes>
    
    </BrowserRouter>
      
    
  )
}

export default App
