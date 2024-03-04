import React, { useEffect } from 'react'
import { Routes, Route,useLocation } from "react-router-dom";
import NotFound from './pages/error/NotFound.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Documentation from './pages/Documentation.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import SignIn from './pages/Auth/SignIn.jsx';
import SignUp from './pages/Auth/SignUp.jsx';
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

const App = () => {
  const TopWindow = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname !== "/") {
        window.scrollTo(0, 0);
      }
    }, [location.pathname]);

    return null;
  };
  return (
    <>
      <TopWindow />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/documentation' element={<Documentation/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App