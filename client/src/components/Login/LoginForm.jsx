import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "./loginsheet.css"
import { userStatus } from '../../features/userProfile/userProfileSlice'


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (event) => {
        event.preventDefault();

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });




        if (response.status === 400 || !response) {
            window.alert("Invalid Credentials");
        } else if (response.status == 200) {
            window.alert("Sucess");
            dispatch(userStatus());
            localStorage.setItem("logged", true)
            console.log(response)
            navigate("/categories");

        }




    }



    return (
        <>

            <div className="main" id="main">
                <div className="outer">
                    <div className="logincard" >
                    </div>
                    <div className="content" >
                        <div className="">
                            <form method='POST'>
                                <h1>Login</h1>
                                <div className="form">
                                    <div className="">
                                        <i className="zmdi zmdi-account"></i>
                                        <input type="email" className="control" name='email' placeholder="Email-Address" value={email} onChange={(e => setEmail(e.target.value))} />
                                    </div>
                                </div>
                                <div className="form">
                                    <div className="">
                                        <i className="zmdi zmdi-lock"></i>
                                        <input type="password" placeholder="*******" name='password' className="control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form">
                                    <div>
                                        <button type="submit" className="loginbutton " onClick={loginUser}>Login
                                        </button><br />
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <span>Don't have account yet?</span>
                            <Link className="" to="/register"> Create here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
