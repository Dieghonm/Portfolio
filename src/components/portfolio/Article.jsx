import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <article className='portArticle'>
        <h2 className='ArticlePart'>Um pouco sobre mim</h2>

        <p className='ArticlePart'>- Sou só mais um nerdinho tentando ganhar o mundo, pretendendo fazer da minha diversão meu ganha pão. Sou fascinado por programação há mais de 20 anos, quando alguns amigos começaram a criar mods para um jogo online chamado Ultima Online, mas nessa época eu estava envolvido com pré-vestibular e os tutorias que existiam eram complicados e não era fácil de encontrar. </p>

        <p className='ArticlePart'>- Sou carioca da gema, ex servidor publico do estado do Rio, mas passei os últimos 5 anos morando em uma minuscula cidade no interior de MT (Itiquira), durante a pandemia de 2020 me vi perdido no meio do faroeste Mato-Grossense e voltei para o Rio.</p>

        <h2 className='ArticlePart'>Características & Habilidades</h2>
        <div className='listas'>
        <ul>
          <li>Git e GitHub</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>CSS FlexBox</li>
          <li>Java Script</li>
          <li>JEST</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <ul>
          <li>Formado em Administração</li>
          <li>Iniciante em programação</li>
          <li>Leitor compulsivo</li>
          <li>Viciado em livros</li>
          <li>Ótimo nadador</li>
          <li>Ex escoteiro</li>
          <li>Disléxico</li>
          <li>Nerd</li>
          <li>Otacu</li>
          <li>Desastrado</li>
          <li>Dança de salão</li>
          <li>Bom estrategista</li>
          <li>Sincero e verdadeiro</li>
          <li>Adoro desafios de lógica</li>
          <li>Péssimo em seguir minhas próprias estrategias</li>
        </ul>
        </div>
      </article>
    );
  }
}

export default NotFound;