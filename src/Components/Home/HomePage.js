import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
            <h3>This is a HomePage</h3>
            <Link to="about">Go to AboutPage</Link>
        </>
    );
}

export default Home;