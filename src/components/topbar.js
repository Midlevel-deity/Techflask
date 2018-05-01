import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faFlask from '@fortawesome/fontawesome-free-solid/faFlask';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV';
import { TopbarStyle } from './styles';

class Topbar extends Component{
  render(){
    return(
    <TopbarStyle>
      <span id='open' onClick={this.props.Menu}><FontAwesomeIcon id='icon' icon={faBars} /></span>
      <Link to='/'><FontAwesomeIcon icon={faFlask} /> Techflask</Link>
      <input onChange={this.props.searchChange} value={this.props.search} type='text' placeholder='Search Techflask...' className='search' />
      <ul>
        <a href='https://bit.ly/2HFWFB2' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href='https://instagram.com/techflask' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href='https://twitter.com/techflask' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href='https://bit.ly/2r7CHI6' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
        <a href='https://bit.ly/2HC7cOr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'slack-hash']} /></a>
        <Link to='#' id='dropdown' onClick={this.props.Dropdown}><FontAwesomeIcon icon={faEllipsisV} /></Link>
      </ul>
    </TopbarStyle>
    );
  }
}
export default Topbar;
