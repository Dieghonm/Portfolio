import React, { Component } from 'react';
import Data from '../services/data';

class MagiasETruques extends Component {

  Modular(tipo, nome) {
    const peri = Object.keys(tipo)
    return(
      <section className='boxElementos'>
        <h4>{nome}</h4>
        {peri.map((unit, i) => <p key={i}>{unit} = {tipo[unit]}</p>)}
      </section>)
  }

  render() {
    const { truques, MagiasN1 } = Data[7]
    return (
      <div>
        {console.log(Data[8])}
        <h2>Magias E Truques</h2>
        {this.Modular(truques, 'truques')}
        {this.Modular(MagiasN1, 'Magias de nivel 1')}
      </div>
    );
  }
}

export default MagiasETruques;
