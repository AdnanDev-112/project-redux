import React,{useState} from 'react'
import "./Form.css"
import {Link, useNavigate } from 'react-router-dom'



function SignupForm() {
    const navigate = useNavigate();
   
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    let name,value;
    const handleInputs = (e)=>{
        
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }

    const postData = async (event)=>{
        event.preventDefault();

        const {name,email,password,confirmpassword} = user ;

       const response =  await fetch("/register",{
           method:"POST",
           headers:{
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
            name,email,password,confirmpassword
           })
       });

       const data  = await response.json();
       if(data.status === 422 || !data){
           window.alert("Invalid Registration")
       }else{
           window.alert("Sucess");
           navigate("/login");
       }


    }


return (
<>
<div className="main" id="main">    
    <div className="outer">
        <div className="signupcard" >
        </div>
        <div className="content" >
            <div className="">
                <form method='POST'>
                    <h1>Sign Up</h1>
                    <div className="form">
                        <div className="">
                            <i className="zmdi zmdi-account"></i>
                            <input type="email" className="control" name='name' placeholder="Userame" value={user.name} onChange={handleInputs} />
                        </div>
                    </div>
                    <div className="form">
                        <div className="">
                            <i className="zmdi zmdi-email"></i>
                            <input type="email" className="control" name='email' placeholder="Email-Address" value={user.email} onChange={handleInputs} />
                        </div>
                    </div>
                    <div className="form">
                        <div className="">
                            <i className="zmdi zmdi-lock"></i>
                            <input type="password" placeholder="*******" name='password' className="control" value={user.password}  onChange={handleInputs} />
                        </div>
                    </div>
                    <div className="form">
                        <div className="">
                            <i className="zmdi zmdi-lock"></i>
                            <input type="password" placeholder="*******" name='confirmpassword' className="control"  value={user.confirmpassword} onChange={handleInputs} />
                        </div>
                    </div>
                    <div className="form">
                        <div>
                            <button type="submit"  className="signupbutton" onClick={postData}>Register
                            </button><br />
                            <div>
                            </div> 
                        </div>
                    </div>
                </form>
                <Link className="" to="/login">Already Registered?</Link>
            </div>
        </div>
    </div>
    </div>
</>
)
}

export default SignupForm