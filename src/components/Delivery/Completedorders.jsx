import React from 'react'

const Completedorders = () => {
  return (
    <>
    <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">View completed orders</h3>
            <table class="table">
              <thead>
                  <tr>
                      <th>#</th>
                   
                      <th>Username</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Date</th>
                      <th>Products</th>
                      <th>Paymentstatus</th>

                      <th>Orderstatus</th>




                     

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Appu</td>
                      <td>Priyam house,Nileshwar</td>
                      <td>7510394854</td>

                      <td>12/09/2023</td>
                      <td>Kathakali,Kuchipudi</td>
                      <td>Paid</td>
<td>Completed</td>
                     
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
  </>
  )
}

export default Completedorders