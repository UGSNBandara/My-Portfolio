import React from 'react'
import './Experience.css'
import experience from '../../assets/experience.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from "react-router-dom";

const Experience = () => {
    return (
        <div id='experience' className='myexperience'>
            <div className='myexperience-title'>
                <h1>My Latest Experience</h1>
            </div>
            <div className="myexperience-container">
                {experience.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=''/>
                })}
            </div>
            <div>
            <Link to="/experiences" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="myexperience-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Experience