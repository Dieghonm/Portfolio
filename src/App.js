import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/portfolio/Home'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/Home/:id' render={(props) => <Home {...props}/>} />
        <Route path="" component={ NotFound } />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;