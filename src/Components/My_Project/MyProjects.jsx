import React from 'react'
import './MyProjects.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from "react-router-dom";


const MyProjects = () => {
    return (
        <div id='projects' className='myprojects'>
            <div className='myprojects-title'>
                <h1>My Latest Projects</h1>
            </div>
            <div className="myprojects-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=''/>
                })}
            </div>
            <div>
            <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="myprojects-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </Link>
            </div>
        </div>
    )
}

export default MyProjects