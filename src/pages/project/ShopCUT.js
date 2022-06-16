import React from 'react';
import { Button } from '../../components/Button/Button'
import { HashLink } from 'react-router-hash-link';
import './sections.css'
import '../../App.css'
import Shop from "../../components/images/Shopscut2.png"
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function ShopCUT() {
    return (
        <>
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
            <HashLink  to="/#projects" >
          <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesLeft}/> Back</Button>
                    </HashLink >
                <h1 className='projectTitle'> ShopScut </h1>
            </div>   
            <div className="projectColumn">
                <p className="projectSubTitle">December 2020</p>
                <p className="SmallSpacing" />
                <p className="projectHead">Project Description</p>
                <p className="projectBody">An e-commerce application based on windows forms for students of SCUT that is connected to an SQL database.
                    There are two interfaces, one for administrator (sellers) and the other for users (buyers). </p>
                    <p className="projectHead">My Role</p>
                <p className="projectBody">I was in charge of keeping track of the user's transaction histories, user registration, and products which then is connected to the SQL database for updates. </p>
            </div>
        </div>
        <div className="projectColumnImg">
            <p className="SmallSpacing" />
            <img className="ProjectImage" src={Shop} />
        </div>
    </div>    
      <Footer/>
      </>  
    );
}