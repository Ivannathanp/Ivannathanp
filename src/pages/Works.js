import React,{useState} from 'react';
import { Button } from '../components/Button/Button'
import { Link } from 'react-router-dom'
import '../App.css'
import '../pages/project/sections.css' 
import Exp1 from "../components/images/exp1.png"
import Exp2 from "../components/images/exp2.png"
import Exp3 from "../components/images/exp3.png"

function Works() {
    const [click, setStyle] = useState(false);
    const changeStyle = () => setStyle(!click)

    return (
        <>
        <div id="works" className='aboutsection'>
            <div className="tabbutton">
                <Link to='/Works' className="links" >
                    <Button className='resumeButton' onClick={changeStyle} buttonStyle={click ? 'button--Outline' : 'button--Primary'} buttonSize='button--Medium'>Work Experience</Button>
                </Link>
                <Link to='/Project'  className="links" >
                    <Button className='projectButton' onClick={changeStyle} buttonStyle={click ? 'button--Primary' : 'button--Outline'} buttonSize='button--Medium'>My Projects</Button>
                </Link>
            </div>
        </div>

        <div id="works" className='expsectionmore'>
            <h2 className='centerheading'>Experiences</h2>
                <div className="exp">
                    <div className="exp1">
                        <div className="contentcenter">
                            <div className="logocontainer">
                                <img src={Exp1} className="logo"/>
                            </div>
                            <div className="details">
                                <h2 className="heading">Perhimpunan Pelajar Indonesia di Tiongkok (PPIT)</h2>
                                <h3>September 2020 - July 2021</h3>
                                <h4>Position: Deputy Head of Graphics</h4>
                            </div>     
                        </div>                   
                    </div>
                    <div className="exp2">
                        <div className="contentcenter">
                            <div className="logocontainer">
                                <img src={Exp2} className="logo"/>
                            </div>
                            <div className="details">
                                <h2 className="heading">SCUT's International Student Union (ISU)</h2>
                                <h3>September 2019 - present</h3>
                                <h4>Position: Head of Multimedia and IT</h4>
                            </div>
                        </div>
                    </div>
                    <div className="exp3">
                        <div className="contentcenter">
                            <div className="logocontainer">
                                <img src={Exp3} className="logo"/>
                            </div>
                            <div className="details">
                                <h2 className="heading">NetEase YouDao (网易有道)</h2>
                                <h3>June 2019 - September 2020</h3>
                                <h4>Position: Translator and transcriber</h4>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>    
    )
}

export default Works;