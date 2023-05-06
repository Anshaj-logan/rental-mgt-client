import React from 'react'

const Newreturnorders = () => {
  return (
    <>
    <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">View newreturn orders</h3>
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

                      <th>DeliveryStatus</th>




                     

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

                      <td> <a href="" className="btn btn-primary px-3"><select>
                        <option>Pending</option>
                        <option>Collected</option>
                       


                        </select></a></td>

                    </tr>
              </tbody>
            </table>
          </div>
        </div>
  </>
  )
}

export default Newreturnorders