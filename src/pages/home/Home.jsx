import React from "react";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import NavCarousel from "../../components/nav-carousel/NavCarousel";
import Nav from "../../components/nav/Nav";
import SideBar from "../../components/side-bar/SideBar";
import TopBar from "../../components/top-bar/TopBar";
import Products from "../../components/Products/Products";

function Home() {
  return (
    <>
     {/* Topbar Start  */}
      <TopBar />
       {/* Topbar End 
       Navbar Start  */}
      <div class="container-fluid mb-5">
        <div class="row border-top px-xl-5">
           <SideBar/>
           <div class="col-lg-9">
            <Nav/>
            <NavCarousel/>
            </div> 
        </div>

      </div>
      <div class="container-fluid pt-5">
        <Feature/>
      </div>
   <Products/>
      <Footer/>
    </>
  );
}

export default Home;
