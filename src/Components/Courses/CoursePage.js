import React,{useState} from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../Actions/CourseAction";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

const CoursesPage = (props) =>{
    const [Course,updateCourse] = useState({title:''});

    const handleChange = event =>{
        updateCourse({...Course,title:event.target.value});
    }
    const handleClick = event =>{
        event.preventDefault();
        //props.createCourse(Course);
        props.actions.createCourse(Course);
    }

    return(
    <>
        <h2>Courses Page</h2>
        {/* <div>
            <span>Course Name: {Course.name}</span>{" | "}
            <span>Course Id: {Course.id}</span>{" | "}
            <span>Course Duration: {Course.duration}</span>
        </div> */}
        <div>            
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Update Course</button>
            {
                props.Course && props.Course.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))
            }
        </div>
    </>
);
}

CoursesPage.propTypes ={
    //createCourse : PropTypes.func.isRequired,
    actions:  PropTypes.object.isRequired,
    Course: PropTypes.array.isRequired
};

function mapStateToProps(state){
    return{
        Course:state.course,
    }
}

function mapDispatchToProps(dispatch){
    return{
        //createCourse: Course=>dispatch(CourseActions.createCourse(Course))
        actions: bindActionCreators(CourseActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);