import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/portfolio/Home'
import RpgHome from './components/Morpheus/RpgHome'
import Fichas from './components/Morpheus/partes/Fichas'
import Itens from './components/Morpheus/partes/Itens';
import PV from './components/Morpheus/partes/PV'
import Habilidades from './components/Morpheus/partes/Habilidades'
import MagiasETruques from './components/Morpheus/partes/MagiasETruques'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Switch >
        <Route exact path='/Portfolio' component={ Home } />
        <Route exact path='/Home/:id' render={(props) => <Home {...props}/>} />
        <Route exact path='/RpgHome' component={ RpgHome } />
        <Route path='/Fichas/:id' render={(props) => <Fichas {...props}/>} />
        <Route path="/Itens" component={ Itens } />
        <Route path="/PV/:id" component={ PV } />
        <Route path="/Habilidades" component={ Habilidades } />
        <Route path="/MagiasETruques" component={ MagiasETruques } />
        <Route path="" component={ NotFound } />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;