import React from 'react'

const Purchased = () => {
  return (
    

<div>
<div class="col-md-15">
           <div class="tile">
             <h3 class="tile-title">Ordered Products</h3>
             <table class="table">
               <thead>
                 <tr>
                   <th>#</th>
                   <th>Product Name</th>
                   
                   <th>Date</th>
                   <th>Product quantity</th>
                  
                   <th>Total Price</th>
                   
                   <th>Image</th>
                   <th>Action</th>
                  


                  
                   



                 </tr>
               </thead>
               <tbody>

                 
                 <tr>
                   <td>1</td>
                   <td>Kathakali</td>
                   <td>12/01/2023</td>
                   <td>2</td>
                   <td>1500</td>
               
                    <td>.png</td>
                    <td> <a href="/"className="btn btn-primary px-3">ReturnProduct</a>&nbsp;&nbsp;
                  
                       <a href="/feedback" className="btn btn-primary px-3">Your Feedback</a>
                  
                  </td>
                 </tr>
                 
               </tbody>
             </table>
           </div>
         </div>



   
   </div>
  )
}

export default Purchased