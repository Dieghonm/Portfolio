import React, { Component } from 'react';

import Head from './Head'
import Article from './Article'
import Nav from './Nav'
import PixelArt from '../Fundamentos/PixelArt'

import './Style.css'


class NotFound extends Component {

  pagina(expr) {
    switch (expr) {
      case 'Article':
        return <Article />
        case 'PixelArt':
          return <PixelArt />
      default:
        return <Article />
    }
  }


  render() {
    return (
      <div>
        <Head />
        <div className='bodyHome'>
          <Nav />
          {this.pagina(this.props.match.params.id)}
        </div>
          
        
      </div>
    );
  }
}

export default NotFound;


