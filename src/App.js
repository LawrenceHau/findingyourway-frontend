import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Adventure from './Components/Adventure';
import Path from './Components/Path';
import AllPathDetails from './Components/AllPathDetails';
import RouteOneDetail from './Components/RouteOneDetail';
import RouteTwoDetail from './Components/RouteTwoDetail';
import RouteThreeDetail from './Components/RouteThreeDetail';
import JungleCavernEnding from './Components/Endings/JungleCavernEnding';
import JungleRiverBankEnding from './Components/Endings/JungleRiverBankEnding';
import JungleStairsEnding from './Components/Endings/JungleStairsEnding';
import DesertSandOneEnding from './Components/Endings/DesertSandOneEnding';
import DesertSandTwoEnding from './Components/Endings/DesertSandTwoEnding';
import DesertSandThreeEnding from './Components/Endings/DesertSandThreeEnding';
import TundraIceCaveEnding from './Components/Endings/TundraIceCaveEnding';
import TundraBottomOfMountainEnding from './Components/Endings/TundraBottomOfMountainEnding';
import TundraTopOfMountainEnding from './Components/Endings/TundraTopOfMountainEnding';
import GoodEnding from './Components/GoodEnding';
import BadEnding from './Components/BadEnding';
import NeutralEnding from './Components/NeutralEnding';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navi from './Components/Navi';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navi />
        <Header/>
        <Route exact path='/'
                component={Main} />
      <Route exact path='/adventure'
                component={Adventure} />
      <Route path='/paths'
                component={AllPathDetails} />
      <Route exact path='/routeone'
                component={RouteOneDetail} />
      <Route exact path='/routetwo'
                component={RouteTwoDetail} />
      <Route exact path='/routethree'
                component={RouteThreeDetail} />
      <Route exact path='/goodending'
                component={GoodEnding} />
      <Route exact path='/badending'
                component={BadEnding} />
      <Route exact path='/neutralending'
                component={NeutralEnding} />
      <Route exact path='/junglecavernending'
                component={JungleCavernEnding} />
      <Route exact path='/jungleriverbankending'
                component={JungleRiverBankEnding} />
      <Route exact path='/junglestairsending'
                component={JungleStairsEnding} />
      <Route exact path='/desertsandoneending'
                component={DesertSandOneEnding} />
      <Route exact path='/desertsandtwoending'
                component={DesertSandTwoEnding} />
      <Route exact path='/desertsandthreeending'
                component={DesertSandThreeEnding} />
      <Route exact path='/tundraicecaveending'
                component={TundraIceCaveEnding} />
      <Route exact path='/tundratopofmountainending'
                component={TundraTopOfMountainEnding} />
      <Route exact path='/tundrabottomofmountainending'
                component={TundraBottomOfMountainEnding} />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
