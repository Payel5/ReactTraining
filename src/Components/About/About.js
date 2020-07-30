import React from 'react';
import {Link} from 'react-router-dom';

const About = () =>(
    <>
    <h2>This is About page</h2>
    <div>This page contains about the course</div>
    <Link to="/">Go to HomePage</Link>
    </>
);

export default About;