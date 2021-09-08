import React from 'react'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import './sections.css'
import '../../App.css'
import Codename from "../../components/images/Codenamecerberus.png"

export default function Cerberus() {
    return (
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
                <Link to='/Project'  style={{ textDecoration: 'none' }}>
                    <Button buttonStyle="button--Primary" buttonSize='button--Medium'>
                    <i className="fas fa-long-arrow-alt-left"></i> Back</Button>
                </Link>
                <h1 className='projectTitle'> Codename Cerberus </h1>
            </div>   
            <div className="projectColumn">
                <p className="projectSubTitle">June 2019</p>
                <p className="SmallSpacing" />
                <p className="projectHead">Project Description</p>
                <p className="projectBody">A First-Person Shooter game developed using Unity where player needs to save a trapped person during a zombie invasion. 
                    The game comes with two gamemodes, campaign and survival. Campaign mode requires players to complete a series
                     of missions, while survival mode requires players to complete the missions with limited ammunitions and time. </p>
                <p className="projectHead">My Role</p>
                <p className="projectBody">I was in charge of developing the AI for the zombies to spawn and attack the player, and the interaction between the player and the environments. </p>
            </div>
        </div>
        <div className="projectColumnImg">
            <p className="SmallSpacing" />
            <img className="ProjectImage" src={Codename} />
        </div>
    </div>       
    );
}