import React from "react";
import Logo from "./images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogged, userStatus } from "../features/userProfile/userProfileSlice";


const Navbar = () => {
  // const userStatus = useSelector(userLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async (event) => {
    const response = await fetch("/logout", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json"
      // }
    });

    if (response.status == 200) {
      // window.alert("Sucess");
      dispatch(userStatus());
      localStorage.setItem("logged", false)
      navigate("/home");

    }

  }

  const userLog = localStorage.getItem('logged');
  console.log(userLog)

  const dropDown = () => {
    if (userLog === "true") {
      return (<>

        <li>
          <Link className="dropdown-item p-0" to="/profile">
            My profile
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button type="button" className="dropdown-item p-0" onClick={logoutUser}>
            Logout
          </button >
        </li>
      </>)

    } else {
      return (
        <>

          <li>
            <Link className="dropdown-item p-0" to="/register">
              Sign Up
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item p-0" to="/login">
              Log In
            </Link>
          </li>


        </>
      )

    }
  }



  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid px-3">
          <Link className="navbar-brand" to="/home">
            <img src={Logo} height="35" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/categories">
                  Category
                </Link>
              </li>

            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex">
              <input
                className="form-control mx-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mx-1" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-md-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi-person-circle"></i> Account
                </a>
                <ul
                  className="dropdown-menu p-2 dropdown-menu-dark"
                  aria-labelledby="navbarDropdown"
                >

                  {dropDown()}


                </ul>
                {/* <ul
                  className="dropdown-menu p-2 dropdown-menu-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item p-0" to="/register">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item p-0" to="/login">
                      Log In
                    </Link>
                  </li>
                </ul> */}

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
