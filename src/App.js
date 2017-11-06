import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Template from "./Template";
/////////////////////////////////////////////
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Template
          data={this.props.productScore.datas[0]}
          plusScore={this.props.plusScore}
          minusScore={this.props.minusScore}/>
        <Template
          data={this.props.productScore.datas[1]}
          plusScore={this.props.plusScore}
          minusScore={this.props.minusScore}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {productScore: state.productScore}
}

export default connect(mapStateToProps, undefined)(App);
