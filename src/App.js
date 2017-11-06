import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Template from "./Template";

class App extends Component {
  state = {
    datas: [
      {
        id: 1,
        name: 'facebook',
        score: 1
      }, {
        id: 2,
        name: 'google',
        score: 1
      }
    ]
  }
  plusScore = (id) => {
    console.log(id, 'plusScore')
    this.setState({
      datas: this
        .state
        .datas
        .map((data) => {
          if (data.id === id) {
            return {
              id: data.id,
              name: data.name,
              score: data.score + 1
            };
          }
          return data;
        })
    })
  }

  minusScore = (id) => {
    console.log(id, 'minusScore')
    this.setState({
      datas: this
        .state
        .datas
        .map((data) => {
          if (data.id === id) {
            return {
              id: data.id,
              name: data.name,
              score: data.score - 1
            };
          }
          return data;
        })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Template
          data={this.state.datas[0]}
          plusScore={this.plusScore}
          minusScore={this.minusScore}/>
        <Template
          data={this.state.datas[1]}
          plusScore={this.plusScore}
          minusScore={this.minusScore}/>
      </div>
    );
  }
}

export default App;
