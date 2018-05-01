import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Layout from '../../components/layout';
import { ArticalBanner, ArticalStyle } from '../../components/styles';

class Blog2 extends Component{
  render(){
    return(
    <Layout>
        <Helmet>
            <title>Blogs - Techflask</title>
        </Helmet>
        <ArticalBanner>
            <ul>
                <img src={require('../../images/rea.jpeg')} alt='' className='usr' />
                <h1>Artical by: Rea Newell</h1>
                <a href='https://www.instagram.com/reanewellwebdev/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href='https://twitter.com/reanewell' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href='https://github.com/reanewell' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href='https://codepen.io/reanewell' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
            </ul>
        </ArticalBanner>
        <ArticalStyle>
            <h1>Keep on Commenting —When I Learned About the Importance of Writing Comments in Code</h1>
            <p>Everyone told me to write comments in code. Write them all the time and be very specific. I tried this out. That lasted about ten minutes. Commenting everywhere in my code did not seem to be helping at all. It seemed too tedious. I have to admit that I felt I was “too good” to rely on comments to keep track of my work. I wrote the code, so I will definitely remember it all. Surely at least one person reading this has had the same experience. Here are a few simple reasons why we were wrong. Once you have started working on more complex projects, you begin to bounce around more and more files. While putting together a project made with React and Redux, I had not made any attempt to comment in my code. It was not too far into my project before I was getting lost. I would forget what functions did, why I implemented certain patterns, and organization ended up a mess. I had to reconcile with myself. Perhaps trying to write a few comments would not be too bad after all. So, I began to write them into a JavaScript file, explaining the purpose of a function I had written. That was not so hard. After coming back to this file, it was super easy to remember exactly what was going on. That was when the purpose of commenting your code really “clicked” for me. Afterwards, I continued through that coding session, commenting all the bits of code that were not self-explanatory. Every time I came back to a file, I knew what everything was and where to find it. If someone asks you to explain what exactly your code does and why, could you give them an accurate answer? Those that are pretty new to programming, like me, may not be able to give a full and accurate answer to this question. This is where commenting your code comes in. Once you are forced to write an explanation in your code, you get a better picture of what you really understand. If you can’t put what you are doing into words, this leads to more research on your part. Eventually, maybe after hours of scavenging through Stack Overflow or Documentation, you will be able to put your actions into words.
            <br/><br/><img src={require('../../images/comments.png')} alt='' className='img' />
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            This cycle will add to your learning and solidify your confidence in your code. Some of you beginners have already started looking at other’s source code. Did you see comments in the code? Having comments in your code can be a helpful tool for other that may see it. Beginners may not understand the conceptual material in your code or more advanced programmers may want to know why you used a specific algorithm. In most cases, a simple comment could save your fellow developers a lot of time researching or trying to get into contact with you to ask questions. To me, it just seems like writing comments in code you know others will see is proper “coding etiquette”. I have found myself in several situations where I wished the developer explained a function or object in the code. I know that not everyone will have the same standard as to what is deserving of documentation inside the code itself. It is important to know how if your code is self-evident. Can you read the code and understand it clearly just by the way it is written?
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            Do you think others can understand it as easily? If you are unsure about these answers, you may want to think about writing at least a small description. At the end of the day, commenting your code is up to you. Of course, your programs and websites will run properly without them. The comments aren’t there for the machine though. They are their for you, the human. Comments will make it easier for you to navigate your documents, confirm your understanding of the material, and help others come to an understanding of your code. If you are having issues related to these points when you are programming, give comments a try. At the very least, they won’t break your code!</p>
        </ArticalStyle>
    </Layout>
    );
  }
}
export default Blog2;
