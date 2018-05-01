import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFire from '@fortawesome/fontawesome-free-solid/faFire';
import { LatestbarStyle } from './styles';

class Latestbar extends Component{
  render(){
    return(
    <LatestbarStyle>
      <p><FontAwesomeIcon icon={faFire} /> Latest</p>
      <Link to='/how1'>Install Linux</Link>
      <Link to='/blog1'>Learn Code</Link>
    </LatestbarStyle>
    );
  }
}
export default Latestbar;