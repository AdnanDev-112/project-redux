import React from 'react'
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {

    return (
        <>
            <div className="card-container d-flex flex-wrap">
                {
                    profile.map((currE) => {
                        const { id, image, name, description } = currE;
                        return (
                            <div className="card p-2 m-2" style={{ width: "18rem" }} key={id}>
                                <img src={image} className="card-img-top rounded-2" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{name} </h5>
                                    <p className="card-text">{description}</p>
                                    {/* <p><b className="lead lg">Price:</b> <span className="ms-5 ps-5"> </span></p> */}
                                    <Link to={""} className="btn btn-primary rounded-pill">View {name}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProfileCard