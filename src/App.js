import React from 'react';
import HomePage from '../src/HomePage.js';
import AboutPage from '../src/About.js';


function App(){
    const route= window.location.pathname;
    if(route === '/About') return <AboutPage/>
    if(route === '/Home') return <HomePage/>
    return<HomePage/>
}

export default App;