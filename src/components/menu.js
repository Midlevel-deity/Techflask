import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './styles';

class Menu extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <MenuStyle>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/tips'>Tips & Tricks</Link>
        <Link to='/howto'>How To's</Link>
      </MenuStyle> : null }
    </React.Fragment>
    );
  }
}
export default Menu;