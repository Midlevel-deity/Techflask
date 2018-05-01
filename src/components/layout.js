import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Topbar from './topbar';
import Latestbar from './latestbar';
import Sidebar from './sidebar';
import Menu from './menu';
import Dropdown from './dropdown';

class Layout extends Component{
  state = {
    openMenu: false,
    openDropdown: false,
    search: ''
  }
  toggleMenu = () => {
    this.setState(state => ({
      openMenu: !state.openMenu
    }))
  }
  toggleDropdown = () => {
    this.setState(state => ({
      openDropdown: !state.openDropdown
    }))
  }
  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  render(){
    return(
    <div style={{ marginBottom: 100 + 'px' }}>
      <Helmet>
        <title>Techflask - How To's, Tips & Tricks and more...</title>
      </Helmet>
      <Topbar Menu={this.toggleMenu} Dropdown={this.toggleDropdown} searchChange={this.handleSearchChange} search={this.state.search} />
      <Menu open={this.state.openMenu}></Menu>
      <Dropdown open={this.state.openDropdown}></Dropdown>
      <Latestbar />
      <Sidebar />
      {this.props.children}
      {this.props.render && this.props.render(this.state.search)}
    </div>
    );
  }
}
export default Layout;
