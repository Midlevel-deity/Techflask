import React, { Component } from 'react';
import { DropdownStyle } from './styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

class Dropdown extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <DropdownStyle>
        <a href='https://bit.ly/2HFWFB2' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href='https://instagram.com/techflask' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href='https://twitter.com/techflask' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href='https://bit.ly/2r7CHI6' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
        <a href='https://bit.ly/2HC7cOr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'slack-hash']} /></a>
      </DropdownStyle> : null }
    </React.Fragment>
    );
  }
}
export default Dropdown;