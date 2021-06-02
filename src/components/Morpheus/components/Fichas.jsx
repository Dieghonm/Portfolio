import React from 'react';
import '../style/Fichas.css'
import Data from '../services/data';
import RpgHead from './RpgHead'

class Fichas extends React.Component {

  atributos(h4){
    const { atributos } =Data[this.props.match.params.id]
    const atri = Object.keys(atributos)
    return(
      <div>
        <h4>{h4}</h4>
        {atri.map((at) => <p>{at}</p>)}
      </div>)
  }
  
  ModularAtri(h4, menos, div, resist){
    const { atributos, resistencias } =Data[this.props.match.params.id]
    const {força, destreza, constituição, inteligencia, sabedoria, carisma} = atributos;
    const {fo, des, cons, int, sab, car} = resistencias
    return(
      <div>
        <h4>{h4}</h4>
        <p>{Math.floor((força + menos)/div)+fo}</p>
        <p>{Math.floor((destreza + menos)/div)+(des*resist)}</p>
        <p>{Math.floor((constituição + menos)/div)+(cons*resist)}</p>
        <p>{Math.floor((inteligencia + menos)/div)+(int*resist)}</p>
        <p>{Math.floor((sabedoria + menos)/div)+(sab*resist)}</p>
        <p>{Math.floor((carisma + menos)/div)+(car*resist)}</p>
      </div>)
  }

  ModularEquip(tipo, nome) {
    const peri = Object.keys(tipo)
    return(
      <section className='boxElementos'>
        <h4>{nome}</h4>
        {peri.map((unit, i) => <p key={i}>{unit} = {tipo[unit]}</p>)}
      </section>)
  }

  Sanidade(tipo, nome) {
    // const tip = Object.keys(tipo)
    return(
      <section className='boxRadio'>
        <h4>{nome}</h4>
        <input type="radio" readOnly checked />
        <input type="radio" readOnly checked />
        <input type="radio" readOnly checked />
        <input type="radio" readOnly checked />
        <input type="radio" readOnly checked />
        <input type="radio" readOnly />
        <input type="radio" readOnly />
        <input type="radio" readOnly />
        <input type="radio" readOnly />
        <input type="radio" readOnly />
      </section>)
  }

  SumCaItens(tipo, CA) {
    let SomaCa = CA
    let arrOfNumbers = Object.values(tipo);
      for (let sum of arrOfNumbers) {
        SomaCa += sum;
      console.log(SomaCa);
    }
    return SomaCa
  }

  render() {
    const { name, Raça, VidaDescanso, apelido, pv, ac, atributos, vida, pericias,ItensEspeciais, Equipamento, CAItens, MagiaN1, truques, Habilidades, cubo, Sanidade } = Data[this.props.match.params.id]
    const {destreza, constituição} = atributos;

    // ac:10,

    return(
      <main>
        {/* {console.log(this.props)} */}
        <RpgHead />
        <section className='identidade'>
          <h1>Nome: {name}</h1>
          <div>
            <h4>Apelido: {apelido}</h4>
            <h4>Raça: {Raça}</h4>
          </div>
          <div>
            <p>Vida : {vida+(Math.floor((constituição -10)/2))+ Math.floor(pv/2)}</p>
            <p>Vida /p descanso: {VidaDescanso}</p>
            <p>Pontode de vitalidade [PV]  :  {pv}</p>
          </div>
          <div>
            <p>Iniciativa : {Math.floor((destreza -10)/2)}</p>
            <p>Classe de armadura : {this.SumCaItens(CAItens, ac)}</p>
          </div>
        </section>
        <div className='elementos'>
        <section className='boxAtributos'>
          {this.atributos('Atributos', '')}
          {this.ModularAtri('Pontos', 0, 1, 0)}
          {this.ModularAtri('Mods', -10, 2, 0)}
          {this.ModularAtri('Resistencia', -10, 2, 1)}
        </section>
        <section className='boxOrder'>
          {this.ModularEquip(pericias, 'Pericias')}
          {this.ModularEquip(Habilidades, 'Habilidades')}
        </section>
        <section className='boxOrder'>
          {this.ModularEquip(truques, 'Truques')}
          {this.ModularEquip(MagiaN1, 'Magia de Nivel 1')}
          {this.Sanidade(Sanidade, 'Magia de Nivel 1')}
          {this.ModularEquip(MagiaN1, 'Magia de Nivel 2')}
          {this.Sanidade(Sanidade, 'Magia de Nivel 2')}
          {this.Sanidade(Sanidade, 'Sanidade')}
        </section>
        <section className='boxOrder'>
          {this.ModularEquip(cubo, 'Cubo')}
          {this.ModularEquip(ItensEspeciais, 'Itens Especiais')}
          {this.ModularEquip(CAItens, 'Armadura e Proteção')}
          {this.ModularEquip(Equipamento, 'Equipamento')}
        </section>
        </div>
      </main>
    )
  }
}

export default Fichas