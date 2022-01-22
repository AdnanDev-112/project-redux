import React from 'react';

function Overview() {
  return <>
    <div className='container  '>

      <div className="card m-5 gg">
        <div className='title' >
          <label className=''>TITLE</label>
          <input type="text" className=" ms-4" style={{ width: '25rem', margin: '0px 100px' }} />

        </div>
        <br />
        <div className='category'>


          <label >Category</label>
          <select name="category" className=' ms-4 rounded-3 px-4' style={{}}>
            <option value="option">Option</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
          </select>
          <select name="subcategory" className='ms-4 rounded-3 px-4'>
            <option value="option">Option</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
          </select>
        </div>

        <div className='search'>
          <label className=''>Search Tag</label>

          <input type="text" className=" ms-4  " style={{ height: '6rem', width: '25rem', margin: '0px 100px' }} />

        </div>
      </div>

    </div>





  </>;
}

export default Overview;
