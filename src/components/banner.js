import React, { Component } from 'react';
import { BannerStyle } from './styles';

class Banner extends Component{
  render(){
    return(
    <BannerStyle>
      <ul>
        <h1>Welcome to Techflask</h1>
        <p>Here you can find the best tech Stories, How to's, Tips & Tricks and more... want to submit a Story, How to, or Tips & Tricks? email us your artical down below.</p>
        <a href='https://mailto:techflaskio@gmail.com' target='_blank' rel='noopener noreferrer'><button className='btn'>Email us!</button></a>
      </ul>
    </BannerStyle>
    );
  }
}
export default Banner;
