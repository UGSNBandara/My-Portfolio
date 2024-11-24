import React from "react";
import './About.css'
import profile_image from '../../assets/my.png'
import C from '../../assets/skills/cP.png'
import Cplus from '../../assets/skills/c++P.png'
import csharp from '../../assets/skills/csharpP.png'
import flutter from '../../assets/skills/flutterP.png'
import tensor from '../../assets/skills/tensorP.png'
import blender from '../../assets/skills/blenderP.png'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_image} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        <p>This part it just to test the viisibility, and i will upload the correct part later.</p>
                        <p>This part it just to test the viisibility, and i will upload the correct part later.</p>
                    </div>
                    <div className="skills">
                        <img src={C} alt="" />
                        <img src={csharp} alt="" />
                        <img src={Cplus} alt="" />
                        <img src={flutter} alt="" />
                        <img src={tensor} alt="" />
                        <img src={blender} alt="" />
                    </div>
                </div>
            </div>

            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>1</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>3+</h1>
                    <p>Month of Experience</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>3.91</h1>
                    <p>C - GPA</p>
                </div>
            </div>
        </div>
    )
}

export default About