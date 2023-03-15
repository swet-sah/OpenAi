import React from 'react'
import Feature from "./components/feature/feature";
import Brand from "./components/brand/brand";
import Article from "./components/Article/Article";
import Cta from "./components/Cta/cta";
import Navbar from "./components/Navbar/navbar";
import Blog from './containers/Blog/blog';
import Possibility from './containers/possibility/possibility';
import Features from './containers/features/features';
import Footer from './containers/footer/footer';
import WhatGPT3 from './containers/whatGPT3/whatGPT3';
import Header from './containers/header/header';
import './App.css'
const App = () => {
  return (
    <div className='app'>
        <div className='gradient-bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
