import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Layout from '../../components/layout';
import { ArticalBanner, ArticalStyle } from '../../components/styles';

class Blog1 extends Component{
  render(){
    return(
    <Layout>
        <Helmet>
            <title>Blogs - Techflask</title>
        </Helmet>
        <ArticalBanner>
            <ul>
                <img src={require('../../images/jvscrptr.jpeg')} alt='' className='usr' />
                <h1>Article by: Jvscrpt.r</h1>
                <a href='https://instagram.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href='https://twitter.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href='https://bit.ly/2qIJ7ya' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                <a href='https://github.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href='https://amazon.com/shop/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'amazon']} /></a>
            </ul>
        </ArticalBanner>
        <ArticalStyle>
            <h1>Why you should code --And how code can help you</h1>
            <iframe title='Why you should code' src='https://www.youtube.com/embed/Y-koyk0yl4M?rel=0' allow='autoplay; encrypted-media'></iframe>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <p>In the past I didn't think that I would be a developer because I looked at code and I thought that it looks hard and i'll never be able to learn the languages. but nonetheless when I was in 10th grade I learned HTML5, CSS, JS(JavaScript), and jQuery. but I wanted to do more because I looked at sites like Facebook and so on and wanted to make my own version of it. and to do so you need both back-end as well as front-end code which im learning back-end now via NodeJS as I am a JavaScript developer because I love all things JavaScript as it's such a simple yet powerful language in the video above I explain on the power you can have with code because you can literally make anything you want to and you don't have to wait for a developer to make it because you can make it yourself.</p>
        </ArticalStyle>
    </Layout>
    );
  }
}
export default Blog1;
