import React, { useState } from 'react'

import Page1 from './Page1';
import Page2 from './Page2';


function GigsForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        description: "",
    });

    const FormTitles = ["Personal Info", "Professional Info"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Page1 formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Page2 formData={formData} setFormData={setFormData} />;
        }
    };


    return (
        <>
            <div className="container">
                <label className='h2 text-muted'>{FormTitles[page]}</label>
                {PageDisplay()}

                <button type='button' className="btn btn-outline-success justify-content-end"
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}> Prev &nbsp; <i className="bi bi-arrow-right"></i> </button>

                <button type='button' className="btn btn-outline-success justify-content-end"
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                            console.log(formData);
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }} > {page === FormTitles.length - 1 ? "Submit" : "Next"} &nbsp; <i className="bi bi-arrow-right"></i> </button>
            </div>

        </>
    )
}

export default GigsForm
