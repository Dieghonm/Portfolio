import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/portfolio/Home'
import RpgHome from './components/Morpheus/RpgHome'
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
        
        <Route path="" component={ NotFound } />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;