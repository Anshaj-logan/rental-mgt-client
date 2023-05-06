import React from 'react'

const Deliveryreg = () => {
  return (
    <>
  <link rel="stylesheet" href="css\reg.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div className="container">
    <div className="pic">
      <img src="img\images\woman-stand.avif" alt="" />
      
    </div>
    <div className="forms">
      <form action="">
        <br />
        <br />
        <h1>Registration Form</h1>
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">First Name</label>
                <br />
                <input type="text" />
              </td>
              <td>
                <label htmlFor="">Last Name</label>
                <br />
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">E-mail</label>
                <br />
                <input type="email" />
              </td>
              <td>
                <label htmlFor="">Phone Number</label>
                <br />
                <input type="tel" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">House Name</label>
                <br />
                <input type="text" />
              </td>
              <td>
                <label htmlFor="">Place</label>
                <br />
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">PIN</label>
                <br />
                <input type="number" />
              </td>
              <td>
                <label htmlFor="">District</label>
                <br />
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Password</label>
                <br />
                <input type="password" />
              </td>
              <td>
                <label htmlFor="">Confirm Password</label>
                <br />
                <input type="password" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</>

  )
}

export default Deliveryreg