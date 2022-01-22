import React, { useState } from 'react';
import Overview from "./Overview";
import Pricing from "./Pricing"

const GigForm = () => {
    const [page, setPage] = useState(0);

    const FormTitles = ["Personal Info", "Professional Info"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Overview />;
        } else if (page === 1) {
            return <Pricing />;
        }
    };





    return <>
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


                    } else {
                        setPage((currPage) => currPage + 1);
                    }
                }} > {page === FormTitles.length - 1 ? "Submit" : "Next"} &nbsp; <i className="bi bi-arrow-right"></i> </button>
        </div>

    </>;
};

export default GigForm;
