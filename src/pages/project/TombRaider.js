import React from 'react';
import { Button } from '../../components/Button/Button'
import { HashLink } from 'react-router-hash-link';
import './sections.css'
import '../../App.css'
import Tomb from "../../components/images/Tombraider.jpg"
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function TombRaider() {
    return (
        <>
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
            <HashLink  to="/#projects" >
          <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesLeft}/> Back</Button>
                    </HashLink >
                <h1 className='projectTitle'> The Raider of the Tomb </h1>
            </div>   
            <div className="projectColumn">
                <p className="projectSubTitle">May 2020</p>
                <p className="SmallSpacing" />
                <p className="projectHead">Project Description</p>
                <p className="projectBody">A 2D dungeon game where player have to 
                            explore the random generated rooms to find the key to escape while also fighting against monsters and defeat the boss. 
                            The game was created using c# with Unity Engine. </p>
                <p className="projectHead">My Role</p>
                <p className="projectBody">I was in charge of the player interactions with the environment objects, and the AI for the monsters. </p>
            </div>
        </div>
        <div className="projectColumnImg">
            <p className="SmallSpacing" />
            <img className="ProjectImage" src={Tomb} />
        </div>
    </div>    
    <Footer/>
      </>     
    );
}