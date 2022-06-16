import React from 'react';
import { Button } from '../../components/Button/Button'
import { HashLink } from 'react-router-hash-link';
import './sections.css'
import '../../App.css'
import Unixsystem from "../../components/images/Unix.png"
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

export default function Unix() {
    return (
        <>
        <div className='projectsection'>
        <div className="Row ">
            <div className="buttonhead">
            <HashLink  to="/#projects" >
          <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesLeft}/> Back</Button>
                    </HashLink >
                    <h1 className='projectTitle'> Unix File System </h1>
                </div>   
                <div className="projectColumn">
                    <p className="projectSubTitle">June 2021</p>
                    <p className="SmallSpacing" />
                    <p className="projectHead">Project Description</p>
                    <p className="projectBody">A file system that uses inode and C++ where it has features such as to create, delete, 
                    read and update directories and files. </p>
                    <p className="projectHead">My Role</p>
                    <p className="projectBody">I was in charge of the file system create, read, update, and delete functionalities of both files and directories. </p>
                </div>
            </div>
            <div className="projectColumnImg">
                <p className="SmallSpacing" />
                <img className="ProjectImage" src={Unixsystem} />
            </div>
        </div> 
        <Footer/>
      </>        
    );
}