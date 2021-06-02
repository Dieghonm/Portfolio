import React from 'react';
import { Link } from 'react-router-dom';

import amuleto from '../services/amuleto.jpg'
import '../style/Header.css'

class Head extends React.Component {
  render() {
    return(
      <header className='header'>
        <div className='logo'>
          <img className="img" src={amuleto} alt='auryn' />
          <h1 className='titulo'>Morpheus Storyes</h1>
        </div>
        <nav>
        <Link className='navLink' to='/RpgHome'>Morpheus Home</Link>
          {/* <Link to="/Fichas">Fichas</Link>
          <Link to="/Itens">Itens</Link>
          <Link to="/Personagens">Personagens</Link> */}
          <Link className='navLink' to='/Portfolio'>Portfólio</Link>
        </nav>
      </header>
    )
  }
}

export default Head