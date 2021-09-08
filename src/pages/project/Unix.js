import React from 'react';
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import './sections.css'
import '../../App.css'
import Unixsystem from "../../components/images/Unix.png"

export default function Unix() {
    return (
        <div className='projectsection'>
            <div className="Row ">
                <div className="buttonhead">
                    <Link to='/Project'  style={{ textDecoration: 'none' }}>
                        <Button buttonStyle="button--Primary" buttonSize='button--Medium'>
                        <i className="fas fa-long-arrow-alt-left"></i> Back</Button>
                    </Link>
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
    );
}