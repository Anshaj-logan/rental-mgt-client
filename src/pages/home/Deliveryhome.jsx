import React from 'react'
import Topbardelivery from '../../components/Delivery/Topbardelivery'
import Navdelivery from '../../components/Delivery/Navdelivery'
import Footer from '../../components/footer/Footer'
import NavCarousel from '../../components/nav-carousel/NavCarousel'
import Sidebardelivery from '../../components/Delivery/Sidebardelivery'

const Deliveryhome = () => {
  return (
   <>
   <Topbardelivery/>
   <div class="container-fluid mb-5">
       <div class="row border-top px-xl-5">
          <Sidebardelivery/>
          <div class="col-lg-9">
   <Navdelivery/>
   <NavCarousel/>
   </div> 
       </div>

     </div>
   <Footer/>
   </>



 
  )
}

export default Deliveryhome