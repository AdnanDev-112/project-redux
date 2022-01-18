import React, { useState } from 'react'
import Profiles from './profileApi'
import ProfileCard from './ProfileCard';
import Header from './Header'
const UniqueData = [...new Set(Profiles.map((curElem) => {
    return curElem.category
}))]
const Categories = () => {
    const [profileData, setProfileData] = useState(Profiles);
    const [newData, setnewData] = useState(UniqueData);
    const filterItem = (category) => {

        const Updatedlist = Profiles.filter((curElem) => {
            return curElem.category === category
        });
        setProfileData(Updatedlist);
    }
    return (
        <>
            <Header filterItem={filterItem} newData={newData} />
            <ProfileCard profile={profileData} />
        </>
    )
}

export default Categories