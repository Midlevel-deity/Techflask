import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';
import { ContentStyle } from '../components/styles';
import { BlogCards } from '../components/cards';

class Blog extends Component{
  render(){
    return(
    <Layout>
        <Helmet>
            <title>Blogs - Techflask</title>
        </Helmet>
        <ContentStyle>
            <h1>Blog Articles:</h1>
            {BlogCards.map(card =>
            <ul key={card.title}>
            <img src={card.img} alt='' className='img' />
            <img src={card.usr} alt='' className='usr' />
            <h2>{card.title}</h2>
            <p>{card.dis}</p>
            <Link to={card.href}><button className='btn'>Read!</button></Link>
            </ul>
            )}
        </ContentStyle>
    </Layout>
    );
  }
}
export default Blog;
