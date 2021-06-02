import React, { Component } from 'react';
import Data from '../services/data';

class Personagens extends Component {

  
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
          <h2>Personagens</h2>
          {this.Modular(Data[5], 'Personagens')}
        </div>
      );
    }
  }
  
export default Personagens;
