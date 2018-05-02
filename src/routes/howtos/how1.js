import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Layout from '../../components/layout';
import { ArticleBanner, ArticleStyle } from '../../components/styles';

class How1 extends Component{
  render(){
    return(
    <Layout>
        <Helmet>
            <title>How To's - Techflask</title>
        </Helmet>
        <ArticleBanner>
            <ul>
                <img src={require('../../images/jvscrptr.jpeg')} alt='' className='usr' />
                <h1>Article by: Jvscrpt.r</h1>
                <a href='https://instagram.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                <a href='https://twitter.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a href='https://bit.ly/2qIJ7ya' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                <a href='https://github.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href='https://amazon.com/shop/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'amazon']} /></a>
            </ul>
        </ArticleBanner>
        <ArticleStyle>
            <h1>How to install Linux --And why you should</h1>
            <img src={require('../../images/ubuntu.png')} alt='' className='img' />
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <p>Now you may be asking yourself what is Linux and why do I need it and thats good questions and the average PC or Mac user probably looks at Linux and think that its hard to install / use but now a days thats not true its actually very easy to install i will touch more on how to install Linux later but first let me explain what it is and why you need it. Linux by definition is a operating system for your PC and is open source. open source means that anyone can view the code of it and make there own version of Linux if wanted to thats what the beauty of open source is and best of all its Free yest thats right Free an entire operating system for your PC that you can get for Free i know it may seem unheard of to those that use mac or windows by the way both aren't open sourced and if you try to re-distribute it or selling it as you own or making your own spin on it you will get sued by Apple or Microsoft but with Linux you wont and never will.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <p>Microsoft and Apple by definition isn't open source meaning that you cant view the code and if you update your PC or Mac and there is a bug you'll have to wait till Microsoft or Apple release a new update for your device and sometimes they wouldn't even know of the bug so you'll essentially be screwed at that point. its sad but true where as with Linux if there is a bug you can view the forum from where you downloaded the OS and 99.9% of the time find the answer to the bug or question and if you cant you can make a bug report and it will mostly be fixed in the next day if not week. also im not going to say that there isn't viruses with Linux because there is but only like 1% and its highly unlikely that you will get one where as on Windows there are billions upon billions of them. with Linux there is no need for anti virus as you wont likely get one with Windows when you update your PC you have to restart it and update apps one by one as well on Mac but on Linux all your apps update at the same time and theres no need to restart your PC so while updating you can play games or brows the web.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <p>With Windows inside there EULA you know the thing that you just hit accept without even reading the full thing if at all if you scroll down a bit it essentially says that they have the right to control your PC via a back door now they don't say the term back door but essentially thats what it is for those that don't know a back door is tucked so far into your system that when your not on your PC others can open files brows threw your DATA and do what they will with it and im pretty sure that its the same for Mac but i don't know because i don't have a Mac all i run is Linux see with Mac and Windows you don't control the PC you cant theme it or un-install the annoying apps that you'll never use that come with the PC (bloat wear) but with Linux you 100% control the PC and its free and you can re-distribute it if want you can even sell it if want and you will never face any legal trouble.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <h1>Installing part</h1>
            <h1 style={{ color: '#ff0000', fontSize: 25 + 'px' }}>(I am not held responsible if you mess up your device I am just here for information only what you do with your own device is at your own risk)</h1>
            <h2>Step: 1</h2>
            <img src={require('../../images/flashdrive.jpg')} alt='' className='img' />
            <p>You need a flash drive 4gb will do if you only have a 2gb one than that should work as well but now a days you can get a 16gb or 32gb real cheep at walmart or on amazon.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <h2>Step: 2</h2>
            <img src={require('../../images/download.png')} alt='' className='img' />
            <p>What you want to do is go to <a href='https://www.ubuntu.com/download/desktop' target='_blank' rel='noopener noreferrer'>ubuntu.com</a> and pick which version you want and hit the download button you will be brought to a new page where it says do you want to pay hit the no just take me to the download link.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <h2>Step: 3</h2>
            <img src={require('../../images/unetbootin.png')} alt='' className='img' />
            <p>Go to <a href='https://unetbootin.github.io' target='_blank' rel='noopener noreferrer'>unetbootin.com</a> and download this tool to make a USB bootable flash drive they have steps to do so on there site.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <h2>Step: 4</h2>
            <img src={require('../../images/bios.jpg')} alt='' className='img' />
            <p>Ok so because of Windows 8 and up Microsoft put a flag in the BIOS making it a bit tricky getting Linux on your PC so what you have to do after you make your bootable drive is un-mount / un-plug it from the pc and restart and when you see a black screen as soon as the PC boots up spam what ever key it is for you to get into the boot menu some PC's its the esc key like on mine but others its the f12 key and so on and from there you should see a menu pop up that gives you options you want to select the option that says BIOS (CHANGE ONLY WHAT I TELL YOU AS THE BIOS CAN BE DANGEROUS) once in the BIOS you want to use the left and right arrow keys to go to the Boot tag then use the arrow up and down keys to go to SECURE BOOT turn that option off as this is what prevents Linux from being bootable to exit the BIOS and save just press f10 and your computer will reboot once it has done so turn it off again and insert your boodable drive and boot the pc while spaming the esc key or f12 key to open that menu again but this time your going to go to the option that says boot options select the one that shows your flash drive.</p>
            <br/><span id='break'>&bull; &bull; &bull;</span><br/>
            <h2>Step: 5</h2>
            <img src={require('../../images/ubuntuinstall.png')} alt='' className='img' />
            <p>Let it all load up and with any luck you should see this screen above and now start to try Linux as well as Install it if you have any questions you can message me on my social media above and id be happy to help you with any questions you may have.</p>
        </ArticleStyle>
    </Layout>
    );
  }
}
export default How1;
