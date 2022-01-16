import React from 'react';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Categories from './components/categories/Categoriessort';
import Home from './components/Home/Home';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/Signup/SignupForm";
import ErrorPage from "./components/ErrorPage/ErrorPage"
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <>
     <Router>
    <Navbar/>
    
    <Routes>

    <Route path="/" exact element={<Home/>} />
    <Route path="home" exact element={<Home/>} />
    <Route path="categories" exact element={<Categories/>} />

    <Route path="register" exact element={<SignupForm/>}/>
    <Route path="login" exact element={<LoginForm/>}/>
    <Route path="/profile" exact element={<Profile/>}/>


    <Route path="*" exact element={<ErrorPage/>}/>



    </Routes>

    <Footer/>
    </Router>
    </>
  )
}

export default App
