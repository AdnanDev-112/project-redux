import React, { useState } from 'react';
import { useEffect } from 'react';
import "./overview.css"
// import "./overview.js"

function Overview({ formData, setFormData, image, setImage, file, setFile, api }) {
  const ImageFunc = (image) => {
    const img = image[0];
    setFile(img);
    setImage(URL.createObjectURL(img));


  }

  const [selectedCato, setSelectedCato] = useState(formData.category);
  const [selectedOpt2, setSelectedOpt2] = useState([]);

  useEffect(() => {
    console.log(api);
    handleOption2()
  }, []);


  function handleOption2() {
    const temp = api.filter(elems => elems.option1 === selectedCato);
    const temp2 = temp[0].option2;
    setSelectedOpt2(temp2);
  }
  function handleOption1(value) {
    setSelectedCato(value);
    const temp = api.filter(elems => elems.option1 === value);
    const temp2 = temp[0].option2;
    setSelectedOpt2(temp2);
    setFormData({ ...formData, category: value, category1: temp2[0] })

  }


  return <>
    <div className='container overview '>

      <div className="card m-5 gg">
        <div className='title' >
          <label className='h3'>TITLE</label>
          <br />
          <br />

          <textarea name="" id="" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} cols="64" rows="3"></textarea>

        </div>
        <br />
        <div className='category'>


          <label className='h3'>Category</label>
          <br />
          <br />
          <select value={formData.category} name="category" className=' ms-5 rounded-3 px-4' onChange={(event) => handleOption1(event.target.value)} style={{}}>
            {api.map((elem, index) => {
              return (
                <option key={index} value={elem.option1} defaultValue="">{elem.option1}</option>

              )
            })}
          </select>
          <select value={formData.category1} name="subcategory" onChange={(event) => setFormData({ ...formData, category1: event.target.value })} className='ms-5 rounded-3 px-4'>
            {selectedOpt2.map((elem, index) => {
              return (
                <option key={index} value={elem} defaultValue="">{elem}</option>
              )
            })}

          </select>
        </div>

        <center className="mt-4">

          <input type="file" id="image_input" onChange={(event) => { ImageFunc(event.target.files) }} accept='image/png,image/jpg' />
          <div id="display_image" style={{ backgroundImage: `url(${image})` }}>
            <br />
            <span className="image-preview m-4">image Preview</span>

          </div>
          <br />
          <span>Edit your Profile</span>

        </center>

        <div className='search'>
          <label className='h3'>Description</label>
          <br />

          <br />
          <textarea name="" id="" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} cols="50" rows="7"></textarea>



        </div>
      </div>

    </div>




  </>;
}

export default Overview;
