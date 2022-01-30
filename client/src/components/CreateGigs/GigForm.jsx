import React, { useState } from 'react';
import Overview from "./Overview";
import Pricing from "./Pricing";
import API from "./catApi";


const GigForm = () => {
    const [page, setPage] = useState(0);
    const [image, setImage] = useState("");
    const [file, setFile] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        category: "Music & Audio",
        category1: "Singer",
        description: "",
        image: "",
        price: ["", ""],
        pricingPage: {
            title1: "",
            description1: "",
            deadline1: "",
            title2: "",
            description2: "",
            deadline2: "",
            checkedBoxes: []

        }
    });

    const FormTitles = ["Overview Info", "Pricing Info"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Overview formData={formData} setFormData={setFormData} image={image} setImage={setImage} file={file}
                setFile={setFile} api={API} />;
        } else if (page === 1) {
            return <Pricing formData={formData} setFormData={setFormData} />;
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
