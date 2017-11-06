import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Template from "./Template";
/////////////////////////////////////////////
import {connect} from 'react-redux';
import {getAllAsync as getAll} from "./actions/productScore";

class App extends Component {
  componentDidMount(){
    this.props.getAll()
  }
  render() {
    console.log(this.props.productScore.datas)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    getAll: () => {
      dispatch(getAll())
    }
  }
}
const mapStateToProps = (state) => {
  return {productScore: state.productScore}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
