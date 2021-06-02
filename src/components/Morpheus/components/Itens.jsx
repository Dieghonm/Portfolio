import React, { Component } from 'react';
import Data from '../services/data';

class Itens extends Component {

  Modular(tipo, nome) {
    const peri = Object.keys(tipo)
    return(
      <section className='boxElementos'>
        <h4>{nome}</h4>
        {peri.map((unit, i) => <p key={i}>{unit} = {tipo[unit]}</p>)}
      </section>)
  }

  render() {
    return (
      <div>
        {console.log(Data[8])}
        <h2>Itens</h2>
        {this.Modular(Data[6], 'Itens')}
      </div>
    );
  }
}

export default Itens;
