import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/categories/Categoriessort';
import Home from './components/Home/Home';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/Signup/SignupForm";
import ErrorPage from "./components/ErrorPage/ErrorPage"
import MyProfile from './components/MyProfile/MyProfile';

import Category from './components/categories/Category';
import ProfileForm from './components/ProfileCompletion/ProfileForm';
import GigForm from './components/CreateGigs/GigForm';

import PublicProfile from "./components/PublicProfile/PublicProfile"
import GigDisplay from './components/GigDisplay/GigDisplay';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="home" exact element={<Home />} />
          {/* <Route path="categories" exact element={<Categories/>} /> */}
          <Route path="categories" exact element={<Category />} />

          <Route path="register" exact element={<SignupForm />} />
          <Route path="login" exact element={<LoginForm />} />
          <Route path="myprofile" exact element={<MyProfile />} />
          <Route path="complete_profile" exact element={<ProfileForm />} />
          <Route path="complete_gig" exact element={< GigForm />} />


          <Route path="profile/:profName" element={<PublicProfile />} />

          <Route path="categories/gig/:gigID" element={<GigDisplay />} />




          <Route path="error" exact element={<ErrorPage />} />
          <Route path="*" exact element={<ErrorPage />} />



        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
