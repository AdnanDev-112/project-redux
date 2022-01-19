import React, { useState } from 'react';
import "./task.css"



function Page1({ formData, setFormData, image, setImage, file, setFile }) {

    const ImageFunc = (image) => {
        const img = image[0];
        setFile(img);
        setImage(URL.createObjectURL(img));


    }
    return (
        <>

            <div className="flex-wrap">
                <h4 className='h4 pe-3' >Full Name</h4>
                <input className='me-2' type="text" value={formData.firstName} onChange={(event) => setFormData({ ...formData, firstName: event.target.value })} placeholder='firstname' />
                <input className='' type="text" value={formData.lastName} onChange={(event) => setFormData({ ...formData, lastName: event.target.value })} placeholder='lastname' />
            </div>

            <hr className="featurette-divider" />
            <br />

            <h4 className="h4 me-3">Gig Banner</h4>

            <input type="file" id='inputfile' onChange={(event) => { ImageFunc(event.target.files) }} />
            <div className='img-view mt-2' style={{ backgroundImage: `url(${image})` }} id='imgview'>
                <span className="img-view__def-txt" > Image Preview </span>
            </div>

            <br />
            <hr className="featurette-divider" />

            <h2 htmlFor="description">Description</h2>
            <textarea name="" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} id="description" cols="90" rows="10"></textarea>
            <br />
            <hr className="featurette-divider" />






        </>
    )
}

export default Page1
