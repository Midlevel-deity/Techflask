import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../App';
import Blog from './blog';
import Blog1 from './blogs/blog1';
import Blog2 from './blogs/blog2';
import Tips from './tips';
import Howto from './howto';
import How1 from './howtos/how1';
import Error from './error';

class Routes extends Component{
  render(){
    return(
    <React.Fragment>
      <Route exact path='/' component={Index}></Route>
        <Switch>
          <Route path='/blog' component={Blog}></Route>
          <Route path='/blog1' component={Blog1}></Route>
          <Route path='/blog2' component={Blog2}></Route>
          <Route path='/tips' component={Tips}></Route>
          <Route path='/howto' component={Howto}></Route>
          <Route path='/how1' component={How1}></Route>
          <Route path='/error' component={Error}></Route>
        </Switch>
    </React.Fragment>
    );
  }
}
export default Routes;