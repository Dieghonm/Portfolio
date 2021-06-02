import React, { Component } from 'react';
import './StylePixel.css'

class PixelArt extends Component {
  
  render() {
    return (
      <body>
        <header>
          <h1 id = 'title'>Paleta de Cores</h1>
        </header>
        <section>
    
        <div id = 'color-palette'>
          <h3>Cores fixas</h3>
          <span className = 'color selected' id = 'black'></span>
          <span className = 'color' id = 'blue'></span>
          <span className = 'color' id = 'yellow'></span>
          <span className = 'color' id = 'red'></span>
        </div>

        <div id = 'seilah'>
          <h3>Cores aleatorias</h3>
          <div id = 'coresAleatorias'>
            <span className = 'color' id = 'cor1'></span>
            <span className = 'color' id = 'cor2'></span>
            <span className = 'color' id = 'cor3'></span>
            <span className = 'color' id = 'cor4'></span>
          </div>
        </div>
        <div><button id = 'gerar'>Random</button></div>

        </section>
          <h4>Tamanho da Pixel Arte</h4>
          <div>Escolha um tamanho entre 5 e 50 blocos</div>
          <div id = 'valor-atual'></div>
          <span class="flexy-s">
            <input type="text" id = 'board-size' min = {0} class="caixa-texto" placeholder="Escolha um valor entre 5 e 50" />
          </span>
          <button id = 'generate-board'>VQV</button>
          <div><button id = 'clear-board'>Limpar</button></div>
        <section id = 'pixel-board'>
        </section>
      </body>
    );
  }
}

export default PixelArt;