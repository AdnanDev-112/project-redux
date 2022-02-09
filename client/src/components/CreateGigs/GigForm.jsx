import React, { useState } from 'react';
import Overview from "./Overview";
import Pricing from "./Pricing";
import API from "./catApi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const GigForm = () => {
    const navigate = useNavigate();
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
            deadline1: "5",
            revision1: "2",
            title2: "",
            description2: "",
            deadline2: "2",
            revision2: "2",
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


    // Post Form Function 
    const postFormData = async () => {

        // const { firstName, lastName, description, occupation, image } = formData;

        // Image Part
        const imgData = new FormData();
        imgData.append("file", file);
        imgData.append("upload_preset", "fgjs1dpj");

        const uploadImg = await axios.post("https://api.cloudinary.com/v1_1/dgcdtnjau/image/upload", imgData)
        // console.log(uploadImg);
        const imageURL = uploadImg.data.url;

        const response = await fetch("/complete_gig", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                ...formData, image: imageURL
            }),
            credentials: "include"
        });

        // const data = await response.json();
        if (response.status === 200) {
            window.alert("Sucess");
            navigate("/home");
        }

    }



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
                        postFormData();

                    } else {
                        setPage((currPage) => currPage + 1);
                    }
                }} > {page === FormTitles.length - 1 ? "Submit" : "Next"} &nbsp; <i className="bi bi-arrow-right"></i> </button>
        </div>

    </>;
};

export default GigForm;
