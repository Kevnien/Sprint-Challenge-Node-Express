import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import action from './actions';
import ProjectList from './components/ProjectList.js';

class App extends Component {
  componentDidMount(){
    this.props.action();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Projects</p>
        </header>
        <ProjectList projects={this.props.projects}/>
      </div>
    );
  }
}

const mapDispatchToProps = state =>({
  getting: state.getting,
  projects: state.projects
});

export default connect(mapDispatchToProps, {action})(App);
