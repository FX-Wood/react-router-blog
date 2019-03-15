import React from 'react';

export default function AboutPage(props) {
    return (
        <div className="AboutPage">
            <h2>About Me</h2>
            <img src="https://via.placeholderimage.com/150" alt="me"/>
            <ul className="skills">
                <li>Skill</li>
                <li>Skill</li>
                <li>Skill</li>
                <li>Skill</li>
            </ul>
            <a href="https://google.com">Link to my resume</a>
        </div>
    )
}