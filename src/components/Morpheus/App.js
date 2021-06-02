import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Head from './components/Head';
import Fichas from './components/Fichas';
import Itens from './components/Itens';
import Personagens from './components/Personagens';
import PV from './components/PV'
import Habilidades from './components/Habilidades'
import MagiasETruques from './components/MagiasETruques'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Head />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Fichas/:id' render={(props) => <Fichas {...props}/>} />
        <Route path="/Itens" component={ Itens } />
        <Route path="/PV/:id" component={ PV } />
        <Route path="/Habilidades" component={ Habilidades } />
        <Route path="/MagiasETruques" component={ MagiasETruques } />
        MagiasETruques
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
