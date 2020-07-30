import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './Common/Header';
import Home from "./Home/HomePage";
import About from "./About/About";
import CoursePage from "./Courses/CoursePage";
import PagenotFound from "./PageNotFound";

const App=()=>(
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={CoursePage} />
            <Route component={PagenotFound} />
        </Switch>
    </>
);

export default App;