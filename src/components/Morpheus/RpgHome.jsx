import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import '../style/Home.css'

class RpgHome extends Component {
  render() {
    return(
      <div className='home'>
        <nav className='nav'>
          <Link to='/NotFound'>About</Link>
          <Link to='/Fichas/1'>Unorix</Link>
          <Link to='/Fichas/2'>Vove</Link>
          <Link to='/Fichas/3'>Paulão</Link>
          <Link to='/Fichas/4'>Raphael</Link>
          <Link to='/Personagens'>Personagens</Link>
          <Link to='/Itens'>Itens Maravilhosos</Link>
          <Link to='/MagiasETruques'>Magias e Truques</Link>
          <Link to='/Habilidades'>Habilidades</Link>
          <Link to='/PV/9'>Gastos de PV</Link>
        </nav>
        <ul>
          <li>!roll 1d4</li>
          <li>!roll 1d6</li>
          <li>!roll 1d8</li>
          <li>!roll 1d10</li>
          <li>!roll 1d12</li>
          <li>!roll 1d20</li>
          <li>!roll 1d100</li>
        </ul>
      </div>
    )
  }
}

export default RpgHome;