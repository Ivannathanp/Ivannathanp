import React from 'react'
import { Button } from '../components/Button/Button'
import { Link } from 'react-router-dom'
import '../App.css'
import '../pages/project/sections.css' 
import '../components/Navbar/Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePicture from "../components/images/Profile.png";
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer/Footer';

function About() {
    return (
        <>
        
        
          <div id="about" className="aboutsection">
        <div className="aboutRow">
          <div className="leftColumn">
            <figure className="ProfilePicture">
              <img src={ProfilePicture} className="image" />
            </figure>
          </div>
          <div className="rightColumn">
          <Link to="/" >
          <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><FontAwesomeIcon icon={faAnglesLeft}/> Back</Button>
                    </Link>
            <h1 className="aboutTitle">Hi There, I'm</h1>
            <p className="aboutSubTitle">Ivan Nathan Parmenas</p>
            <br></br>
            <h2 className="heading">About Me</h2>
            <p className="aboutBody">
              I am highly organized, passionate, and responsible for the task I
              have been entrusted with. Currently, I am in my last year studying
              Computer Science and Engineering in South China University of
              Technology where I have been involved in a part-time job, and team
              projects such as computer fps game, android money management app,
              website development, and SQL Database. I am seeking a job
              opportunity to put my knowledge and experience in practice, and
              enhance my skills.
            </p>
            
          </div>
        </div>
      </div>

        <div className='aboutsection2'>
        <div className="resumeRow">
            <h1 className='resumeTitle'> Resume </h1>   
        </div>
        <p className="MediumSpacing">  </p>
        <div className="resumeBorderRow">
            <div className="resumeColumn">
                <p className="resumeSubTitle"><a id="resume_education">Education</a></p>
            </div>
            <div className="resumeColumn">
                <p className="resumeSubTitle"> 2014 - 2017 </p>
                <p className="resumeHead"> Elyon Christian School </p>
                <p className="resumeBody"> High School Diploma, Majoring in Science</p>
                <br></br>
                <p className="resumeSubTitle"> 2018 - 2022 </p>
                <p className="resumeHead"> South China University of Technology </p>
                <p className="resumeBody"> Computer Science and Technology</p>
            </div>
        </div>
       
        <p className="MediumSpacing">  </p>
        <div className="resumeBorderRow">
            <div className="resumeColumn">
                <p className="resumeSubTitle"><a id="resume_skills">Skills</a></p>
            </div>
            <div className="resumeColumn">
                <div className="resumeSubRow">
                <div className="resumeColumn">
                        <p className="resumeSubTitle"> Soft Skills </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Creative spirit </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Organized </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Reliable </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Time management </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Team player </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Motivated </p>
                    </div>
                    <div className="resumeColumn">
                        <p className="resumeSubTitle"> Hard Skills </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Photo Editing </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Video Editing </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Translator </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Computer Programming </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Android Studio </p>
                        <p className="SmallSpacing">  </p>
                        <p className="resumeBody"> Website Development </p>
                    </div> 
                </div>
            </div>
        </div>

        <p className="MediumSpacing">  </p>
        <div className="resumeBorderRow">
            <div className="resumeColumn">
                <p className="resumeSubTitle"><a id="resume_languages">Programming Languages</a></p>
            </div>
            <div className="resumeColumn">
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - C++ </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - HTML/CSS </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - Java </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - JavaScript </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - PHP </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - Python </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - SQL </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> - React </p>

            </div>
        </div>
        <p className="MediumSpacing">  </p>
        <div className="resumeBorderRow">
            <div className="resumeColumn">
                <p className="resumeSubTitle"> Spoken Languages </p>
            </div>
            <div className="resumeColumn">
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> Indonesian </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> English (IGCSE as a Second Language) </p>
                <p className="SmallSpacing">  </p>
                <p className="resumeBody"> Chinese (HSK 4) </p>
            </div>
           
        </div>
        <div className="buttonhead">
            <a href='https://drive.google.com/file/d/109fwt4fbQ-0zNT51_SA003m3gbGWEswg/view?usp=sharing' >
                <Button className='downloadButton' buttonStyle='button--Outline' buttonSize='button--Large'> Download My Resume </Button>
            </a>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default About
