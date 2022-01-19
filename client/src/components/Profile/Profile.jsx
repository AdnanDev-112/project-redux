import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const [profileImg, setProfileImg] = useState("");

    const callProfilePage = async () => {
        try {
            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                credentials: "include"
            });


            const data = await res.json();
            setUserData(data);
            setProfileImg(data.Profile[0].profileData[0].image)
            // console.log(data.Profile[0].profileData[0].image);



            if (!res.status === 200) {
                console.log("Error");
            }




        } catch (error) {
            console.log("Catch Error", error);
            window.alert('Please Log In ')
            navigate('/login')
        }
    }

    useEffect(() => {
        callProfilePage();
    }, [])







    return (
        <>
            <h1>Profile here</h1>
            <h2>Name:  {userData.name}</h2>
            <h2>Email: {userData.email}</h2>
            <img src={profileImg} alt="" />
        </>
    )
}

export default Profile
