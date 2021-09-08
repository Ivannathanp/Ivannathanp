import React from 'react'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import './sections.css'
import '../../App.css'
import Exploreindonesia from "../../components/images/Exploreindonesia2.png"

export default function Indonesia() {
    return (
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
                <Link to='/Project'  style={{ textDecoration: 'none' }}>
                    <Button buttonStyle="button--Primary" buttonSize='button--Medium'>
                    <i className="fas fa-long-arrow-alt-left"></i> Back</Button>
                </Link>
                <h1 className='projectTitle'> Explore Indonesia </h1>
            </div>   
            <div className="projectColumn">
                <p className="projectSubTitle">June 2021</p>
                <p className="SmallSpacing" />
                <p className="projectHead">Project Description</p>
                <p className="projectBody">A responsive tourism website for Indonesia that provides detailed information regarding best tourism places, preparations regarding visitation to Indonesia
                    , introductory videos for each destinations, information regarding COVID-19 situation in Indonesia through colored map. This website is created using HTML, CSS, and PHP in Visual Studio Code. </p>
                <p className="projectHead">My Role</p>
                <p className="projectBody">Personally build and design every pages and features on the website from the ground up. </p>
                <Link to={{pathname:"https://exploreindonesia2021.000webhostapp.com/Welcome.html"}} className="link" >
                        <Button className='projectButton' buttonStyle='button--More' buttonSize='button--Medium'><i class="fas fa-angle-double-right"></i> Visit Explore Indonesia</Button>
                </Link>
            </div>
        </div>
        <div className="projectColumnImg">
            <p className="SmallSpacing" />
            <img className="ProjectImage" src={Exploreindonesia} />
        </div>
    </div>       
    );
}