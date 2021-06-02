import React, { Component } from 'react';
import Data from '../services/data';

class Habilidades extends Component {

  Modular(tipo, nome) {
    const peri = Object.keys(tipo)
    return(
      <section className='boxElementos'>
        <h4>{nome}</h4>
        {peri.map((unit, i) => <p key={i}>{unit} = {tipo[unit]}</p>)}
      </section>)
  }

  render() {
    const { Habilidades } = Data[8]
    return (
      <div>
        {console.log(Data[8])}
        <h2>Habilidades</h2>
        {this.Modular(Habilidades, 'Habilidades')}
      </div>
    );
  }
}

export default Habilidades;
