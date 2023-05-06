import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import Contactpage from '../../pages/Contactpage/Contactpage'
import Aboutpage from '../../pages/About/Aboutpage'
import Viewdetailpage from '../../pages/Viewdetail/Viewdetailpage'
import Addtocartpage from '../../pages/Addtocart/Addtocartpage'
import Checkoutpage from '../../pages/Checkout/Checkoutpage'
import Deliveryhome from '../../pages/home/Deliveryhome'
import Userhome from '../../pages/home/Userhome'
import Complaintpage from '../../pages/Complaint/Complaintpage'
import Feedbackpage from '../../pages/Feedback/Feedbackpage'
import Userorderpage from '../../pages/userorders/Userorderpage'
import Replycomplaintpage from '../../pages/Complaint/Replycomplaintpage'
import Purchasedorderpage from '../../pages/userorders/Purchasedorderpage'
import Neworderpage from '../../pages/Delivery/Neworderpage'
import Completedorderpage from '../../pages/Delivery/Completedorderpage'
import Newreturnorderpage from '../../pages/Delivery/Newreturnorderpage'
import Completedreturnorderpage from '../../pages/Delivery/Completedreturnorderpage'
import Ordersuccesspage from '../../pages/Ordersuccesspage/Ordersuccesspage'
import Replypage from '../../pages/Contactpage/Replypage'
// import Deliveryreg from '../../pages/Register/Deliveryreg'

const MainRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Deliveryhome' element={<Deliveryhome/>}/>
        <Route path='/userhome' element={<Userhome/>}/>
        
     
    
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        {/* <Route path='/DRegister' element={<Deliveryreg/>}/> */}

        <Route path='/Contact' element={<Contactpage/>}/>
        <Route path='/replies' element={<Replypage/>}/>

        <Route path='/feedback' element={<Feedbackpage/>}/>
        <Route path='/About' element={<Aboutpage/>}/>
  
        <Route path='/Viewdetail' element={<Viewdetailpage/>}/>
        <Route path='/addtocart'element={<Addtocartpage/>}/>
        <Route path='/checkout' element={<Checkoutpage/>}/>
        <Route path='/complaint' element={<Complaintpage/>}/>
        <Route path='/replycomplaint' element={<Replycomplaintpage/>}/>
        <Route path='/Orders' element={<Userorderpage/>}/>
        <Route path='/Purchased' element={<Purchasedorderpage/>}/>
         <Route path='/ordersuccess' element={<Ordersuccesspage/>}/>
         <Route path='/Neworders' element={<Neworderpage/>}/>
         <Route path='/completedorders' element={<Completedorderpage/>}/>
         <Route path='/Newreturnorders' element={<Newreturnorderpage/>}/>
         <Route path='/completedreturnorders' element={<Completedreturnorderpage/>}/>


    </Routes>
    </>
  )
}

export default MainRouter