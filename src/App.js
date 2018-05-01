import React, { Component, Fragment } from 'react';
import Layout from './components/layout';
import Banner from './components/banner';
import Content from './components/content';
import {HomeCards as cards} from './components/cards';

class App extends Component{
  render(){
    return(
    <Layout render={ (search) => (
      <Fragment>
        {!search &&  <Banner />}
        <Content cards={cards} search={search} />
      </Fragment>
    )}>
    </Layout>
    );
  }
}
export default App;