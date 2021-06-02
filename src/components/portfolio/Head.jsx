import React, { Component } from 'react';

import Diegho from './Diegho.jpeg'

class NotFound extends Component {
  render() {
    return (
      <header>
        <div className="topo">    
          <div className="h1img">
            <img className="img" src={Diegho} alt='Minha foto' />
            <h1>Diegho Neves de Moraes</h1>
          </div>
        {/* <ul class="topcos"> */}
          {/* <li><a href="#Sobre mim">Um pouco sobre mim</a></li> */}
          {/* <li><a href="#CH">Caracteristicas & Habilidades</a></li> */}
          {/* <li><a href="#Links">Links</a></li> */}
        {/* </ul> */}
        </div>

      </header>
    );
  }
}

export default NotFound;