import React, { useState } from 'react';
import { Button } from '../components/Button/Button'
import { Link } from 'react-router-dom'
import CardItems from '../components/Cards/CardItems'
import '../components/Cards/Cards.css'
import '../App.css'
import '../pages/project/sections.css' 
import ScrollToTop from "../scrollToTop"; 
import ProfilePicture from "../components/images/Profile.png";
import Exp1 from "../components/images/exp1.png";
import Exp2 from "../components/images/exp2.png";
import Exp3 from "../components/images/exp3.png";
import Unix from "../components/images/Unix.png";
import Shop from "../components/images/Shopscut.png";
import Tomb from "../components/images/Tombraider.jpg";
import Indonesia from "../components/images/Exploreindonesia.png";



function Home (){

    const[message,setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return(
        <>
        <ScrollToTop />
        {/*About*/}
        <div id="about" className='aboutsection'>
            <div className='aboutRow'>
                <div className='leftColumn'>
                    <figure className='ProfilePicture'>
                        <img src={ProfilePicture} className="image" />
                    </figure>
                </div>
                <div className='rightColumn'>
                    <h1 className='aboutTitle'>Hi There, I'm</h1>
                    <p className='aboutSubTitle'>Ivan Nathan Parmenas</p>
                    <br></br>
                    <h2 className='heading'>About Me</h2>
                    <p className='aboutBody'> 
                    I am highly organized, passionate, and responsible for the task I have beenentrusted with.
                    Currently, I am in my fourth year studying Computer Scienceand Engineering in China where I have been involved in a part-time job, andteam projects such as computer fps game, android money management app,website, and SQL Database. I am seeking this opportunity to put myknowledge and experience in practice, and enhance my coding skills.
                    </p>
                    <Link to='/About' className="aboutlinks" >
                        <Button className='aboutButton' buttonStyle='button--More' buttonSize='button--Medium'><i class="fas fa-angle-double-right"></i> More about me</Button>
                    </Link>
                </div>
            </div>
        </div>
        {/*Experience*/}
        <div id="works" className='expsection'>
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
        {/*Projects*/}
        <div id="about" className='projectsectionmore'>
            <h2 className='centerheading'>Projects</h2>
                <div className="card">
                    <div className="projectRow">
                        <div className="cards__container">
                            <div className="cards__wrapper">
                                <ul className="cards__items">
                                    <CardItems src={Unix} 
                                        text='Unix File System Design'
                                        label='File System' 
                                        path='/Unix' />
                                    <CardItems src={Shop} 
                                        text='ShopCUT e-Commerce Application'
                                        label='E-commerce' 
                                        path='/ShopCUT' />
                                    <CardItems src={Tomb}
                                        text='The Raider of the Tomb'
                                        label='Game' 
                                        path='/TombRaider' />
                                    <CardItems src={Indonesia}
                                        text='Explore Indonesia'
                                        label='Website' 
                                        path='/ExploreIndonesia' />
                                </ul>
                            </div>
                        </div>
                    <Link to='/Project' className="projectlinks" >
                        <Button className='projectButton' buttonStyle='button--More' buttonSize='button--Medium'><i class="fas fa-angle-double-right"></i> More My Projects</Button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;

        