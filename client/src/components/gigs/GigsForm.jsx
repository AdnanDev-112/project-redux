import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';


function GigsForm() {


    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        description: "",
        occupation: [],

    });

    // Post Form Function 
    const postFormData = async () => {

        const { firstName, lastName, description, occupation } = formData;

        const response = await fetch("/complete_profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, description, occupation
            }),
            credentials: "include"
        });

        // const data = await response.json();
        if (response.status === 200) {
            window.alert("Sucess");
            navigate("/home");
        }

    }

    // **************



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
                <h2 className='h2 text-muted'>{FormTitles[page]}</h2>
                {PageDisplay()}

                <button type='button' className="btn btn-outline-success justify-content-end"
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}> Prev &nbsp; <i className="bi bi-arrow-right"></i> </button>

                <button type='button' className="btn btn-outline-success justify-content-end"
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            postFormData();

                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }} > {page === FormTitles.length - 1 ? "Submit" : "Next"} &nbsp; <i className="bi bi-arrow-right"></i> </button>
            </div>

        </>
    )
}

export default GigsForm
