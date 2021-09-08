import React from 'react';
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import './sections.css'
import '../../App.css'
import Dompet from "../../components/images/Dompetku2.png"

export default function Dompetku() {
    return (
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
                <Link to='/Project'  style={{ textDecoration: 'none' }}>
                    <Button buttonStyle="button--Primary" buttonSize='button--Medium'>
                    <i className="fas fa-long-arrow-alt-left"></i> Back</Button>
                </Link>
                <h1 className='projectTitle'> Dompetku </h1>
            </div>   
            <div className="projectColumn">
                <p className="projectSubTitle">November 2019</p>
                <p className="SmallSpacing" />
                <p className="projectHead">Project Description</p>
                <p className="projectBody">An expense manager application created with goal to keep tracks of individual expenses that is provided with 
                    a number of customizable categories, statistics, reminders and transactions history. The application was developed 
                    specifically for Android OS users using Android Studio. </p>
                <p className="projectHead">My Role</p>
                <p className="projectBody">I was in charge of expenses algorithm including adding and removing expense details. </p>
            </div>
        </div>
        <div className="projectColumnImg">
            <p className="SmallSpacing" />
            <img className="ProjectImage" src={Dompet} />
        </div>
    </div>       
    );
}