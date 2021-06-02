import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <>
        <p className='notFound'>Arquivo nao encontrado</p>
        <Link className='navLink' to='/home/Article'>Pagina inicial</Link>
      </>
    );
  }
}

export default NotFound;