import React from 'react';

function Pricing() {
  return <>
    <div className="container">

      <div className="card p-4 m-4">
        <table className="table border px-4" style={{ cellpadding: '0' }}>
          <thead>
            <tr>

              <th scope="col ">Categories</th>
              <th scope="col ">Basic</th>
              <th scope="col">Standard</th>
              <th scope="col">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td rowSpan={3}></td>
              <td><textarea name="" id="" cols="23" rows="6" placeholder='Name Your Package'></textarea></td>
              <td><textarea name="" id="" cols="23" rows="6" placeholder='Name Your Package'></textarea></td>
              <td><textarea name="" id="" cols="23" rows="6" placeholder='Name Your Package'></textarea></td>


            </tr>
            <tr>

              <td><textarea name="" id="" cols="23" rows="6" placeholder='Describe details of your package'></textarea></td>
              <td><textarea name="" id="" cols="23" rows="6" placeholder='Describe details of your package'></textarea></td>
              <td><textarea name="" id="" cols="23" rows="6" placeholder='Describe details of your package'></textarea></td>

            </tr>
            <tr>


              <td><strong>Delivery:</strong> 3 days</td>
              <td><strong>Delivery:</strong> 4 days</td>
              <td><strong>Delivery:</strong> 5 days</td>
            </tr>
            <tr>
              <td>Revisions</td>
              <td><select className="form-select " aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="unlimited">unlimited</option>


              </select></td>
              <td><select className="form-select " aria-label="Default select example">
                <option selected>Select</option>

                <option value="1">One</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="unlimited">unlimited</option>

              </select></td>
              <td><select className="form-select " aria-label="Default select example">
                <option selected>Select</option>

                <option value="1">One</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="unlimited">unlimited</option>

              </select></td>

            </tr>
            <tr>
              <td>Source File</td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
            </tr>
            <tr>
              <td>gg</td>

              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
            </tr>
            <tr>
              <td>gg</td>

              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
            </tr>
            <tr>
              <td>gg</td>

              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
            </tr>
            <tr>
              <td>gg</td>

              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
            </tr>
            <tr>
              <td>gg</td>

              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
              <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </>;
}

export default Pricing;
