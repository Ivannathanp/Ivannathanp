import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from'./pages/Home';
import Unix from './pages/project/Unix';
import ShopCUT from './pages/project/ShopCUT';
import TombRaider from './pages/project/TombRaider';
import Dompetku from './pages/project/Dompetku';
import Cerberus from './pages/project/Cerberus';
import Indonesia from './pages/project/Indonesia';
import About from './pages/About';


function App() 

{  
  return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Unix" exact component={Unix} />
            <Route path="/ShopCUT" exact component={ShopCUT} />
            <Route path="/TombRaider" exact component={TombRaider} />
            <Route path="/Dompetku" exact component={Dompetku} />
            <Route path="/Cerberus" exact component={Cerberus} />
            <Route path="/ExploreIndonesia" exact component={Indonesia} />
          </Switch>
        </Router>
      </>
  );
}

export default App;