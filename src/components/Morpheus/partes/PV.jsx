import React, { Component } from 'react';
import Data from '../services/data';

class PV extends Component {

  Modular(tipo, nome) {
    const peri = Object.keys(tipo)
    return(
      <section className='boxElementos'>
        <h4>{nome}</h4>
        {peri.map((unit, i) => <p key={i}>{unit} = {tipo[unit]}</p>)}
      </section>)
  }

  render() {
    const { TotalRecebido, Atrubutos, DadosDeVida, PericiasComuns,SlotMagiaN1, Magia, ManterItems, Habilidades, CuboTransmorfo } = Data[this.props.match.params.id]
    return (
      <div>
        {console.log(TotalRecebido)}
        <h2>Pontos de Vitadidade</h2>
        {this.Modular(TotalRecebido, 'Total Recebido')}
        {this.Modular(Atrubutos, 'Atrubutos')}
        {this.Modular(DadosDeVida, 'Dados De Vida')}
        {this.Modular(PericiasComuns, 'Pericias Comuns')}
        {this.Modular(SlotMagiaN1, 'Slot Magia Nivel 1')}
        {this.Modular(Magia, 'Magia')}
        {this.Modular(ManterItems, 'Manter Items')}
        {this.Modular(Habilidades, 'Habilidades')}
        {this.Modular(CuboTransmorfo, 'Cubo Transmorfo')}
      </div>
    );
  }
}

export default PV;
