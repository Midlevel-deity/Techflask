import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ContentStyle } from './styles';
import { cards } from './cards'

class CardRenderer extends Component{
  renderCards = ()=>{
    if(this.props.search){
      const filtered = this.filterCards(this.props.search)
      return(
      <Fragment>
      {filtered.map(card =>
        <ul key={card.title}> 
          <img src={card.img} alt='' className='img' />
          <img src={card.usr} alt='' className='usr' />
          <h2>{card.title}</h2>
          <p>{card.dis}</p>
          <Link to={card.href}><button className='btn'>Read!</button></Link>
        </ul>
      )}
      </Fragment>
      )}
      return(
      <Fragment>
      {this.props.cards.map(card =>
        <ul key={card.title}>
          <img src={card.img} alt='' className='img' />
          <img src={card.usr} alt='' className='usr' />
          <h2>{card.title}</h2>
          <p>{card.dis}</p>
          <Link to={card.href}><button className='btn'>Read!</button></Link>
        </ul>
      )}
      </Fragment>
      )}
      filterCards(s){
        return cards.filter((card)=>{
        return card.title.toLowerCase().includes(s.toLowerCase())
      })
    }
    render(){
      return(
      <ContentStyle>
        {!this.props.search && <h1>Articles:</h1>}
        {this.renderCards()}
      </ContentStyle>
    );
  }
}
export default CardRenderer;