import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import "./publicProfile.css"
import "./publicProfile.css"


const PubLicProfile = () => {
    const { profName } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const [profileImg, setProfileImg] = useState("");

    useEffect(() => {
        const callProfilePage = async () => {
            try {
                const res = await fetch(`/profile/${profName}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    // credentials: "include"
                });

                if (res.status === 404) {
                    navigate('/error')
                }

                const data = await res.json();
                // console.log(data);

                setUserData(data);
                if (!data.isProfileComplete == false) {
                    setProfileImg(data.profileData[0].image)
                }





            } catch (error) {
                console.log("Catch Error", error);

            }
        }

        callProfilePage();
        // console.log(userData.profileData[0].occupation);
    }, []);

    // const callProfilePage = async () => {
    //     try {
    //         const res = await fetch(`/profile/${profName}`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json"
    //             },
    //             // credentials: "include"
    //         });
    //         // console.log(res);
    //         const data = await res.json();
    //         // console.log(data);

    //         setUserData(data);
    //         if (!data.isProfileComplete == false) {
    //             setProfileImg(data.Profile[0].profileData[0].image)
    //         }



    //         if (!res.status === 200) {
    //             console.log("Error");
    //             window.alert('Please Log In ')
    //             navigate('/login')
    //         }

    //     } catch (error) {
    //         console.log("Catch Error", error);

    //     }
    // }




    // Function for Month 
    function getJoinedDate() {
        const month = new Date(parseInt(userData.joinedDate)).getUTCMonth();
        const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = new Date(parseInt(userData.joinedDate)).getUTCFullYear();
        return <>{monthArray[month]} {year}</>;

    }

    const redrr = () => {
        if (!userData.isProfileComplete) return (
            <>
                <div className="container">
                    <div className="d-flex m-4">

                        <div className=" w-40 mx-2 p">
                            <div className='card m-2' style={{ width: "36rem" }}>
                                <center>
                                    <img src={""} alt="" className='image' />
                                    <br />
                                    <span>{userData.username}</span>
                                    <br />
                                    <hr className="featurette-divider mx-4" />
                                </center>

                                <span>Member since: {Object.keys(userData).length === 0 ? "" : getJoinedDate()}</span>
                                <span>Last Delivery:</span>

                            </div>
                        </div>
                    </div>
                </div>

            </>)
        else {
            const checkGig = () => {
                if (userData.gigs.length < 1) { return }
                else {
                    return (
                        <>
                            <div className="  w-60  d-flex flex-wrap">

                                <div className="card m-2" style={{ height: "27rem", width: "17rem" }}>
                                    <img src="https://source.unsplash.com/1600x900/?nature,water" className="card-img-top rounded-2" style={{ height: "200px", width: "270px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div className="card m-2" style={{ height: "27rem", width: "17rem" }}>
                                    <img src={""} className="card-img-top rounded-2" style={{ height: "200px", width: "270px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>



                            </div>

                        </>)
                }
            }
            return (<>
                <div className="container">
                    <div className="d-flex m-4">

                        <div className=" w-40 mx-2 p">
                            <div className='card m-2' style={{ width: "36rem" }}>
                                <center>
                                    <img src={profileImg} alt="" className='image' />
                                    <br />
                                    <span>{userData.username}</span>
                                    <br />
                                    <a className='btn btn-outline-success '>Contact Me</a>

                                    <hr className="featurette-divider mx-4" />
                                </center>

                                <span>Member since: {Object.keys(userData).length === 0 ? "" : getJoinedDate()}</span>
                                <span>Last Delivery:</span>

                            </div>

                            <div className="card m-2 gg" style={{ width: "36rem" }}>
                                <div>
                                    <center>

                                        <p className='border border-primary rounded-2 m-2'><span className='text-black h5 '> <u>Description</u> : </span>
                                            {userData.profileData[0].description}
                                        </p>
                                    </center>
                                </div>
                                <div className="skills ms-1">

                                    <h6>Skills: </h6>
                                    {userData.profileData[0].occupation.map((elems, index) => {

                                        return <span key={index} className="border border-dark rounded-pill px-4">{elems}</span>

                                    })}
                                </div>
                                <span>Languages</span>
                            </div>
                        </div>
                        {checkGig()}


                    </div>
                </div>


            </>)
        }

    }

    return (
        <>
            {redrr()}

        </>
    )
}

export default PubLicProfile
