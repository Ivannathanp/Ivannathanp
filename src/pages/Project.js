import React,{useState} from 'react';
import { Button } from '../components/Button/Button'
import { Link } from 'react-router-dom'
import '../App.css'
import '../pages/project/sections.css' 
import Cards from '../components/Cards/Cards'

function Project() {
    const [click, setStyle] = useState(false);
    const changeStyle = () => setStyle(!click)
    return (
        <>
            <div id="projects" className='projectsectionmore'>
                <div className="tabbutton">
                    <Link to='/Works' className="links" >
                        <Button className='resumeButton' onClick={changeStyle} buttonStyle={click ? 'button--Primary' : 'button--Outline'} buttonSize='button--Medium'>Work Experience</Button>
                    </Link>
                    <Link to='/Project'  className="links" >
                        <Button className='projectButton' onClick={changeStyle} buttonStyle={click ? 'button--Outline' : 'button--Primary'} buttonSize='button--Medium'>My Projects</Button>
                    </Link>
                </div>
            
           </div>
           <Cards />
        </>    
    )
}

export default Project;