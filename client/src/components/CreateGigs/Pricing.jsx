import React, { useState } from 'react';
import './pricing.css'
import profesDetails from './profesDetails';

function Pricing({ formData, setFormData }) {
  const [priceData, setPriceData] = useState(["", ""]);

  const handleOnType = (position, typedValue) => {
    const updatePriceData = priceData.map((item, index) =>
      index === position ? typedValue : item
    );
    setPriceData(updatePriceData);
    setFormData({ ...formData, price: updatePriceData })

  }

  const pricingPage = formData.pricingPage;


  const basicDelivery = ["5", "6", "7"];
  const premiumDelivery = ["2", "3", "4"];




  const profession = profesDetails.filter((elem) => Object.keys(elem) == formData.category1)[0];

  // Use State for  Checks
  const [checkedState, setcheckedState] = useState(
    new Array(profession[Object.keys(profession)[0]].length * 2).fill(false)
  );

  const handleOnCheck = (position) => {

    const updateCheckedState = checkedState.map((item, index) =>
      ++index === position ? !item : item
    );
    setcheckedState(updateCheckedState);

    // let selectedOccupation = updateCheckedState.map((element, index) => {
    //   if (element === true) {

    //     return apiData[index].category
    //   }
    // }).filter(function (element) {
    //   return element !== undefined;
    // });
    setFormData({ ...formData, pricingPage: { ...pricingPage, checkedBoxes: updateCheckedState } })

  }


  // Rendering Check Boxes 
  function renderOptions() {
    return profession[Object.keys(profession)[0]].map((elemen, index) => {
      let temp = index;
      if (index !== 0) { temp *= 2 } else { temp = index }
      return (
        <tr key={index} rowSpan={1}>
          <td className="td">{elemen}</td>


          <td className="td"><input className="form-check-input" onChange={() => handleOnCheck(temp)} checked={checkedState[temp]} type="checkbox" defaultValue="" id="flexCheckChecked" />
          </td>

          <td className="td"><input className="form-check-input" onChange={() => handleOnCheck(++temp)} checked={checkedState[++temp]} type="checkbox" defaultValue="" id="flexCheckChecked" />
          </td>
        </tr>
      )

    })
  }


  return (
    <>
      <div className="container pricing">
        <label className="h3 ms-2">Pricing</label>
        <div className="card p-4 m-4">
          <table className="table border p-4 " style={{ cellpadding: '0' }}>
            <thead>
              <tr>

                <th className="th p-2" scope='col'>Categories</th>
                <th className="th p-2" scope='col'>Basic</th>
                <th className="th p-2" scope='col'>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td rowSpan={3}></td>
                <td className="td"><textarea name="" id="" cols="35" rows="3" value={formData.pricingPage.title1} onChange={event => setFormData({ ...formData, pricingPage: { ...pricingPage, title1: event.target.value } })} placeholder=' Title'></textarea></td>
                <td className="td"><textarea name="" id="" cols="35" rows="3" value={formData.pricingPage.title2} onChange={event => setFormData({ ...formData, pricingPage: { ...pricingPage, title2: event.target.value } })} placeholder=' Title'></textarea></td>


              </tr>
              <tr>

                <td className="td"><textarea name="" id="" value={formData.pricingPage.description1} onChange={event => setFormData({ ...formData, pricingPage: { ...pricingPage, description1: event.target.value } })} cols="35" rows="6" placeholder='  Description'></textarea></td>
                <td className="td"><textarea name="" id="" value={formData.pricingPage.description2} onChange={event => setFormData({ ...formData, pricingPage: { ...pricingPage, description2: event.target.value } })} cols="35" rows="6" placeholder='  Description'></textarea></td>

              </tr>
              <tr>


                <td className="td">
                  <select className="form-select" value={formData.pricingPage.deadline1} onChange={(event) => setFormData({ ...formData, pricingPage: { ...pricingPage, deadline1: event.target.value } })} aria-label="Default select example">
                    {basicDelivery.map((elem, index) => <option key={index} value={elem} defaultValue="">{elem} Days </option>)}
                  </select></td>



                <td className="td"><select className="form-select" value={formData.pricingPage.deadline2} onChange={(event) => setFormData({ ...formData, pricingPage: { ...pricingPage, deadline2: event.target.value } })} aria-label="Default select example">
                  {premiumDelivery.map((elem, index) => <option key={index} value={elem} defaultValue="">{elem} Days </option>)}

                </select></td>
              </tr>
              <tr>
                <td className="td">Revisions</td>
                <td className="td">
                  <select className="form-select " aria-label="Default select example" value={formData.pricingPage.revision1} onChange={(event) => setFormData({ ...formData, pricingPage: { ...pricingPage, revision1: event.target.value } })}>
                    <option defaultValue="">Select</option>
                    {basicDelivery.map((elem, index) => <option key={index} value={index + 1} defaultValue="">{index + 1}  </option>)}
                  </select></td>


                <td className="td">
                  <select className="form-select " aria-label="Default select example" value={formData.pricingPage.revision2} onChange={(event) => setFormData({ ...formData, pricingPage: { ...pricingPage, revision2: event.target.value } })}>
                    <option defaultValue="">Select</option>
                    {basicDelivery.map((elem, index) => <option key={index} value={index + 1} defaultValue="">{index + 1}  </option>)}
                    <option value={"unlimited"} defaultValue="">Unlimited</option>
                  </select></td>

              </tr>


              {/* {profession[Object.keys(profession)[0]].map((elemen, index) => {
                return (
                  <tr key={index}>
                    <td className="td">{elemen}</td>

                    <td className="td"><input className="form-check-input" onChange={() => handleOnCheck(index)} checked={checkedState[index]} type="checkbox" defaultValue="" id="flexCheckChecked" />
                    </td>

                    <td className="td"><input className="form-check-input" onChange={() => handleOnCheck(++index)} checked={checkedState[++index]} type="checkbox" defaultValue="" id="flexCheckChecked" />
                    </td>
                  </tr>
                )

              })} */}

              {renderOptions()}







              <tr>
                <td className="td">Price:</td>
                {
                  formData.price.map((elem, index) => {
                    return (
                      <td className="td" key={index}><input className='price ms-2' type="number" id="quantity" name="quantity" value={elem} onChange={(event) => handleOnType(index, event.target.value)} /> ₹</td>
                    )
                  })
                }

              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </>);
}

export default Pricing;
