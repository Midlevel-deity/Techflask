import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faChessKing from '@fortawesome/fontawesome-free-solid/faChessKing';
import { SidebarStyle } from './styles';

class Sidebar extends Component{
  render(){
    return(
    <SidebarStyle>
        <ul>
            <h1>Navigation</h1>
            <Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link>
            <Link to='/blog'><FontAwesomeIcon icon={faPencilAlt} /> Blog</Link>
            <Link to='/tips'><FontAwesomeIcon icon={faPlus} /> Tips & Tricks</Link>
            <Link to='/howto'><FontAwesomeIcon icon={faChessKing} /> How To's</Link>
        </ul>
        <ul id='social'>
            <img src={require('../images/slack.png')} alt='' className='icon' />
            <p>Want to chat or meet creative people like you! then join our slack comunity down below</p>
            <a href='https://bit.ly/2HC7cOr' target='_blank' rel='noopener noreferrer'><button className='btn'>Join our slack!</button></a>
        </ul>
    </SidebarStyle>
    );
  }
}
export default Sidebar;