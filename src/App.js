import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import Footer from './components/Footer/Footer';
import Home from'./pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Unix from './pages/project/Unix';
import ShopCUT from './pages/project/ShopCUT';
import TombRaider from './pages/project/TombRaider';
import Dompetku from './pages/project/Dompetku';
import Cerberus from './pages/project/Cerberus';
import Indonesia from './pages/project/Indonesia';
import Works from './pages/Works';
import About from './pages/About';


function App() 
{  
  return (
      <>
        <Router>
          <Navbar />
          <HeroSection />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Project" exact component={Project} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Unix" exact component={Unix} />
            <Route path="/ShopCUT" exact component={ShopCUT} />
            <Route path="/TombRaider" exact component={TombRaider} />
            <Route path="/Dompetku" exact component={Dompetku} />
            <Route path="/Cerberus" exact component={Cerberus} />
            <Route path="/ExploreIndonesia" exact component={Indonesia} />
            <Route path="/Works" exact component={Works} />
          </Switch>
          <Footer />
        </Router>
      </>
  );
}

export default App;