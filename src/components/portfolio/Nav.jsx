import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NotFound extends Component {
  render() {
    return (
      <nav className='nav'>
        <Link className='navLink' to='/home/Article'>Home</Link>
        <Link className='navLink' to='/home/PixelArt'>Pixel Art</Link>
        <Link className='navLink' >Todo List</Link>
        <Link className='navLink' >Pokédex</Link>
        <Link className='navLink' >e-commerce</Link>
        {/* <Link className='navLink' >p3</Link>
        <Link className='navLink' >p4</Link>
        <Link className='navLink' >p5</Link>
        <Link className='navLink' >p6</Link> */}
        <Link className='navLink' to='/RpgHome'>Morpheus Historys</Link>
      </nav>
      
    );
  }
}

export default NotFound;