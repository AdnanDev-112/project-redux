import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (


        <>
        
        <div id='notFound'>
            <div className="notFound">
                <div className="notFound-404">
                    <h1>404</h1>
                </div>
                <h2>We are Sorry, Page not Found!</h2>
                <p className="mb-5">
                    THE AGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD IT'S NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
                </p>
                <Link to={'/'}>Back to Home</Link>
            </div>
        </div>
        </>
        
    )
}

export default ErrorPage
