import React, { useState } from 'react';
import "./task.css"



function Page1({ formData, setFormData }) {


    return (
        <>

            <div className="flex-wrap">
                <label className='h4 pe-3'>Full Name</label>
                <input className='me-2' type="text" placeholder='firstname' />
                <input className='' type="text" placeholder='lastname' />
            </div>

            <hr className="featurette-divider" />
            <br />

            <label className="h4 me-3">Gig Banner</label>
            <input type="file" id='inputfile' />

            <div className='img-view mt-2' id='imgview'>
                <img src="" alt="" className='img-view__img' />
                <span className="img-view__def-txt"> Image Preview </span>
            </div>

            <br />
            <hr className="featurette-divider" />

            <h2 htmlFor="description">Description</h2>
            <textarea name="" id="description" cols="90" rows="10"></textarea>
            <br />
            <hr className="featurette-divider" />






        </>
    )
}

export default Page1
