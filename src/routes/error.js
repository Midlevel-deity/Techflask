import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ErrorStyle } from '../components/styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

class Error extends Component{
  render(){
    return(
    <div>
        <Helmet>
            <title>404 - Techflask</title>
        </Helmet>
        <ErrorStyle>
            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} /> Lets go back home</Link>
            <h1>404</h1>
            <p>Page not found we are sorry.</p>
        </ErrorStyle>
    </div>
    );
  }
}
export default Error;
