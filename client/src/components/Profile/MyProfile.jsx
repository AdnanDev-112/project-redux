import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./profile.css"
import ProfIg from "./bg.png"
import test from "./test.jpg"


const MyProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const [profileImg, setProfileImg] = useState("");

    const callProfilePage = async () => {
        try {
            const res = await fetch('/myprofile', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                credentials: "include"
            });


            const data = await res.json();
            console.log(data);

            setUserData(data);
            if (!data.Profile[0].isProfileComplete == false) {
                setProfileImg(data.Profile[0].profileData[0].image)
            }



            if (!res.status === 200) {
                console.log("Error");
                // window.alert('Please Log In ')
                // navigate('/login')
            }




        } catch (error) {
            console.log("Catch Error", error);

        }
    }

    useEffect(() => {
        callProfilePage();
    }, [])


    // Function for Month 
    function getJoinedDate() {
        const month = new Date(parseInt(userData.joinedDate)).getUTCMonth();
        const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = new Date(parseInt(userData.joinedDate)).getUTCFullYear();
        return <>{monthArray[month]} {year}</>;

    }




    return (
        <>
            {/* <h1>Profile here</h1>
            <h2>Name:  {userData.name}</h2>
            <h2>Email: {userData.email}</h2> */}
            {/* <img src={profileImg} alt="" /> */}
            <div className="container">


                <div className="d-flex m-4">

                    <div className=" w-40 mx-2 p">
                        <div className='card m-2' style={{ width: "36rem" }}>
                            <center>
                                <img src={ProfIg} alt="" className='image' />
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum aspernatur eligendi mollitia repellat porro fuga libero autem, temporibus ad placeat sapiente illum hic dolor molestiae dolores deserunt suscipit consequatur minus esse, in illo. Officiis porro impedit voluptas magnam voluptatum voluptatibus velit neque perferendis? Non quam nulla assumenda, nobis veniam possimus fugiat id praesentium doloribus eius vero dicta itaque nihil facilis accusamus dolor deserunt quia voluptas mollitia exercitationem provident harum ullam sunt natus. Quia eius adipisci dolorum voluptate sed quidem nisi quos similique voluptatem consequatur aut suscipit mollitia veniam animi harum, dicta praesentium maxime magni? Iusto alias quae id tempore!
                                    </p>
                                </center>
                            </div>
                            <div className="skills ms-1">

                                <h6>Skills: </h6>
                                <span className="border border-dark rounded-pill px-4">Web</span>
                            </div>
                            <span>Languages</span>
                        </div>
                    </div>
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
                            <img src={test} className="card-img-top rounded-2" style={{ height: "200px", width: "270px" }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default MyProfile
