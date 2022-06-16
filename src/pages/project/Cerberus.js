import React from 'react'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './sections.css'
import '../../App.css'
import Codename from "../../components/images/Codenamecerberus.png"
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function Cerberus() {
    return (
        <>
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
            <HashLink  to="/#projects" >
          <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesLeft}/> Back</Button>
                    </HashLink >
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
    <Footer/>
    </>     
    );
}