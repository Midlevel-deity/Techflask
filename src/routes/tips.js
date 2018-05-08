import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { ContentStyle } from '../components/styles';

class Tips extends Component{
  render(){
    return(
    <Layout>
        <Helmet>
            <title>Tips & Tricks - Techflask</title>
        </Helmet>
        <ContentStyle>
            <h1>Tips & Tricks Articles:</h1>
        </ContentStyle>
    </Layout>
    );
  }
}
export default Tips;
