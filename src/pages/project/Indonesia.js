import React from 'react'
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './sections.css'
import '../../App.css'
import Exploreindonesia from "../../components/images/Exploreindonesia2.png"
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function Indonesia() {
    return (
        <>
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
            <HashLink  to="/#projects" >
          <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesLeft}/> Back</Button>
                    </HashLink >
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
                {/* <Link to={{pathname:"https://exploreindonesia2021.000webhostapp.com/Welcome.html"}} className="link" >
                        <Button className='projectButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesRight}/> Visit Explore Indonesia</Button>
                </Link> */}
            </div>
        </div>
        <div className="projectColumnImg">
            <p className="SmallSpacing" />
            <img className="ProjectImage" src={Exploreindonesia} />
        </div>
    </div> 
    <Footer/>
      </>        
    );
}