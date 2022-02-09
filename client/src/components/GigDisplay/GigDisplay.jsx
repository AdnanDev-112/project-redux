import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./gigDisplay.css"
import axios from 'axios';

import profesDetails from "../CreateGigs/profesDetails"

function GigDisplay() {
    const { gigID } = useParams();
    const navigate = useNavigate();
    const [gigData, setGigData] = useState([]);
    const [userData, setUserData] = useState({});
    const [cat2Options, setCat2Options] = useState([]);
    const [tab, setTab] = useState(0);
    const [activeTab1, setactiveTab1] = useState({});
    const [activeTab2, setactiveTab2] = useState({});

    useEffect(() => {

        const callGigPage = async () => {
            try {
                const res = await fetch(`/categories/gig/${gigID}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    }
                });

                if (res.status === 404) {
                    navigate('/error')
                }

                const data = await res.json();

                setGigData(data);
                getCat2Options(data.category1);
                const respo = await fetch(`/profile/getGigDisplay/${data.ownerID}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    }
                });
                if (respo.status === 404) {
                    navigate('/error')
                } else {
                    const data2 = await respo.json();

                    setUserData(data2);
                }



            } catch (error) {
                console.log("Catch Error", error);

            }
        }
        callGigPage();

    }, []);

    // Joined Date
    function getJoinedDate() {
        const month = new Date(parseInt(userData.joinedDate)).getUTCMonth();
        const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = new Date(parseInt(userData.joinedDate)).getUTCFullYear();
        return <> {monthArray[month]} {year}</>;

    }
    function getCat2Options(cat) {
        const temp = profesDetails.filter(elem => Object.keys(elem)[0] == cat);
        setCat2Options(temp[0][Object.keys(temp[0])])

    }

    const displayCardBody = () => {
        if (tab == 0) {
            return (<><div className="py-2">{Object.keys(userData).length === 0 ? "" : `${gigData.pricingPage.description1} `}</div>
                <br />
                <span className="h5 ">Keypoints</span>
                <br />
                <span className="h6 mt-4" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Included <i className="bi bi-caret-down-fill"></i>
                </span>
                <div className="collapse" id="collapseExample">
                    <div className="" >
                        <ul className="list-unstyled" >
                            {cat2Options.map((elem, index) => {
                                return (
                                    <li key={index}><span>{gigData.pricingPage.checkedBoxes[index * 2] == true && <i className="bi bi-patch-check"></i>}
                                        {gigData.pricingPage.checkedBoxes[index * 2] == false && <i className="bi bi-x"></i>}
                                        {elem} </span></li>
                                )
                            })}

                        </ul>
                    </div>
                </div></>)
        } else {
            return (<><div className="py-2">{Object.keys(userData).length === 0 ? "" : `${gigData.pricingPage.description2}`}</div>
                <br />
                <span className="h5 ">Keypoints</span>
                <br />
                <span className="h6 mt-4" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Included <i className="bi bi-caret-down-fill"></i>
                </span>
                <div className="collapse" id="collapseExample">
                    <div className="" >
                        <ul className="list-unstyled" >
                            {cat2Options.map((elem, index) => {
                                return (
                                    <li key={index}><span>{gigData.pricingPage.checkedBoxes[(index * 2) + 1] == true && <i className="bi bi-patch-check"></i>}
                                        {gigData.pricingPage.checkedBoxes[(index * 2) + 1] == false && <i className="bi bi-x"></i>}
                                        {elem} </span></li>
                                )
                            })}

                        </ul>
                    </div>
                </div></>)
        }

    }

    return <>
        <div className="d-flex m-4 profile flex-wrap">

            <div className=" w-40  flex-wrap pf">
                <div className=' m-5' style={{ width: "50rem" }}>
                    <div className="">
                        <span className=" m-5 h4"> {gigData.title} </span>
                        <img src={gigData.image} alt="" className='my-3' style={{ height: "31rem", width: "50rem" }} />
                    </div>
                </div>
                <div className=" m-5 gg" style={{ width: "45rem" }}>
                    <div>
                        <center>

                            <p className=' rounded-2 m-3'>
                                <span className="h4">About This Gig </span>

                                <span className='text-black h5 flex-wrap'>  </span>
                                {gigData.description} </p>


                        </center>
                        <div className="seller ms-5">
                            <span className="h4 ">About The Seller</span>
                            <div className="row mt-4 mb-3">
                                <div className="col-4">
                                    <img src={Object.keys(userData).length === 0 ? "" : userData.profileData[0].image} alt="" className='image' />
                                </div>
                                <div className="col">
                                    <span className="h4"><b> {userData.username}</b></span>
                                    <br />
                                    <br />
                                    <a className='btn btn-outline-success mt-3 '>Contact Me  <i className="bi bi-telephone-fill ms-2"></i></a>
                                </div>
                            </div>




                            <div className='card m-2' style={{ width: "36rem" }}>

                                <span className=''><b className='text-muted'>Member since:</b>{Object.keys(userData).length === 0 ? "" : getJoinedDate()}</span>

                                <hr className="featurette-divider mx-4" />
                                <span className='text-muted'><b>Description: </b></span>
                                <p className="m-2">{Object.keys(userData).length === 0 ? "" : userData.profileData[0].description}</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" w-60  d-flex flex-wrap pfcard">
                <div className="card m-5" style={{ width: "28rem" }}>
                    <div className="card-header pt-2 pb-3 ">
                        <nav className='nav'>
                            <button className="a btn border-0 basic" style={activeTab1}

                                onClick={() => {
                                    if (tab !== 0) {

                                        setTab((currPage) => currPage - 1);
                                        setactiveTab1({ fontWeight: 700 })
                                        setactiveTab2({ fontWeight: 400 })

                                    }
                                }}
                            >Basic </button>
                            <div className="vr" style={{ height: "2rem" }}></div>
                            <button className="a btn border-0" style={activeTab2}

                                onClick={() => {
                                    if (tab !== 1) {
                                        setTab((currPage) => currPage + 1);
                                        setactiveTab1({ fontWeight: 400 })
                                        setactiveTab2({ fontWeight: 700 })

                                    }
                                }}
                            >Premium</button>

                        </nav>
                    </div>
                    <div className="card-body">
                        <span className="h5">Description</span>
                        {displayCardBody()}

                    </div>
                    <div className="card-footer">

                        <center>

                            <button className="btn btn-success my-2 px-5">Continue</button>
                        </center>
                    </div>
                </div>


            </div>

        </div>
    </>
}

export default GigDisplay;
