import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classnames from 'classnames';
import './styles.css'

TodoList.propTypes = {
    courses: PropTypes.array,
    onCourseClick: PropTypes.func
};
TodoList.defaultProps = {
    courses: [],
    onCourseClick: null
}

function TodoList({ courses, onCourseClick }) {

    const handleCourseClick = (course, index) => {
        if (!onCourseClick) return;

        onCourseClick(course, index)
    }

    return (
        <>
            <ul>
                {courses.map((course, index) => (
                    <li
                        className={classnames({
                            'course-item': true,
                            completed: course.status === 'completed'
                        })}
                        key={course.id}
                        onClick={() => handleCourseClick(course, index)}
                    >
                        {course.name}
                    </li>
                ))
                }
            </ul >

        </>

    );
}

export default TodoList;